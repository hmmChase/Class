import instance from './baseApi';

/* GET */

export const getAllProjects = async () => await instance.get('/project');

export const getProjects = async variables =>
  await instance.get(`/project/challenge/${variables.challengePath}`);

/* POST */

export const createProject = async variables =>
  await instance.post('/project/create', variables);
