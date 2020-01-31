import React, { useState, useEffect } from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import PostCard from 'components/PostCard/postCard';

const GET_RECENT_POSTS = gql`
  query {
    posts(orderBy: createdAt_ASC, last: 3) {
      title,
      id,
      slug,
      excerpt,
      createdAt
    }
  }
`;

const RecentPosts = () => {
  const { loading, error, data } = useQuery(GET_RECENT_POSTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;
  return (
    <section className="recent-posts">
      <div className="grid">
        <Heading text="Recent Posts" />
        {data.posts.map(post => (
          <Link key={post.id} href="/works/post/[post-id]" as={`/works/post/${post.slug}`}>
            <a className="recent-posts__item">
              <PostCard title={post.title} excerpt={post.excerpt} date={post.createdAt} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
