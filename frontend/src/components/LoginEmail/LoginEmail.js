import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../../api/useFetch';
import * as sc from './LoginEmail.style';

const LoginEmail = () => {
  const [email, setEmail] = useState('teacher@email.com');
  const [password, setPassword] = useState('teacher');
  const [user, setUser] = useState([]);

  const history = useHistory();

  const [getData, { loading, error }] = useFetch('/users/login', {
    method: 'POST'
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const data = await getData({ email, password });

    if (!loading && !error && data) {
      setUser(data);

      history.push('/challenge');
    }
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

      <sc.Buttonn type='submit'>Log in</sc.Buttonn>
    </sc.Form>
  );
};

export default LoginEmail;
