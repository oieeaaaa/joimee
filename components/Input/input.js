import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, ...rest }) => (
  <input className={className ? `${className} input` : 'input'} type="text" {...rest} />
);

Input.defaultProps = {
  className: '',
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
