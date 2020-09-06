import React from 'react';
import Heading from 'components/Heading/heading';
import Link from 'next/link';
import Card from 'components/Card/card';
import Loading from 'components/Loading/loading';
import projects from 'data/projects';

const RecentProjects = () => (
  <section className="recent-projects">
    <div className="grid">
      <Heading text="Recent Projects" />
      <div className="recent-projects__list">
        {projects.map(project => (
          <Link
            key={project.path}
            href={project.path}
          >
            <a className="recent-projects__item">
              <Card
                title={project.title}
                imgLink={project.image}
                color={project.color}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RecentProjects;
