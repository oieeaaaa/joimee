import React from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from 'components/Card/card';

const GET_RECENT_PROJECTS = gql`
query {
  projects(orderBy: createdAt_ASC, last: 3) {
    id,
    title,
    createdAt,
    theme {
      hex
    },
    image {
      url
    },
    slug
  }
}
`;

const RecentProjects = () => {
  const { loading, error, data } = useQuery(GET_RECENT_PROJECTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;
  return (
    <section className="recent-projects">
      <div className="grid">
        <Heading text="Recent Projects" />
        {data.projects.map(project => (
          <Link
            key={project.id}
            href="/works/project/[projectID]"
            as={`/works/project/${project.slug}`}
          >
            <a className="recent-projects__item">
              <Card
                title={project.title}
                imgLink={project.image.url}
                color={project.theme.hex}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
