import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const getCurrentUser = async () => await instance.get('/user/current');
export const useCurrentUser = config =>
  useQuery('getCurrentUser', getCurrentUser, config);

/* POST */

const signup = async options => await instance.post('/user/signup', options);
export const useSignup = config => useMutation(signup, config);

const loginEmail = async options => await instance.post('/user/login', options);
export const useLoginEmail = config => useMutation(loginEmail, config);

const logout = async options => await instance.post('/user/logout', options);
export const useLogout = config => useMutation(logout, config);

const resetPassRequest = async options =>
  await instance.post('/user/reset-password-request', options);
export const useResetPassRequest = config =>
  useMutation(resetPassRequest, config);

const resetPass = async options =>
  await instance.post(`/user/reset-password`, options);
export const useResetPass = config => useMutation(resetPass, config);
