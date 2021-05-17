import instance from './baseApi';

/* GET */

export const getCurrentUser = async () => await instance.get('/user/current');

/* POST */

export const signup = async variables =>
  await instance.post('/user/signup', variables);

export const loginEmail = async variables =>
  await instance.post('/user/login', variables);

export const logout = async () => await instance.post('/user/logout');

export const resetPassRequest = async variables =>
  await instance.post('/user/reset-password-request', variables);

export const resetPass = async variables =>
  await instance.post(`/user/reset-password`, variables);
