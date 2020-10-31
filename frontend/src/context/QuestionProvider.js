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

  const createQuestion = async (title, body, challengePath) => {
    const response = await api.createQuestion(title, body, challengePath);

    const updatedQuestions = [response.data, ...questions];

    setQuestions(updatedQuestions);
  };

  // const [createQuestion, response] = useCreateQuestion({
  //   onSuccess: data => {
  //     console.log('data:', data);

  //     // const updatedQuestions = [data.data, ...props.questions];

  //     // props.setQuestions(updatedQuestions);

  //     // props.close();
  //   }
  // });

  const updateQuestion = async (id, title, body, challengePath) => {
    const updatedComments = await api.updateQuestion(
      id,
      title,
      body,
      challengePath
    );

    setQuestions(updatedComments);
  };

  const deleteQuestion = async questionId => {
    await api.deleteQuestion(questionId);

    const filteredQuestions = questions.filter(
      question => question.id !== questionId
    );

    setQuestions(filteredQuestions);
  };

  return (
    <QuestionContext.Provider
      value={{
        questions,
        question,
        getQuestions,
        getQuestion,
        createQuestion,
        updateQuestion,
        deleteQuestion
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
