import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

const getQuestion = async () =>
  await instance.get(`/question/${props.questionId}`);
export const useQuestion = () => useQuery('Question', getQuestion);

/* POST */

const signup = async options => await instance.post('/user/signup', options);
export const useSignup = variables => useMutation(signup, variables);
