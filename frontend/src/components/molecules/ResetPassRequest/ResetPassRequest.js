import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import BtnReqPass from '../BtnReqPass/BtnReqPass';
import * as sc from './ResetPassRequest.style';

const ResetPassRequest = () => {
  const [email, setEmail] = useState('');

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setEmail(cleanValue);
  };

  return (
    <sc.Form>
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

      <BtnReqPass email={email} />
    </sc.Form>
  );
};

export default ResetPassRequest;
