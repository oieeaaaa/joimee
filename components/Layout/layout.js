import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';
import 'scss/main.scss';

const Layout = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired, // eslint-disable-line
};

export default Layout;
