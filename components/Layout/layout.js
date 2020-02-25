import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';

const Layout = ({ title, children, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

Layout.defaultProps = {
  title: 'Bok',
  description: 'Bok Site',
};

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any.isRequired, // eslint-disable-line
};

export default Layout;
