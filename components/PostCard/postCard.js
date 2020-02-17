import React from 'react';
import PropTypes from 'prop-types';
import parseDate from 'js/utils/parseDate';

const PostCard = ({ title, excerpt, date }) => (
  <div className="post-card">
    <h3 className="post-card__title" title={title}>{title}</h3>
    <p className="post-card__excerpt">{excerpt}</p>
    <p className="post-card__date">
      <time dateTime={date} />
      {parseDate(date)}
    </p>
  </div>
);


PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostCard;
