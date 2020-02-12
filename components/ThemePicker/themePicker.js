import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

const ThemePicker = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark');
  }, [isDark]);

  const toggleDark = e => {
    e.preventDefault();
    setIsDark(!isDark);
  };

  return (
    <ReactSVG
      className="theme-picker"
      wrapper="div"
      onClick={toggleDark}
      src={`/icons/${isDark ? 'moon' : 'sun'}.svg`}
    />
  );
};


export default ThemePicker;
