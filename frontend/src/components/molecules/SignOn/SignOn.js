import React, { useState } from 'react';
import LoginEmail from '../LoginEmail/LoginEmail';
import ResetPassRequest from '../ResetPassRequest/ResetPassRequest';
import SignUpEmail from '../SignUpEmail/SignUpEmail';
import LoginDiscord from '../LoginDiscord/LoginDiscord';
import SignUpDiscord from '../SignUpDiscord/SignUpDiscord';
import * as sc from './SignOn.style';

const SignOn = () => {
  const [tab, setTab] = useState('login');

  const dispayPanel = tab => {
    switch (tab) {
      case 'login':
        return (

        );

      case 'signup':
        return (
    
        );

      default:
        break;
    }
  };

  return (
    <sc.Container>
      <sc.Nav>
        <input
          type='radio'
          name='tab'
          id='login'
          value=''
          checked={tab === 'login'}
          onChange={() => setTab('login')}
        />

        <label htmlFor='login'>Login</label>

        <input
          type='radio'
          name='tab'
          id='signup'
          value=''
          checked={tab === 'signup'}
          onChange={() => setTab('signup')}
        />

        <label htmlFor='signup'>SignUp</label>
      </sc.Nav>

      {dispayPanel(tab)}
    </sc.Container>
  );
};

export default SignOn;
