import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Markdown from 'components/Markdown/markdown';
import Layout from 'components/Layout/layout';
import XDivider from 'components/XDivider/xdivider';
import PostComment from 'components/PostComment/postComment';
import PostCommentList from 'components/PostCommentList/postCommentList';
import Loading from 'components/Loading/loading';
import parseDate from 'js/utils/parseDate';

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
      comments {
        id,
        name,
        content
      }
    }
  }
`;

const ADD_POST_COMMENT = gql`
  mutation CreatePostComment(
    $name: String!,
    $post: PostCreateOneWithoutCommentsInput,
    $content: String!,
    $status: Status
  ) {
    createPostComment: createPostComment(
      data: {
        name: $name,
        post: $post,
        content: $content,
        status: $status
      }
    ) {
      id
      name
      content
    }
  }
`;

const Post = ({ router }) => {
  const [
    addPostComment,
    { loading: loadingPostComment },
  ] = useMutation(ADD_POST_COMMENT, { update: updatePostComment });
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

  function onPostComment({ name, message: content }) {
    addPostComment({
      variables: {
        name,
        content,
        post: {
          connect: {
            id: data.post.id,
          },
        },
        status: 'PUBLISHED',
      },
    });
  }

  function updatePostComment(cache, { data: { createPostComment } }) {
    const { post } = cache.readQuery(
      {
        query: GET_POST,
        variables: { id: router.query.postID },
      },
    );

    cache.writeQuery({
      query: GET_POST,
      data: {
        post: {
          ...post,
          comments: post.comments.concat([createPostComment]),
        },
      },
    });
  }

  if (loading || !data) return <Loading />;

  return (
    <Layout title={data.post.title}>
      <div className="post">
        <div className="grid">
          <figure className="post__image-container">
            <img
              className="post__image"
              src={data.post.image.url}
              alt={data.post.title}
            />
          </figure>
          <h1 className="post__title">{data.post.title}</h1>
          <Markdown content={data.post.content} />
          <p className="post__date">
            {parseDate(data.post.createdAt)}
          </p>
          <XDivider />
          <PostComment onSubmit={onPostComment} loading={loadingPostComment} />
          <XDivider />
          <PostCommentList comments={data.post.comments} />
        </div>
      </div>
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
