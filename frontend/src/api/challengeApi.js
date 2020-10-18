import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const getChallenges = async () => await instance.get('/challenge/all');
export const useChallenges = () => useQuery('Challenges', getChallenges);

/* POST */
