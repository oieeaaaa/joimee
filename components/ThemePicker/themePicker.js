import React, { useRef, useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import useScroll from 'js/hooks/useScroll';

const ThemePicker = () => {
  const themePicker = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const [] = useScroll(handleScroll, ); // eslint-disable-line


  useEffect(() => {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    window.ontouchstart = handleTouch;

    if (matches) {
      setIsDark(true);
    }

    return () => {
      window.ontouchstart = null;
    };
  }, []);

  useEffect(() => {
    const app = document.body;

    if (!isDark && app) {
      app.classList.remove('dark');
    } else {
      app.classList.add('dark');
    }
  }, [isDark]);

  function handleTouch(e) {
    if (!themePicker.current) return;
    const { container } = themePicker.current;
    const halfOfSceenWidth = window.innerWidth / 2;
    const { clientX } = e.touches.item(0);

    if (clientX <= halfOfSceenWidth) {
      container.classList.add('left');
    } else {
      container.classList.remove('left');
    }
  }

  function handleScroll({ bottom }) {
    if (!themePicker.current) return;
    const { container } = themePicker.current;

    if (bottom) {
      container.classList.add('hide');
    } else {
      container.classList.remove('hide');
    }
  }

  const toggleDark = e => {
    e.preventDefault();
    setIsDark(!isDark);
  };


  return (
    <ReactSVG
      className="theme-picker"
      ref={themePicker}
      wrapper="div"
      onClick={toggleDark}
      src={`/icons/${!isDark ? 'moon' : 'sun'}.svg`}
    />
  );
};


export default ThemePicker;
