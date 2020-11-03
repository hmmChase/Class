import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ProjectContext } from '../../../../context/contexts';
import * as sc from './Submissions.style';

const Submissions = () => {
  const { projects, getProjects } = useContext(ProjectContext);
  console.log('projects:', projects);

  getProjects();

  const projectCards = projects.map(project => {
    return <ProjectCard key={project.id} project={project} />;
  });

  return <sc.Container>{projects.length > 0 && projectCards}</sc.Container>;
};

// Submissions.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Submissions);
