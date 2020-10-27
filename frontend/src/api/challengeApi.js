import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const getChallenges = async () => await instance.get('/challenge/all');
export const useGetChallenges = config =>
  useQuery('challenges', getChallenges, config);

/* POST */
