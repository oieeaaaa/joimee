import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { withRouter } from 'next/router';
import { withLayout } from 'components/Layout/layout';

const GET_PROJECT = gql`
query Project($id: ID) {
  project(where: { id: $id }) {
    id,
    title,
    createdAt,
    content,
    siteUrl,
    image {
      url
    }
  }
}
`;

const Project = ({ router }) => {
  const [loadProject, { data, loading }] = useLazyQuery(
    GET_PROJECT,
    {
      variables: {
        id: '',
      },
    },
  );

  useEffect(() => {
    const id = router.query.projectID;
    if (!id) return;

    loadProject({
      variables: {
        id,
      },
    });
  }, [router]);

  if (loading || !data) return <p>Loading...</p>;
  return (
    <h1>{data.project.title}</h1>
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

export default withLayout(withRouter(Project));
