import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const urlLogin = async () => await instance.get('/discord/url-login');
export const useUrlLogin = config => useMutation(urlLogin, config);

/* POST */

const loginDiscord = async (_key, variables) => {
  console.log('variables:', variables);

  return await instance.post('/discord/login', variables);
};

export const useLoginDiscord = config => {
  console.log('config:', config);

  return useQuery(
    ['loginDiscord', config.variables.code, config.variables.state],
    loginDiscord,
    config
  );
};
