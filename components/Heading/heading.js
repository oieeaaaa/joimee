import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ text }) => <h3 className="heading">{text}</h3>;

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
