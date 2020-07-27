import React, { useState } from 'react';
// import useSignUp from '../../api/useSignUp';
import request from '../../utils/request';
import * as sc from './SignUp.style';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [user, SignUp] = useSignUp(email, password);

  const onSubmit = async e => {
    e.preventDefault();

    // const user = await SignUp(email, password);

    const options = {
      method: 'POST',
      body: JSON.stringify({ email, name, password }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    try {
      await request('/users/signup', options);
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

        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </sc.Container>
  );
};

export default SignUp;
