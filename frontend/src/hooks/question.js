import { useQuery, useMutation } from 'react-query';
import {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from '../api/questionApi';

// Queries

export const useGetQuestions = options =>
  useQuery(
    ['questions', options.variables],
    () => getQuestions(options.variables),
    options
  );

export const useGetQuestion = options =>
  useQuery(
    ['question', options.variables],
    () => getQuestion(options.variables),
    options
  );

// Mutations

export const useQuestionCreate = options =>
  useMutation(variables => createQuestion(variables), options);

// const createQuestion = async (title, body, challengePath) => {
//   const response = await api.createQuestion(title, body, challengePath);

//   const updatedQuestions = [response.data, ...questions];

//   setQuestions(updatedQuestions);
// };

// const [createQuestion, response] = useCreateQuestion({
//   onSuccess: data => {
//     console.log('data:', data);

//     // const updatedQuestions = [data.data, ...props.questions];

//     // props.setQuestions(updatedQuestions);

//     // props.close();
//   }
// });

export const useQuestionUpdate = options =>
  useMutation(variables => updateQuestion(variables), options);

// const updateQuestion = async (challengePath, title, body, id) => {
//   const response = await api.updateQuestion(challengePath, title, body, id);

//   setQuestions(response.data);
// };

export const useQuestionDelete = options =>
  useMutation(variables => deleteQuestion(variables), options);
