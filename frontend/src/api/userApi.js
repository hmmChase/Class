import instance from './baseApi';
import { useQuery } from 'react-query';

const getCurrentUser = async () => await instance.get('/user/current');

export const useCurrentUser = () => useQuery('currentUser', getCurrentUser);
