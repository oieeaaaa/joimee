/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={className ? `${className} button` : 'button'}
    {...rest}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
