import React from 'react';
import PropTypes from 'prop-types';
import ThemePicker from 'components/ThemePicker/themePicker';

const App = ({ Component, pageProps }) => (
  <div className="app">
    <Component {...pageProps} />
    <ThemePicker />
  </div>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object, // eslint-disable-line
};

export default App;
