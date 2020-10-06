import React, { useState, useContext } from 'react';
import DOMPurify from 'dompurify';
import { useHistory } from 'react-router-dom';
import { CurrentUser } from '../../../context/contexts';
import useFetch from '../../../api/useFetch';
// import { useResetPass } from '../../../api/userApi';
import * as sc from './ResetPass.style';

const ResetPass = props => {
  const { resetToken } = props;
  const [newPassword, setNewPassword] = useState('');
  const { setCurrentUser } = useContext(CurrentUser);
  const history = useHistory();

  const [resetPass] = useFetch('/user/reset-password');

  // const [resetPass] = useResetPass();

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setNewPassword(cleanValue);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // await resetPass({ newPassword }, props.resetToken);

      const user = await resetPass({ newPassword, resetToken });

      setCurrentUser(user);

      history.push('/');
    } catch (error) {
      console.log('ResetPass error: ', error);
    }
  };

  return (
    <sc.Form onSubmit={handleSubmit}>
      <sc.Label>
        New Password:
        <input
          required
          minLength='8'
          type='password'
          value={newPassword}
          placeholder='Password'
          onChange={handleChange}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Reset Password</sc.Buttonn>
    </sc.Form>
  );
};

export default ResetPass;
