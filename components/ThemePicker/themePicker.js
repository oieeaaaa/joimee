import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

const ThemePicker = () => {
  const [isDark, setIsDark] = useState(false);
  const [isPositionedLeft, setIsPositionedLeft] = useState(false);

  useEffect(() => {
    window.ontouchstart = handleTouch;
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
    const halfOfSceenWidth = window.innerWidth / 2;
    const { clientX } = e.touches.item(0);

    if (clientX <= halfOfSceenWidth) {
      setIsPositionedLeft(true);
    } else {
      setIsPositionedLeft(false);
    }
  }

  const toggleDark = e => {
    e.preventDefault();
    setIsDark(!isDark);
  };

  return (
    <ReactSVG
      className={isPositionedLeft ? 'theme-picker left' : 'theme-picker'}
      wrapper="div"
      onClick={toggleDark}
      src={`/icons/${!isDark ? 'moon' : 'sun'}.svg`}
    />
  );
};


export default ThemePicker;
