import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../../api/useFetch';
import * as sc from './SignUpEmail.style';

const SignUpEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  const history = useHistory();
  const [getData, { loading, error }] = useFetch('/users/signup');

  const onSubmit = async e => {
    e.preventDefault();

    const role = isTeacher ? 'TEACHER' : 'STUDENT';
    const avatarUrl = 'http://picsum.photos/40';

    const data = await getData({ email, password, username, role, avatarUrl });

    // if (!loading && !error && data && data.user) history.push('/challenge');
  };

  return (
    <sc.Form onSubmit={onSubmit}>
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

      <sc.Label>
        Teacher?
        <input
          type='checkbox'
          checked={isTeacher}
          onChange={() => setIsTeacher(!isTeacher)}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Sign Up</sc.Buttonn>
    </sc.Form>
  );
};

export default SignUpEmail;
