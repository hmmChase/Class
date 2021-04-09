import instance from './baseApi';
import { useQuery } from 'react-query';

/* GET */

export const getChallenges = async () => await instance.get('/challenge/all');

const getChallenge = async (_key, variables) =>
  await instance.get(`/challenge/path/${variables.challengePath}`);
export const useGetChallenge = config =>
  useQuery(['challenge', config.variables], getChallenge, config);

/* POST */
