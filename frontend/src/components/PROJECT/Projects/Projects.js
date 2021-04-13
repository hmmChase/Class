import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectContext } from '../../../context';
import * as sc from './Projects.style';

const Projects = () => {
  const { projects, getProjects } = useContext(ProjectContext);

  const { challengePath } = useParams();

  getProjects(challengePath);

  const projectCards = projects.map(project => {
    return <ProjectCard key={project.id} project={project} />;
  });

  return (
    <sc.Container>
      <sc.Ul>{projects && projects.length > 0 && projectCards} </sc.Ul>
    </sc.Container>
  );
};

// Projects.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Projects);
