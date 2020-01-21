import React from 'react';
import PropTypes from 'prop-types';

export const FAKE_POSTS = [
  {
    title: '1 Lesson from 4 Buddhist Monk Stories',
    path: 'lesson-from-buddhist',
    excerpt: 'A traveler wrote a story about a monk who approached him while he was running toward the train station. The monk offered a little Buddhist book in exchange for a donation, but he didn’t have enough cash.',
    date: '07-27-2018',
  },
  {
    title: 'Testing Software: What is TDD?',
    path: 'testing-software',
    excerpt: 'With TDD, instead of learning things about the world, we’re creating a new world that should conform to our specifications.',
    date: '01-14-2018',
  },
  {
    title: 'You Can Get More Done in a 4-Day Workweek. Really.',
    path: 'get-more-done',
    excerpt: 'In response, I decided to run an experiment at Perpetual Guardian for an eight-week period in early 2018, based on the following agreement with my employees: 100% of the agreed output in 80% of the time, for 100% compensation.',
    date: '01-10-2018',
  },
];

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
