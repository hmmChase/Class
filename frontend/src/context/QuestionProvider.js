import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QuestionContext } from './';

const QuestionProvider = props => {
  const [questions, setQuestions] = useState([]);

  const [question, setQuestion] = useState([]);

  return (
    <QuestionContext.Provider
      value={{ questions, setQuestions, question, setQuestion }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

QuestionProvider.propTypes = {
  children: PropTypes.any
};

export default QuestionProvider;
