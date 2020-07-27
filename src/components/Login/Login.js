import React, { useState } from 'react';
// import useLogin from '../../api/useLogin';
import request from '../../utils/request';
import * as sc from './Login.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, login] = useLogin(email, password);

  const onSubmit = async e => {
    e.preventDefault();

    // const user = await login(email, password);

    const options = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    try {
      await request('/users/login', options);
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
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type='submit'>Log in</button>
      </form>
    </sc.Container>
  );
};

export default Login;
