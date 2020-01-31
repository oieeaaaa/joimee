import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const PostCommentList = ({ comments }) => (
  <ul className="post-comment-list">
    {comments.map(comment => (
      <li key={comment.id} className="post-comment-list__item">
        <div className="post-comment-list__content">
          <ReactMarkdown source={comment.content} />
        </div>
        <span className="post-comment-list__name">{comment.name}</span>
      </li>
    ))}
  </ul>
);

PostCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostCommentList;
