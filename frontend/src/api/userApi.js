import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const getCurrentUser = async () => await instance.get('/user/current');
export const useCurrentUser = () => useQuery('currentUser', getCurrentUser);

/* POST */

const signup = async options => await instance.post('/user/signup', options);
export const useSignup = variables => useMutation(signup, variables);

const loginEmail = async options => await instance.post('/user/login', options);
export const useLoginEmail = variables => useMutation(loginEmail, variables);

const logout = async () => await instance.post('/user/logout');
export const useLogout = options => useMutation(logout, options);

const resetPassRequest = async options =>
  await instance.post('/user/reset-password', options);
export const useResetPassRequest = variables =>
  useMutation(resetPassRequest, variables);

const resetPass = async (options, resetToken) =>
  await instance.post(`/user/reset-password/${resetToken}`, options);
export const useResetPass = variables => useMutation(resetPass, variables);
