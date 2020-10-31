import instance from './baseApi';
import { useQuery } from 'react-query';

/* GET */

const getChallenges = async (_key, variables) =>
  await instance.get('/challenge/all');
export const useGetChallenges = config =>
  useQuery(['challenges', config.variables], getChallenges, config);

const getChallenge = async (_key, variables) =>
  await instance.get(`/challenge/path/${variables.challengePath}`);
export const useGetChallenge = config =>
  useQuery(['challenge', config.variables], getChallenge, config);

/* POST */
