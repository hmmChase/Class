import React, { useState, useContext } from 'react';
import { CurrentUser } from '../../../context/contexts';
import { useLoginEmail } from '../../../api/userApi';
import * as sc from './LoginEmail.style';

const LoginEmail = () => {
  const [email, setEmail] = useState('student1@email.com');
  const [password, setPassword] = useState('student1');
  const { setCurrentUser } = useContext(CurrentUser);

  const [loginEmail, { error }] = useLoginEmail({
    onSuccess: data => setCurrentUser(data.data)
  });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await loginEmail({ email, password });
    } catch (error) {
      // console.log('LoginEmail error: ', error);
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

      {/* {error && error.error && <p>{error.error}</p>} */}

      <sc.Buttonn type='submit'>Log in</sc.Buttonn>
    </sc.Form>
  );
};

export default LoginEmail;
