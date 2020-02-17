import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImgLazy = ({ src, className, alt }) => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;
    const containerEl = container.current;
    const imgEl = new Image();

    imgEl.src = src;
    imgEl.alt = alt;
    imgEl.className = 'img-lazy__content';

    imgEl.onload = () => {
      containerEl.classList.add('loaded');
      containerEl.insertAdjacentElement('beforeend', imgEl);
    };
  }, [container]);

  return (
    <div
      ref={container}
      className={className ? `img-lazy ${className}` : 'img-lazy'}
    />
  );
};

ImgLazy.defaultProps = {
  className: '',
};

ImgLazy.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImgLazy;
