/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Label = ({
  children,
  label,
  id,
  className,
  ...rest
}) => (
  <label className={!className ? 'label' : `label ${className}`} htmlFor={id} {...rest}>
    <span className="label__text">{label}</span>
    {children}
  </label>
);

Label.defaultProps = {
  className: '',
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Label;
