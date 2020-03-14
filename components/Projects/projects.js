import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ProjectsItem = ({ data }) => (
  <Link
    href={data.path}
  >
    <a className="projects__link">
      <div className="projects__card">
        <h3 className="projects__name">
          {data.title}
        </h3>
        <figure
          style={{
            backgroundColor: data.color,
            borderColor: data.color,
          }}
          className="projects__img-container"
        >
          <img
            className="projects__img"
            src={data.image}
            alt={data.title}
          />
        </figure>
      </div>
    </a>
  </Link>
);

const Projects = ({ data }) => {
  const renderProjects = projects => (
    projects.map(project => (
      <ProjectsItem key={project.path} data={project} />
    ))
  );

  return (
    <div className="projects">
      {renderProjects(data)}
    </div>
  );
};

ProjectsItem.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

Projects.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
};

export default Projects;
