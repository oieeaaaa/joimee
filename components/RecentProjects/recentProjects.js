import React, { useState, useEffect } from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import gql from 'graphql-tag';
import client from 'js/client';
import includeAsset from 'js/includeAsset';
import Card from 'components/Card/card';

const query = gql`
  query Project {
    projects @rest(type: "Project", path: "/entries?content_type=projects") {
      sys,
      total,
      items @type(name: "Project") {
        sys @type(name: "Project") {
          id,
          createdAt
        },
        fields @type(name: "Project") {
          title,
          background,
          color,
          slug,
        }
      },
      includes @type(name: "Project")
    }
  }
`;

const RecentProjects = () => {
  const [projects, setProjects] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.query({ query }).then(({ data }) => {
      setProjects(includeAsset(data.projects));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return 'Loading...';

  return (
    <section className="recent-projects">
      <div className="grid">
        <Heading text="Recent Projects" />
        {projects.items.map(({ fields, sys }) => (
          <Link
            key={sys.id}
            href="/works/project/[projectID]"
            as={`/works/project/${fields.slug}`}
          >
            <a className="recent-projects__item">
              <Card
                title={fields.title}
                imgLink={`https:${fields.background.asset.file.url}`}
                color={fields.color}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
