import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ className, text, ...rest }) => (
  <h3
    className={className ? `${className} heading` : 'heading'}
    {...rest}
  >
    {text}
  </h3>
);

Heading.defaultProps = {
  className: '',
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;
