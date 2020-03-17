import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import ThemePicker from 'components/ThemePicker/themePicker';
import P from 'components/P/p';
import H1 from 'components/H1/h1';
import H2 from 'components/H2/h2';
import H3 from 'components/H3/h3';
import UL from 'components/UL/ul';
import OL from 'components/OL/ol';
import PRE from 'components/PRE/pre';
import HR from 'components/HR/hr';
import IMG from 'components/IMG/img';
import CODE from 'components/CODE/code';
import 'scss/main.scss';

const components = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  ul: UL,
  ol: OL,
  pre: PRE,
  hr: HR,
  img: IMG,
  code: CODE,
};

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
      <MDXProvider components={components}>
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
