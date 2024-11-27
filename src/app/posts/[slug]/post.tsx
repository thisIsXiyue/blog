
interface PostProps {
  post: {
    metadata: {
      title: string;
      location: string;
      year: string;
    };
    content: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <div>
      <h1>{post.metadata.title}</h1>
      <p>{post.metadata.location} - {post.metadata.year}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}