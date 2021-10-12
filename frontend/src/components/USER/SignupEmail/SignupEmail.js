import React, { useState, useContext } from 'react';
import DOMPurify from 'dompurify';
import { UserContext } from '../../../context';
import { useSignup } from '../../../hooks/user';
import InputLabel from '../../REUSEABLE/InputLabel/InputLabel';
import Input from '../../REUSEABLE/Input/Input';
import * as sc from './SignupEmail.style';

const SignupEmail = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');

  const { setCurrentUser, isCurrentUserError, setIsCurrentUserError } =
    useContext(UserContext);

  const mutation = useSignup({
    onError: error => setIsCurrentUserError(true),

    onSuccess: (data, variables, context) => setCurrentUser(data.data)
  });

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    if (e.target.id === 'username') setUsername(cleanValue);

    if (e.target.id === 'email') setEmail(cleanValue);

    if (e.target.id === 'password') setPassword(cleanValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    mutation.mutate({ username, email, password });
  };

  return (
    <sc.Form onSubmit={handleSubmit}>
      <InputLabel>Username</InputLabel>

      <Input
        required
        id='username'
        type='text'
        value={username}
        onChange={handleChange}
      />

      <InputLabel>Email</InputLabel>

      <Input
        required
        id='email'
        type='email'
        value={email}
        onChange={handleChange}
      />

      <InputLabel>Password</InputLabel>

      <Input
        required
        id='password'
        minLength='8'
        type='password'
        value={password}
        onChange={handleChange}
      />

      {isCurrentUserError && <p>Invalid creditials, please try again.</p>}

      <sc.PassRequirements>
        * Must be at least 8 characters.
      </sc.PassRequirements>

      <sc.Buttonn type='submit'>Sign Up</sc.Buttonn>
    </sc.Form>
  );
};

export default SignupEmail;
