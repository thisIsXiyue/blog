
import { getAllPosts } from '../lib/posts';
import PostsComponent from './posts';


export default function Home() {
  const posts = getAllPosts();


  // get all unique locations without duplicates
  const locations = [...new Set(posts.map(post => post.metadata.location))];

  return (
    <>
      <PostsComponent posts={posts} locations={locations} />
    </>
  );
}
