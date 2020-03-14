import React from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import PostCard from 'components/PostCard/postCard';
import posts from 'data/posts';

const RecentPosts = () => (
  <section className="recent-posts">
    <div className="grid">
      <Heading text="Recent Posts" />
      {posts.map(post => (
        <Link key={post.path} href={post.path}>
          <a className="recent-posts__item">
            <PostCard title={post.title} excerpt={post.summary} date={post.publishedAt} />
          </a>
        </Link>
      ))}
    </div>
  </section>
);

export default RecentPosts;
