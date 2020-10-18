import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const createProject = async options =>
  await instance.get('/project/create', options);
export const useCreateProject = variables =>
  useMutation(createProject, variables);

/* POST */
