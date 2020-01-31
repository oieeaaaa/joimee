import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import client from 'js/client';
import includeAsset from 'js/includeAsset';
import Layout from 'components/Layout/layout';

const query = gql`
  query ProjectItem($slug: String!) {
    projects(slug: $slug) @rest(type: "ProjectItem", path: "/entries?content_type=projects&fields.slug={args.slug}") {
      sys,
      total,
      includes,
      items @type(name: "ProjectItem") {
        sys @type(name: "ProjectItem") {
          id,
          createdAt
        },
        fields
      }
    }
  }
`;

const Project = ({ router }) => {
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!router.query.projectID) return;
    client.query(
      {
        query,
        variables: {
          slug: router.query.projectID,
        },
      },
    ).then(({ data }) => {
      const projects = includeAsset(data.projects);
      setProject(projects.items[0]);
      setIsLoading(false);
    });
  }, [router]);

  if (isLoading) return 'Loading...';

  return (
    <Layout title={project.fields.title}>
      <h1>{project.fields.title}</h1>
    </Layout>
  );
};

Project.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.shape({
      projectID: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Project);
