import { useQuery, useMutation } from 'react-query';
import {
  urlLogin,
  urlSignup,
  loginDiscord,
  signupDiscord
} from '../api/discordApi';

// Queries

export const useLoginDiscord = options => {
  const {
    variables: { code, state }
  } = options;

  return useQuery(
    ['loginDiscord', code, state],
    () => loginDiscord({ code, state }),
    options
  );
};

export const useSignupDiscord = options => {
  const {
    variables: { code, state }
  } = options;

  return useQuery(
    ['signupDiscord', code, state],
    () => signupDiscord({ code, state }),
    options
  );
};

// Mutations

export const useLoginUrl = options => useMutation(urlLogin, options);

export const useSignupUrl = options => useMutation(urlSignup, options);
