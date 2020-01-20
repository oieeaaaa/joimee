import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from 'components/Header/header';
import 'scss/main.scss';

const Layout = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired, // eslint-disable-line
};

export default Layout;
