import React from 'react';
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

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <div className="app">
      <Component {...pageProps} />
      <ThemePicker />
    </div>
  </ApolloProvider>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object, // eslint-disable-line
};

export default App;
