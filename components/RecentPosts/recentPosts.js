import React, { useState, useEffect } from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import gql from 'graphql-tag';
import client from 'js/client';
import PostCard from 'components/PostCard/postCard';

const query = gql`
  query Post {
    posts @rest(type: "Post", path: "/entries?content_type=posts") {
      total,
      items @type(name: "Post") {
        sys @type(name: "Post") {
          id,
          createdAt
        },
        fields @type(name: "Post") {
          title,
          slug,
          excerpt
        }
      }
    }
  }
`;

const RecentPosts = () => {
  const [posts, setPosts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.query({ query }).then(({ data }) => {
      setPosts(data.posts);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return 'Loading...';

  return (
    <section className="recent-posts">
      <div className="grid">
        <Heading text="Recent Posts" />
        {posts.items.map(({ fields, sys }) => (
          <Link
            key={sys.id}
            href="/works/post/[post-id]"
            as={`/works/post/${fields.slug}`}
          >
            <a className="recent-posts__item">
              <PostCard
                title={fields.title}
                excerpt={fields.excerpt}
                date={sys.createdAt}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
