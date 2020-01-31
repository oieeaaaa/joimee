import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Layout from 'components/Layout/layout';

const Project = ({ router }) => {
  useEffect(() => {
    if (!router.query.slug) return;
    console.log(router);
  }, [router]);

  return (
    <Layout title="Project">
      <h1>{router.query.projectID}</h1>
    </Layout>
  );
};

Project.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.shape({
      projectID: PropTypes.string,
      slug: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Project);
