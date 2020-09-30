import React, { useState } from 'react';
import { useLoginEmail } from '../../../api/userApi';
import * as sc from './ResetPassRequest.style';

const ResetPassRequest = () => {
  const [email, setEmail] = useState('');

  const [resetPassReq] = useLoginEmail();

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
          onChange={e => setEmail(e.target.value)}
        />
      </sc.Label>

      <sc.Buttonn type='submit'>Request Password Reset</sc.Buttonn>
    </sc.Form>
  );
};

export default ResetPassRequest;
