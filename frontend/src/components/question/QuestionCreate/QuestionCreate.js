import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { QuestionContext } from '../../../context/contexts';
import Desc from '../../REUSEABLE/Desc/Desc';
import DOMPurify from 'dompurify';
import * as sc from './QuestionCreate.style';

const QuestionCreate = props => {
  const [title, setTitle] = useState('');

  const [body, setBody] = useState('');

  const { createQuestion } = useContext(QuestionContext);

  const { challengePath } = useParams();

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    if (e.target.id === 'title') setTitle(cleanValue);

    if (e.target.id === 'body') setBody(cleanValue);
  };

  const handleCancel = () => props.close();

  const handleSubmit = async e => {
    e.preventDefault();

    createQuestion(challengePath, title, body);

    props.close();
  };

  return (
    <sc.Form className={props.className} onSubmit={handleSubmit}>
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

export default QuestionCreate;
