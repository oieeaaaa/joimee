import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { withRouter } from 'next/router';
import Layout from 'components/Layout/layout';
import Text3D from 'components/Text3D/text3D';
import Button from 'components/Button/button';
import Markdown from 'components/Markdown/markdown';
import Loading from 'components/Loading/loading';

const GET_PROJECT = gql`
query Project($id: ID) {
  project(where: { id: $id }) {
    id,
    title,
    createdAt,
    content,
    siteUrl,
    theme {
      hex
    },
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

  if (loading || !data) return <Loading />;

  return (
    <Layout title={data.project.title} description={data.project.title}>
      <div aria-label={data.project.title} className="project">
        <div className="project__hero">
          <Text3D
            aria-hidden
            text={data.project.title}
            className="project__title"
            color={data.project.theme.hex}
          />
          {data.project.siteUrl && (
            <a
              className="project__link"
              target="_blank"
              rel="noreferrer noopener"
              href={data.project.siteUrl}
            >
              <Button>View Site</Button>
            </a>
          )}
        </div>
        <div className="grid project__content">
          <Markdown content={data.project.content} />
        </div>
        <style jsx>
          {`
            .project__hero {
              background-image: url('${data.project.image.url}');
              background-size: cover;
              background-position: center;
              background-attachment: fixed;
              background-color: ${data.project.theme.hex};
            }
          `}
        </style>
      </div>
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
