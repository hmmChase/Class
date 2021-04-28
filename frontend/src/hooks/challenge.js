import { useQuery } from 'react-query';
import { getChallenges, getChallenge } from '../api/challengeApi';

// Queries

export const useGetChallenges = options => {
  return useQuery('challenges', () => getChallenges, options);
};

export const useGetChallenge = options => {
  return useQuery(
    ['challenge', options.variables],
    () => getChallenge(options.variables),
    options
  );
};
