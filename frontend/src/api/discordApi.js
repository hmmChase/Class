import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const urlLogin = async () => await instance.get('/discord/url-login');
export const useUrlLogin = config => useMutation(urlLogin, config);

const urlSignup = async () => await instance.get('/discord/url-signup');
export const useUrlSignup = config => useMutation(urlSignup, config);

/* POST */

export const loginDiscord = async options =>
  await instance.post('/discord/login', options);

// const loginDiscord = async (_key, variables) => {
//   return await instance.post('/discord/login', variables);
// };

// export const useLoginDiscord = config => {
//   return useQuery(
//     ['loginDiscord', config.variables.code, config.variables.state],
//     loginDiscord,
//     config
//   );
// };

export const signupDiscord = async options =>
  await instance.post('/discord/signup', options);

// export const useSignupDiscord = config => {
//   console.log('config:', config);

//   return useMutation(signupDiscord, config);
// };
