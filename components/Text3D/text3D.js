import React from 'react';
import PropTypes from 'prop-types';

const Text3D = ({ className, text }) => (
  <span className={className ? `${className} text-3D` : 'text-3D'} title={text}>
    {text}
  </span>
);

Text3D.defaultProps = {
  className: '',
};

Text3D.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Text3D;
