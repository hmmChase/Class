import React, { useState } from 'react';
import useFetch from '../../../api/useFetch';
// import { useResetPass } from '../../../api/userApi';
import * as sc from './ResetPass.style';

const ResetPass = props => {
  const [newPassword, setNewPassword] = useState('');

  const [resetPass] = useFetch(`/user/reset-password/${props.resetToken}`);

  // const [resetPass] = useResetPass();

  const handleSubmit = async e => {
    e.preventDefault();

    // await resetPass({ newPassword }, props.resetToken);
    await resetPass({ newPassword });
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
          onChange={e => setNewPassword(e.target.value)}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Reset Password</sc.Buttonn>
    </sc.Form>
  );
};

export default ResetPass;
