import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ProjectsItem = ({ data }) => (
  <Link
    href="/works/project/[projectID]"
    as={`/works/project/${data.id}`}
  >
    <a className="projects__link">
      <div className="projects__card">
        <h3 className="projects__name">
          {data.title}
        </h3>
        <figure
          style={{
            backgroundColor: data.theme.hex,
            borderColor: data.theme.hex,
          }}
          className="projects__img-container"
        >
          <img
            className="projects__img"
            src={data.image.url}
            alt={data.image.fileName}
          />
        </figure>
      </div>
    </a>
  </Link>
);

const Projects = ({ data }) => {
  const renderProjects = projects => (
    projects.map(project => (
      <ProjectsItem key={project.id} data={project} />
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
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    theme: PropTypes.object,
    image: PropTypes.object,
  }).isRequired,
};

Projects.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
};

export default Projects;
