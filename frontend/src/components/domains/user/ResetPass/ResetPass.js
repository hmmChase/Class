import React, { useState, useContext } from 'react';
import DOMPurify from 'dompurify';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../../../context/contexts';
import * as sc from './ResetPass.style';

const ResetPass = props => {
  const { resetToken } = props;

  const [newPassword, setNewPassword] = useState('');

  const { resetPass } = useContext(CurrentUserContext);

  const history = useHistory();

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setNewPassword(cleanValue);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    resetPass({ newPassword, resetToken });

    history.push('/');
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
