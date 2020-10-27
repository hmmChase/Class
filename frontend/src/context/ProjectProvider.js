import React, { useState } from 'react';
import { ProjectContext } from './contexts';
// import * as api from '../api/projectApi';

const ProjectProvider = props => {
  const [projects, setProjects] = useState([]);

  // Queries

  // Mutations

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
