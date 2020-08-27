import React, { useState } from 'react';
import useFetch from '../../api/useFetch';
import * as sc from './QuestionCreate.style';

const Question = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [getData] = useFetch('/questions/create');

  const handleSubmit = async e => {
    e.preventDefault();

    await getData({ authorId: 3, body });
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
