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
      await request('/threads/create', options);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <sc.Form onSubmit={onSubmit}>
      <textarea
        value={body}
        placeholder='Type your Question here'
        onChange={e => setBody(e.target.value)}
      />

      <button type='submit'>Post Question</button>
    </sc.Form>
  );
};

export default Question;
