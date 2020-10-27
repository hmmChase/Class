import React, { useState } from 'react';
import { QuestionContext } from './contexts';
import * as api from '../api/questionApi';

const QuestionProvider = props => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);

  // Queries

  const getQuestion = async questionId => {
    const response = await api.getQuestion(questionId);

    setQuestion(response.data);
  };

  const getQuestions = challengePath =>
    api.useGetQuestions({
      variables: { challengePath },

      onSuccess: data => setQuestions(data.data)
    });

  // Mutations

  const deleteQuestion = async questionId =>
    await api.deleteQuestion(questionId);

  return (
    <QuestionContext.Provider
      value={{ questions, question, getQuestions, getQuestion, deleteQuestion }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
