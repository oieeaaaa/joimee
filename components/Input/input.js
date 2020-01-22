import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, ...rest }) => {
  const inputClass = className ? `${className} input` : 'input';

  return (
    <input className={inputClass} type="text" {...rest} /> // eslint-disable-line
  );
};

Input.defaultProps = {
  className: '',
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
