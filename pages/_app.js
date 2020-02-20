import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import ThemePicker from 'components/ThemePicker/themePicker';
import fetch from 'isomorphic-unfetch';
import { ApolloProvider } from '@apollo/react-common';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'scss/main.scss';

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.API,
    credentials: 'same-origin',
    fetch,
  }),
  cache: new InMemoryCache(),
});


class App extends React.Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }

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
      <ApolloProvider client={client}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" href="/icons/icon-128x128.png" />
          <link rel="apple-touch-icon" href="/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" href="/icons/icon-384x384.png" />
          <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
          <link rel="apple-touch-startup-image" href="/images/launch-screen.png" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#ff5555" />
        </Head>
        <main className="app">
          <Component {...pageProps} />
          <ThemePicker />
        </main>
      </ApolloProvider>
    );
  }
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object, // eslint-disable-line
};

export default App;
