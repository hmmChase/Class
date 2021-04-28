import instance from './baseApi';

/* GET */

export const urlLogin = async () => await instance.get('/discord/url-login');

export const urlSignup = async () => await instance.get('/discord/url-signup');

/* POST */

export const loginDiscord = async variables =>
  await instance.post('/discord/login', variables);

export const signupDiscord = async variables =>
  await instance.post('/discord/signup', variables);
