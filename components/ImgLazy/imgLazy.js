import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImgLazy = ({ src, className, alt }) => {
  const figure = useRef(null);

  useEffect(() => {
    if (!figure.current) return;
    const figureEl = figure.current;
    const imgEl = new Image();

    imgEl.src = src;
    imgEl.alt = alt;
    imgEl.className = 'img-lazy__content';

    imgEl.onload = () => {
      figureEl.classList.add('loaded');
      figureEl.insertAdjacentElement('beforeend', imgEl);
    };
  }, [figure]);

  return (
    <div
      ref={figure}
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
