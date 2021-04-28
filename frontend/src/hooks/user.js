import { useQuery, useMutation } from 'react-query';
import * as api from '../api/userApi';

// Queries

export const useCurrentUser = config =>
  useQuery('getCurrentUser', api.getCurrentUser, config);

// Mutations

export const useSignup = config => useMutation(api.signup, config);

export const useLoginEmail = config => useMutation(api.loginEmail, config);

export const useLogout = config => useMutation(api.logout, config);

export const useResetPassRequest = config =>
  useMutation(api.resetPassRequest, config);

export const useResetPass = config => useMutation(api.resetPass, config);
