import React, { useState } from 'react';
// import useSignUp from '../../api/useSignUp';
import request from '../../utils/request';
import * as sc from './SignUp.style';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  // const [user, SignUp] = useSignUp(email, password);

  const onSubmit = async e => {
    e.preventDefault();

    // const user = await SignUp(email, password);

    const role = isTeacher ? 'TEACHER' : 'STUDENT';
    const avatarUrl = 'http://picsum.photos/40';

    const options = {
      method: 'POST',
      body: JSON.stringify({ name, email, password, role, avatarUrl }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    try {
      await request('/users/signup', options);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <sc.Form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={name}
          placeholder='Name'
          onChange={e => setName(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type='email'
          value={email}
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
      </label>

      <label>
        Teacher?
        <input
          type='checkbox'
          checked={isTeacher}
          onChange={() => setIsTeacher(!isTeacher)}
        />
      </label>

      <button type='submit'>Sign Up</button>
    </sc.Form>
  );
};

export default SignUp;
