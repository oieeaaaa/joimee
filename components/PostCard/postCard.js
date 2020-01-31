import React from 'react';
import PropTypes from 'prop-types';

const PostCard = ({ title, excerpt, date }) => {
  // TODO: postDate.toLocaleDateString needs polyfill.
  const postDate = new Date(date);
  const dateConfig = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <div className="post-card">
      <h3 className="post-card__title" title={title}>{title}</h3>
      <p className="post-card__excerpt">{excerpt}</p>
      <p className="post-card__date">
        <time dateTime={date} />
        {postDate.toLocaleDateString('en-US', dateConfig)}
      </p>
    </div>
  );
};


PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostCard;
