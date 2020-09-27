import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

const getCurrentUser = async () => await instance.get('/user/current');

export const useCurrentUser = () => useQuery('currentUser', getCurrentUser);

const logout = async () => await instance.post('/user/logout');

export const useLogout = () => useMutation(logout);
