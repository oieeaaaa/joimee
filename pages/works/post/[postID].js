import React, { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { withLayout } from 'components/Layout/layout';

const GET_POST = gql`
query Post($id: ID) {
  post(where: { id: $id }) {
    id,
    title,
    createdAt,
    content,
    image {
      url
    },
    slug
  }
}
`;

const Post = ({ router }) => {
  const [loadPost, { loading, data }] = useLazyQuery(
    GET_POST,
    {
      variables: {
        id: '',
      },
    },
  );

  useEffect(() => {
    const id = router.query.postID;
    if (!id) return;

    loadPost({ variables: { id } });
  }, [router]);

  if (loading || !data) return <div>Loading...</div>;

  return (
    <div className="post">
      <Head>
        <title>{data.post.title}</title>
      </Head>
      <h1>{data.post.title}</h1>
    </div>
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

export default withLayout(withRouter(Post), { title: 'Post' });
