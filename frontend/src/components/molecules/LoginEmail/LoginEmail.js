import React, { useState, useContext } from 'react';
import useFetch from '../../../api/useFetch';
import AppContext from '../../../context/app';
import * as sc from './LoginEmail.style';

const LoginEmail = () => {
  const [email, setEmail] = useState('student1@email.com');
  const [password, setPassword] = useState('student1');
  const { setCurrentUser } = useContext(AppContext);
  const [getData, { loading, error }] = useFetch('/user/login');

  const handleSubmit = async e => {
    e.preventDefault();

    const data = await getData({ email, password });

    if (!loading && !error && data && data.user) setCurrentUser(data.user);
  };

  return (
    <sc.Form onSubmit={handleSubmit}>
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

      <sc.Label>
        Password:
        <input
          required
          type='password'
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
      </sc.Label>

      {error && <p>{error}</p>}

      <sc.Buttonn type='submit'>Log in</sc.Buttonn>
    </sc.Form>
  );
};

export default LoginEmail;
