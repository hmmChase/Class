import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const urlLogin = async options =>
  await instance.get('/discord/url-login', options);
export const useUrlLogin = variables => useMutation(urlLogin, variables);

/* POST */

const loginDiscord = async options =>
  await instance.post('/discord/login', options);
export const useLoginDiscord = () => useQuery('loginDiscord', loginDiscord);
