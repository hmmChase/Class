import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const getCurrentUser = async () => await instance.get('/user/current');
export const useCurrentUser = () => useQuery('getCurrentUser', getCurrentUser);

/* POST */

const signup = async options => await instance.post('/user/signup', options);
export const useSignup = variables => useMutation(signup, variables);

const loginEmail = async options => await instance.post('/user/login', options);
export const useLoginEmail = variables => useMutation(loginEmail, variables);

const loginDiscord = async options =>
  await instance.post('/discord/url-login', options);
export const useLoginDiscord = variables =>
  useMutation(loginDiscord, variables);

const logout = async () => await instance.post('/user/logout');
export const useLogout = variables => useMutation(logout, variables);

const resetPassRequest = async options =>
  await instance.post('/user/reset-password-request', options);
export const useResetPassRequest = variables =>
  useMutation(resetPassRequest, variables);

const resetPass = async (options, resetToken) =>
  await instance.post(`/user/reset-password/${resetToken}`, options);
export const useResetPass = variables => useMutation(resetPass, variables);
