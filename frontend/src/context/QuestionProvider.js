import React, { useState } from 'react';
import { QuestionContext } from './';

const QuestionProvider = props => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);

  // Queries

  // const getQuestion = async questionId => {
  //   const response = await api.getQuestion(questionId);

  //   setQuestion(response.data);
  // };

  // const getQuestions = challengePath => {
  //   const response = api.useGetQuestions({
  //     variables: { challengePath },

  //     onSuccess: data => setQuestions(data.data)
  //   });

  //   return response.data;
  // };

  // Mutations

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

  // const updateQuestion = async (challengePath, title, body, id) => {
  //   const response = await api.updateQuestion(challengePath, title, body, id);

  //   setQuestions(response.data);
  // };

  // const deleteQuestion = async (challengePath, questionId) => {
  //   const response = await api.deleteQuestion(challengePath, questionId);

  //   setQuestions(response.data);
  // };

  return (
    <QuestionContext.Provider
      value={{ questions, setQuestions, question, setQuestion }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
