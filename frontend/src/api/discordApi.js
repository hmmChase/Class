import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const urlLogin = async () => await instance.get('/discord/url-login');
export const useUrlLogin = config => useMutation(urlLogin, config);

/* POST */

const loginDiscord = async (key, args) =>
  await instance.post('/discord/login', args);
export const useLoginDiscord = (config, args) =>
  useQuery(['loginDiscord', args], loginDiscord, config);
