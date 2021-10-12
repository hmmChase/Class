import React, { useState, useContext } from 'react';
import DOMPurify from 'dompurify';
// import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../context';
import * as sc from './ResetPass.style';

const ResetPass = props => {
  const { resetToken } = props;

  const [newPassword, setNewPassword] = useState('');

  const [isSuccessful, setIsSuccessful] = useState(false);

  const { resetPass } = useContext(UserContext);

  // const history = useHistory();

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setNewPassword(cleanValue);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await resetPass({ newPassword, resetToken });

    if (response && response.data && response.data.id) setIsSuccessful(true);

    // history.push('/');
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

      {isSuccessful && <p>Your password has been successfully changed.</p>}
    </sc.Form>
  );
};

export default ResetPass;
