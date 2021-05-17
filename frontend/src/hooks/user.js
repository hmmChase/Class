import { useQuery, useMutation } from 'react-query';
import * as api from '../api/userApi';

// Queries

export const useCurrentUser = options =>
  useQuery('getCurrentUser', api.getCurrentUser, options);

// Mutations

export const useSignup = options => useMutation(api.signup, options);

export const useLoginEmail = options => useMutation(api.loginEmail, options);

export const useLogout = options => useMutation(api.logout, options);

export const useResetPassRequest = options =>
  useMutation(api.resetPassRequest, options);

export const useResetPass = options => useMutation(api.resetPass, options);
