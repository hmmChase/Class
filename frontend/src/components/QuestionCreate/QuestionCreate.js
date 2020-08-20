import React, { useState } from 'react';
import useFetch from '../../api/useFetch';
import * as sc from './QuestionCreate.style';

const Question = () => {
  const [body, setBody] = useState('');
  const [getData] = useFetch('/questions/create');

  const onSubmit = async e => {
    e.preventDefault();

    await getData({ authorId: 3, body });
  };

  return (
    <sc.Form onSubmit={onSubmit}>
      <sc.TextArea
        value={body}
        placeholder=''
        onChange={e => setBody(e.target.value)}
      />

      <sc.Buttonn type='submit'>Post Question</sc.Buttonn>
    </sc.Form>
  );
};

export default Question;
