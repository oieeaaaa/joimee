import projects from 'data/projects';
import posts from 'data/posts';
import Layout from 'components/Layout/layout';
import Hero from 'components/Hero/hero';
import RecentProjects from 'components/RecentProjects/recentProjects';
import RecentPosts from 'components/RecentPosts/recentPosts';

const Home = ({ recentProjects, recentPosts }) => (
  <Layout
    title="Joimee Tan Cajandab"
    description="A website coded by Joimee Tan Cajandab"
  >
    <Hero />
    <RecentProjects projects={recentProjects} />
    <RecentPosts posts={recentPosts} />
  </Layout>
);

export const getStaticProps = () => {
  const recentProjects = projects.filter(
    project => (new Date(project.publishedAt).getFullYear() === (new Date()).getFullYear()),
  );

  const recentPosts = posts.filter(
    post => (new Date(post.publishedAt).getMonth() === (new Date()).getMonth()),
  );

  return {
    props: {
      recentProjects,
      recentPosts,
    },
  };
};

export default Home;
