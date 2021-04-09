import { useQuery } from 'react-query';
import * as api from '../api/challengeApi';

export const useGetChallenges = setChallenges => {
  return useQuery('challenges', () => api.getChallenges, {
    onSuccess: async data => {
      const gotData = await data;

      setChallenges(gotData.data);
    }
  });
};
