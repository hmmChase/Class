import React, { useState, useContext } from 'react';
import { CurrentUser } from '../../../context/contexts';
import { useSignup } from '../../../api/userApi';
import * as sc from './SignupEmail.style';

const SignupEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { setCurrentUser } = useContext(CurrentUser);

  const [signup] = useSignup({ onSuccess: data => setCurrentUser(data.data) });

  const handleSubmit = async e => {
    e.preventDefault();

    await signup({ username, email, password });
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
