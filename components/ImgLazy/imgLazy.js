import Image from 'next/image';
import PropTypes from 'prop-types';

const ImgLazy = ({
  src, className, alt, ...etc
}) => (
  <figure
    className={className ? `img-lazy ${className}` : 'img-lazy'}
  >
    <Image
      width={500}
      height={500}
      src={src}
      alt={alt}
      lazy="true"
      {...etc}
    />
  </figure>
);

ImgLazy.defaultProps = {
  className: '',
};

ImgLazy.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImgLazy;
