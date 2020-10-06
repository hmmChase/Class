import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { useResetPassRequest } from '../../../api/userApi';
import * as sc from './ResetPassRequest.style';

const ResetPassRequest = () => {
  const [email, setEmail] = useState('');

  const [resetPassReq] = useResetPassRequest();

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setEmail(cleanValue);
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await resetPassReq({ email });
    } catch (error) {
      // console.log('LoginEmail error: ', error);
    }
  };

  return (
    <sc.Form onSubmit={onSubmit}>
      <sc.Label>
        Email:
        <sc.Input
          required
          type='email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Request Password Reset</sc.Buttonn>
    </sc.Form>
  );
};

export default ResetPassRequest;
