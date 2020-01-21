import React from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import PostCard, { FAKE_POSTS } from 'components/PostCard/postCard';

const RecentPosts = () => (
  <section className="recent-posts">
    <div className="grid">
      <Heading text="Recent Posts" />
      {FAKE_POSTS.map(post => (
        <Link key={post.title} href="/works/post/[post-id]" as={`/works/post/${post.path}`}>
          <a className="recent-posts__item">
            <PostCard title={post.title} excerpt={post.excerpt} date={post.date} />
          </a>
        </Link>
      ))}
    </div>
  </section>
);

export default RecentPosts;
