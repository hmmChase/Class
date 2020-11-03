import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const getProjects = async options => await instance.get('/project', options);
export const useGetProjects = config =>
  useQuery('getProjects', getProjects, config);

const createProject = async options =>
  await instance.get('/project/create', options);
export const useCreateProject = config => useMutation(createProject, config);

/* POST */
