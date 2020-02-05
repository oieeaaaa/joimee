import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PostCard from 'components/PostCard/postCard';

const PostsItem = ({ data }) => (
  <Link
    key={data.id}
    href="/works/post/[postID]"
    as={`/works/post/${data.id}`}
  >
    <a className="posts__link">
      <PostCard
        title={data.title}
        excerpt={data.excerpt}
        date={data.createdAt}
      />
    </a>
  </Link>
);

const Posts = ({ data }) => {
  const renderPosts = posts => (
    posts.map(post => (
      <PostsItem key={post.id} data={post} />
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
    id: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

Posts.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
};

export default Posts;
