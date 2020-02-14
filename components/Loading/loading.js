import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    const app = document.body;

    if (app) {
      app.classList.add('hide');
    }

    return () => {
      if (app.classList.contains('hide')) {
        app.classList.remove('hide');
      }
    };
  }, []);

  return <div className="loading" />;
};

export default Loading;
