import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { ApolloProvider } from '@apollo/react-common';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';
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

const Layout = ({ title, children }) => (
  <ApolloProvider client={client}>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </ApolloProvider>
);

export const withLayout = Component => props => (
  <Layout {...props}>
    <Component />
  </Layout>
);

Layout.defaultProps = {
  title: 'Bok',
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired, // eslint-disable-line
};

export default Layout;
