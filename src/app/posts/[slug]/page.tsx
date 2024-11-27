import { getPostBySlug, getAllPosts } from '../../../lib/posts';

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

import Post from './post';

interface Params {
  slug: string;
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const postData = getPostBySlug(slug);
  // const mdxSource = await serialize(post.content);
  console.log(postData.content);

  const postContent = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(postData.content)

  const post = {
    metadata: {
      title: String(postData.metadata.title),
      location: String(postData.metadata.location),
      year: String(postData.metadata.year),
    },
    content: String(postContent)
  }

  
  return <Post post={post} />;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}