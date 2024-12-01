import styles from './page.module.css';
import cn from 'classnames';

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
    <div className={styles.page}>
      <div className={styles.side}>
        <h1 className={styles.title}>{post.metadata.title}</h1>
        <div className={styles.location}>{post.metadata.year}</div>
      </div>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}