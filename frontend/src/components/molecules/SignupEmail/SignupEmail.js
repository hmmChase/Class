import React, { useState, useContext } from 'react';
import useFetch from '../../../api/useFetch';
import { CurrentUser } from '../../../context/contexts';
import * as sc from './SignupEmail.style';

const SignupEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { setCurrentUser } = useContext(CurrentUser);
  const [signup, loading, error] = useFetch('/user/signup');

  const handleSubmit = async e => {
    e.preventDefault();

    const newUser = await signup({ username, email, password });

    if (!loading && !error && newUser && newUser.id) setCurrentUser(newUser);
  };

  return (
    <sc.Form onSubmit={handleSubmit}>
      <sc.Label>
        Username:
        <input
          required
          type='text'
          value={username}
          placeholder='Username'
          onChange={e => setUsername(e.target.value)}
        />
      </sc.Label>

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
          minLength='8'
          type='password'
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Sign Up</sc.Buttonn>
    </sc.Form>
  );
};

export default SignupEmail;
