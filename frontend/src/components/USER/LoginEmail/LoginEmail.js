import React, { useState, useContext } from 'react';
import DOMPurify from 'dompurify';
import { CurrentUserContext } from '../../../context';
import InputLabel from '../../REUSEABLE/InputLabel/InputLabel';
import * as sc from './LoginEmail.style';

const LoginEmail = props => {
  const [email, setEmail] = useState('student1@email.com');

  const [password, setPassword] = useState('student1');

  const { loginEmail, isCurrentUserError } = useContext(CurrentUserContext);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    if (e.target.id === 'email') setEmail(cleanValue);

    if (e.target.id === 'password') setPassword(cleanValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    loginEmail({ email, password });
  };

  return (
    <sc.Form onSubmit={handleSubmit}>
      <InputLabel htmlFor='email'>Email</InputLabel>

      <sc.Inputt
        required
        id='email'
        type='email'
        value={email}
        // placeholder='Email'
        onChange={handleChange}
      />

      <InputLabel htmlFor='password'>Password</InputLabel>

      <sc.Inputt
        required
        id='password'
        type='password'
        value={password}
        // placeholder='Password'
        onChange={handleChange}
      />

      {isCurrentUserError && <p>Invalid creditials, please try again.</p>}

      <sc.ForgetPass onClick={props.toggleShowPassReset}>
        Forgot your password?
      </sc.ForgetPass>

      <sc.Buttonn type='submit'>Log in</sc.Buttonn>
    </sc.Form>
  );
};

export default LoginEmail;
