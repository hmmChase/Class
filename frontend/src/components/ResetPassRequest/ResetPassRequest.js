import React, { useState } from 'react';
import request from '../../utils/request';
import * as sc from './ResetPassRequest.style';

const ResetPassRequest = () => {
  const [email, setEmail] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    // const user = await ResetPass(email, password);

    const options = {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    try {
      await request('/users/reset-password', options);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <sc.Form onSubmit={onSubmit}>
      <sc.Label>
        Email:
        <input
          required
          type='email'
          value={email}
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Request Password Reset</sc.Buttonn>
    </sc.Form>
  );
};

export default ResetPassRequest;
