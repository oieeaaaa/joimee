import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useScroll = (callback, defaultOffset = 0) => {
  const [offset, setOffset] = useState(defaultOffset);
  useEffect(() => {
    let prevScrollY = 0;
    let prevScrollX = 0;

    const handleScroll = throttle(() => {
      if (window.scrollY < 0) return;

      let { scrollY, scrollX } = window;
      const directions = {
        top: false,
        right: false,
        bottom: false,
        left: false,
        scrolled: scrollY > offset,
      };
      scrollY += document.body.offsetHeight + offset;
      scrollX += document.body.offsetWidth + offset;

      switch (true) {
        case (prevScrollY > scrollY):
          directions.top = true;
          break;
        case (prevScrollX < scrollX):
          directions.right = true;
          break;
        case (prevScrollY < scrollY):
          directions.bottom = true;
          break;
        case (prevScrollX > scrollX):
          directions.left = true;
          break;

        default:
          return;
      }

      callback(directions);
      prevScrollY = scrollY;
      prevScrollX = scrollX;
    }, 500);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  return [setOffset];
};

export default useScroll;
