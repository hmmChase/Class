import React, { useState } from 'react';
// import useQuestion from '../../api/useQuestion';
import request from '../../utils/request';
import * as sc from './Question.style';

const Question = () => {
  const [body, setBody] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({ authorId: 3, body }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    try {
      await request('/questions/create', options);
    } catch (err) {
      console.error(err);
    }
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
