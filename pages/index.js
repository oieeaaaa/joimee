import React from 'react';
import Layout from 'components/Layout/layout';
import Hero from 'components/Hero/hero';
import RecentProjects from 'components/RecentProjects/recentProjects';

const Home = () => (
  <Layout title="Home">
    <Hero />
    <RecentProjects />
  </Layout>
);

export default Home;
