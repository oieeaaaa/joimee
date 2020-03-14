import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/tag';
import ThemePicker from 'components/ThemePicker/themePicker';
import 'scss/main.scss';

class App extends React.Component {
  componentWillUnmount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MDXProvider>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" href="/icons/icon-128x128.png" />
          <link rel="apple-touch-icon" href="/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
          <link rel="apple-touch-startup-image" href="/images/launch-screen.png" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#ff5555" />
        </Head>
        <main className="app">
          <Component {...pageProps} />
          <ThemePicker />
        </main>
      </MDXProvider>
    );
  }
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object, // eslint-disable-line
};

export default App;
