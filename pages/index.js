import React from 'react';
import Layout from 'components/Layout/layout';
import Hero from 'components/Hero/hero';
import RecentProjects from 'components/RecentProjects/recentProjects';
import RecentPosts from 'components/RecentPosts/recentPosts';

const Home = () => (
  <Layout
    title="Joimee Tan Cajandab"
    description="A website built from scratch by Joimee Tan Cajandab who is just a guy who can develop a website"
  >
    <Hero />
    <RecentProjects />
    <RecentPosts />
  </Layout>
);

export default Home;
