import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, imgLink, color }) => (
  <div className="card">
    <figure className="card__img-container">
      <img className="card__img" src={imgLink} alt={title} />
    </figure>
    <h3 aria-hidden className="card__title" title={title}>{title}</h3>
    <style jsx>
      {`
        .card {
          &__img-container {
            background-color: ${color};
            border-color: ${color};
          }
        }
      `}
    </style>
  </div>
);

Card.defaultProps = {
  color: '#e2e2e2',
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Card;
