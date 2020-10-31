import React, { useState } from 'react';
import { ProjectContext } from './contexts';
import * as api from '../api/projectApi';

const ProjectProvider = props => {
  const [projects, setProjects] = useState([]);

  const createProject = variables =>
    api.useCreateProject({
      variables,

      onSuccess: data => {
        const updatedProjects = [...projects, data.data];

        setProjects(updatedProjects);
      }
    });

  return (
    <ProjectContext.Provider value={{ projects, createProject }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
