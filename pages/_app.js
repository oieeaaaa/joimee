import React from 'react';
import PropTypes from 'prop-types';
import ThemePicker from 'components/ThemePicker/themePicker';

const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ThemePicker />
  </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object, // eslint-disable-line
};

export default App;
