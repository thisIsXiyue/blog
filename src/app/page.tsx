
import { getAllPosts } from '../lib/posts';
import styles from './page.module.css';
import cn from 'classnames';
import PostsComponent from './posts';


export default function Home() {
  const posts = getAllPosts();


  // get all unique locations without duplicates
  const locations = [...new Set(posts.map(post => post.metadata.location))];

  return (
    <div className={styles.outerPage}>
      <div className={styles.page}>
        <div className={styles.innerPage}>
          <PostsComponent posts={posts} locations={locations} />
        </div>
        <footer className={styles.copyright}>©2025 xiyue zhang</footer>
      </div>

    </div>
  );
}
