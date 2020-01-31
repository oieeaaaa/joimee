import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import client from 'js/client';
import includeAsset from 'js/includeAsset';
import Layout from 'components/Layout/layout';

const query = gql`
  query PostItem($slug: String!) {
    posts(slug: $slug) @rest(type: "PostItem", path: "/entries?content_type=posts&fields.slug={args.slug}") {
      total,
      sys,
      includes,
      items @type(name: "PostItem") {
        sys @type(name: "PostItem") {
          id,
          createdAt
        },
        fields
      }
    }
  }
`;

const Post = ({ router }) => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!router.query.postID) return;

    client.query(
      {
        query,
        variables: {
          slug: router.query.postID,
        },
      },
    ).then(({ data }) => {
      const posts = includeAsset(data.posts);
      setPost(posts.items[0]);
      setIsLoading(false);
    });
  }, [router]);

  if (isLoading) return 'Loading...';

  return (
    <Layout title={post.fields.title}>
      <h1>{post.fields.title}</h1>
    </Layout>
  );
};

Post.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.shape({
      postID: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Post);
