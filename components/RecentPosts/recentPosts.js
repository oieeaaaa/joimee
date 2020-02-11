import React from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import PostCard from 'components/PostCard/postCard';
import Loading from 'components/Loading/loading';

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

  if (loading) return <Loading />;
  if (error) return <div>Error!!!</div>;
  return (
    <section className="recent-posts">
      <div className="grid">
        <Heading text="Recent Posts" />
        {data.posts.map(post => (
          <Link key={post.id} href="/works/post/[postID]" as={`/works/post/${post.id}`}>
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
