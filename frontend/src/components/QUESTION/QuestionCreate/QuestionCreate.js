import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { QuestionContext } from '../../../context';
import { useQuestionCreate } from '../../../hooks/question';
import Desc from '../../REUSEABLE/Desc/Desc';
import DOMPurify from 'dompurify';
import * as sc from './QuestionCreate.style';

const QuestionCreate = props => {
  const { className, close } = props;

  const [title, setTitle] = useState('');

  const [body, setBody] = useState('');

  const { challengePath } = useParams();

  const { questions, setQuestions } = useContext(QuestionContext);

  const mutation = useQuestionCreate({
    onSuccess: data => {
      const updatedQuestions = [data.data, ...questions];

      setQuestions(updatedQuestions);
    }
  });

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    if (e.target.id === 'title') setTitle(cleanValue);

    if (e.target.id === 'body') setBody(cleanValue);
  };

  const handleCancel = () => close();

  const handleSubmit = async e => {
    e.preventDefault();

    mutation.mutate({ challengePath, title, body });

    close();
  };

  return (
    <sc.Form className={className} onSubmit={handleSubmit}>
      <sc.Titlee>Post a Question</sc.Titlee>

      <Desc>Make sure to add enough detail to provide context for others.</Desc>

      <sc.InputTitle
        id='title'
        placeholder='Question'
        value={title}
        onChange={handleChange}
      />

      <sc.TextAreaBody
        id='body'
        placeholder='More Details'
        value={body}
        onChange={handleChange}
      />

      <sc.Buttonns>
        <sc.ButtonCancel onClick={handleCancel}>Cancel</sc.ButtonCancel>

        <sc.Buttonn type='submit'>Post</sc.Buttonn>
      </sc.Buttonns>
    </sc.Form>
  );
};

QuestionCreate.propTypes = {
  className: PropTypes.any,
  close: PropTypes.func
};

export default QuestionCreate;
