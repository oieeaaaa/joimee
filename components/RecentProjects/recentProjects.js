import React from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import Card, { FAKE_PROJECTS } from 'components/Card/card';

const RecentProjects = () => (
  <section className="recent-projects">
    <div className="grid">
      <Heading text="Recent Projects" />
      {FAKE_PROJECTS.map(project => (
        <Link
          key={project.title}
          href="/works/project/[projectID]"
          as={`/works/project/${project.path}`}
        >
          <a className="recent-projects__item">
            <Card
              title={project.title}
              imgLink={project.imgLink}
              color={project.color}
            />
          </a>
        </Link>
      ))}
    </div>
  </section>
);

export default RecentProjects;
