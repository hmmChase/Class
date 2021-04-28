import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProjectContext } from './';
// import * as api from '../api/projectApi';

const ProjectProvider = props => {
  const [projects, setProjects] = useState([]);

  // Queries

  // const getProjects = challengePath =>
  //   api.useGetProjects({
  //     variables: { challengePath },

  //     onSuccess: data => setProjects(data.data)
  //   });

  // // Mutations

  // const createProject = challengePath =>
  //   api.useCreateProject({
  //     variables: { challengePath },

  //     onSuccess: data => {
  //       const updatedProjects = [...projects, data.data];

  //       setProjects(updatedProjects);
  //     }
  //   });

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.any
};

export default ProjectProvider;
