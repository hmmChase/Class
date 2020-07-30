import React, { useState } from 'react';
// import useLogin from '../../api/useLogin';
import request from '../../utils/request';
import * as sc from './Login.style';

const Login = () => {
  const [email, setEmail] = useState('teacher@email.com');
  const [password, setPassword] = useState('teacher');
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
    <sc.Form onSubmit={onSubmit}>
      <sc.Label>
        Email:
        <input
          type='email'
          value={email}
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
      </sc.Label>

      <sc.Label>
        Password:
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Log in</sc.Buttonn>
    </sc.Form>
  );
};

export default Login;
