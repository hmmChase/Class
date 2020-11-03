import React, { useState } from 'react';
import { ProjectContext } from './contexts';
import * as api from '../api/projectApi';

const ProjectProvider = props => {
  const [projects, setProjects] = useState([]);

  const getProjects = () =>
    api.useGetProjects({ onSuccess: data => setProjects(data.data) });

  const createProject = variables =>
    api.useCreateProject({
      variables,

      onSuccess: data => {
        const updatedProjects = [...projects, data.data];

        setProjects(updatedProjects);
      }
    });

  return (
    <ProjectContext.Provider value={{ projects, getProjects, createProject }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
