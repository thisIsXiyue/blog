"use client";

import styles from './page.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

interface Post {
  slug: string;
  metadata: {
    [key: string]: string;
  };
  content: string;
}

interface PostsComponentProps {
  posts: Post[];
  locations: string[];
}

export default function PostsComponent({ posts, locations }: PostsComponentProps) {

  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const filteredPosts = selectedLocation ? posts.filter(post => post.metadata.location === selectedLocation) : [];

  return (
    <>
      <div className={styles.locations}>
        {locations.map((location) => (
          <div
            key={location}
            className={cn(
              styles.location,
              location.toLowerCase() === "shanghai" ? styles.shanghai : '',
              selectedLocation === location ? styles.selected : ''
            )}
            onClick={() => setSelectedLocation(location)}>{location}</div>
        ))}
      </div>
      <div className={styles.posts}>
        {filteredPosts.map((post) => (
          <div key={post.slug} className={cn(
            styles.post,
            post.metadata.location.toLowerCase() === "shanghai" ? styles.shanghai : '',
          )}>
            <Link href={`/posts/${post.slug}`}>
              {post.metadata.title}, {post.metadata.year}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}