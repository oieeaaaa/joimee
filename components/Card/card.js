import React from 'react';
import PropTypes from 'prop-types';

// to be removed after development.
export const FAKE_PROJECTS = [
  {
    title: 'Co Hiking',
    path: 'co-hiking',
    imgLink: 'https://bit.ly/2NJbGXu',
    color: '#D6E5DC',
  },
  {
    title: 'Sentinental Software',
    path: 'sentinental-software',
    imgLink: 'https://bit.ly/2sJtFWJ',
    color: '#358F6C',
  },
  {
    title: 'Vespa',
    path: 'vespa',
    imgLink: 'https://cdn.dribbble.com/users/4189231/screenshots/9653758/media/634bcc1a23220d074f322749524f423e.jpg',
    color: '#FACB05',
  },
];

const Card = ({ title, imgLink, color }) => (
  <div className="card">
    <figure className="card__img-container">
      <img className="card__img" src={imgLink} alt={title} />
    </figure>
    <h3 className="card__title" title={title}>{title}</h3>
    <style jsx>
      {`
        .card {
          &__img-container {
            background-color: ${color};
          }

          &__title {
            color: ${color};
          }
        }
      `}
    </style>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
};

export default Card;
