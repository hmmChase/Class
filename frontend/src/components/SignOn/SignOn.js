import React, { useState } from 'react';
import LoginEmail from '../LoginEmail/LoginEmail';
import ResetPassRequest from '../ResetPassRequest/ResetPassRequest';
import SignUpEmail from '../SignUpEmail/SignUpEmail';
import LoginDiscord from '../LoginDiscord/LoginDiscord';
import SignUpDiscord from '../SignUpDiscord/SignUpDiscord';
import * as sc from './SignOn.style';

const SignOn = () => {
  const [tab, setTab] = useState('tab1');

  const dispayPanel = tab => {
    switch (tab) {
      case 'tab1':
        return <LoginEmail />;

      case 'tab2':
        return <LoginDiscord />;

      case 'tab3':
        return <ResetPassRequest />;

      case 'tab4':
        return <SignUpEmail />;

      case 'tab5':
        return <SignUpDiscord />;

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
          id='tab1'
          value=''
          checked={tab === 'tab1'}
          onChange={() => setTab('tab1')}
        />

        <label htmlFor='tab1'>Login Email</label>

        <input
          type='radio'
          name='tab'
          id='tab2'
          value=''
          checked={tab === 'tab2'}
          onChange={() => setTab('tab2')}
        />

        <label htmlFor='tab2'>Login Discord</label>

        <input
          type='radio'
          name='tab'
          id='tab3'
          value=''
          checked={tab === 'tab3'}
          onChange={() => setTab('tab3')}
        />

        <label htmlFor='tab3'>Reset Pass Request</label>

        <input
          type='radio'
          name='tab'
          id='tab4'
          value=''
          checked={tab === 'tab4'}
          onChange={() => setTab('tab4')}
        />

        <label htmlFor='tab4'>SignUp Email</label>

        <input
          type='radio'
          name='tab'
          id='tab5'
          value=''
          checked={tab === 'tab5'}
          onChange={() => setTab('tab5')}
        />

        <label htmlFor='tab5'>SignUp Discord</label>
      </sc.Nav>

      {dispayPanel(tab)}
    </sc.Container>
  );
};

export default SignOn;
