import React, { useState, useContext } from 'react';
import DOMPurify from 'dompurify';
import { UserContext } from '../../../context';
import { useLoginEmail } from '../../../hooks/user';
import InputLabel from '../../REUSEABLE/InputLabel/InputLabel';
import * as sc from './LoginEmail.style';

const LoginEmail = props => {
  const [email, setEmail] = useState('student1@email.com');

  const [password, setPassword] = useState('student1');

  const { setCurrentUser, isCurrentUserError, setIsCurrentUserError } =
    useContext(UserContext);

  const mutation = useLoginEmail({
    onError: error => setIsCurrentUserError(true),

    onSuccess: (data, variables, context) => setCurrentUser(data.data)
  });

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    if (e.target.id === 'email') setEmail(cleanValue);

    if (e.target.id === 'password') setPassword(cleanValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    mutation.mutate({ email, password });
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
