import { useQuery, useMutation } from 'react-query';
import { getProjects, createProject } from '../api/discordApi';

// Queries

export const useGetAllProjects = options =>
  useQuery('getProjects', getProjects, options);

export const useGetProjects = options =>
  useQuery(['getProjects', options.variables], getProjects, options);

// Mutations

export const useCreateProject = options =>
  useMutation(variables => createProject(variables), options);
