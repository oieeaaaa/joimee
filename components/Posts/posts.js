import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PostCard from 'components/PostCard/postCard';

const PostsItem = ({ data }) => (
  <Link
    key={data.path}
    href={data.path}
  >
    <a className="posts__link">
      <PostCard
        title={data.title}
        excerpt={data.summary}
        date={data.publishedAt}
      />
    </a>
  </Link>
);

const Posts = ({ data }) => {
  const renderPosts = posts => (
    posts.map(post => (
      <PostsItem key={post.path} data={post} />
    ))
  );

  return (
    <div className="posts">
      {renderPosts(data)}
    </div>
  );
};

PostsItem.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    publishedAt: PropTypes.string,
  }).isRequired,
};

Posts.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
};

export default Posts;
