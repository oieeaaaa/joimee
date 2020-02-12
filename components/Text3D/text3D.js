import React from 'react';
import PropTypes from 'prop-types';

const Text3D = ({ className, text, color }) => (
  <>
    <span className={className ? `${className} text-3D` : 'text-3D'} title={text}>
      {text}
    </span>
    <style jsx>
      {`
        .text-3D {
          --color: ${color};
        }
      `}
    </style>
  </>
);

Text3D.defaultProps = {
  className: '',
  color: 'var(--fancy-text)',
};

Text3D.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default Text3D;
