import React, { useState } from 'react';
// import useResetPass from '../../api/useResetPass';
import request from '../../utils/request';
import * as sc from './ResetPass.style';

const ResetPass = () => {
  const [email, setEmail] = useState('');
  // const [user, ResetPass] = useResetPass(email, password);

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
    <sc.Container>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button type='submit'>Reset Password</button>
      </form>
    </sc.Container>
  );
};

export default ResetPass;
