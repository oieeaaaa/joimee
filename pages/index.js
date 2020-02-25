import React from 'react';
import Layout from 'components/Layout/layout';
import Hero from 'components/Hero/hero';
import RecentProjects from 'components/RecentProjects/recentProjects';
import RecentPosts from 'components/RecentPosts/recentPosts';
import Subscribe from 'components/Subscribe/subscribe';

const Home = () => (
  <Layout title="Home">
    <Hero />
    <RecentProjects />
    <RecentPosts />
  </Layout>
);

export default Home;
