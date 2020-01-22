/* eslint react/jsx-props-no-spreading: 0, react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, ...rest }) => {
  const buttonClass = className ? `${className} button` : 'button';

  return (
    <button type="button" className={buttonClass} {...rest}>{children}</button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
