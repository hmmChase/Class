import React, { useState } from 'react';
import request from '../../utils/request';
import * as sc from './ResetPassword.style';

const ResetPassword = props => {
  const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({ newPassword }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    try {
      await request(`/users/reset-password/${props.resetToken}`, options);
    } catch (err) {
      console.error(err);
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
          onChange={e => setNewPassword(e.target.value)}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Reset Password</sc.Buttonn>
    </sc.Form>
  );
};

export default ResetPassword;
