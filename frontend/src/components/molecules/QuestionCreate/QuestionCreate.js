import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../api/useFetch';
import * as sc from './QuestionCreate.style';

const Question = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { challengePath } = useParams();

  const [getData] = useFetch(`/question/create/${challengePath}`);

  const handleSubmit = async e => {
    e.preventDefault();

    await getData({ title, body });
  };

  return (
    <sc.Form onSubmit={handleSubmit}>
      <sc.Title>Post a Question</sc.Title>

      <sc.Desc>
        Make sure to add enough detail to provide context for others.{' '}
      </sc.Desc>

      <sc.InputTitle
        placeholder='Question'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <sc.TextAreaBody
        placeholder='More Details'
        value={body}
        onChange={e => setBody(e.target.value)}
      />

      <sc.Buttonn type='submit'>Post Question</sc.Buttonn>
    </sc.Form>
  );
};

export default Question;
