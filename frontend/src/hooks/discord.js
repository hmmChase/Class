import { useQuery, useMutation } from 'react-query';
import {
  urlLogin,
  urlSignup,
  loginDiscord,
  signupDiscord
} from '../api/discordApi';

// Queries

export const useLoginDiscord = options =>
  useQuery(
    ['loginDiscord', options.variables.code, options.variables.state],
    loginDiscord,
    options
  );

// Mutations

export const useLoginUrl = options => useMutation(urlLogin, options);

export const useSignupUrl = options => useMutation(urlSignup, options);

export const useSignupDiscord = options =>
  useMutation(variables => signupDiscord(variables), options);
