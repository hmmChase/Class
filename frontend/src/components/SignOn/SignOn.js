import React, { useState } from 'react';
import Login from '../Login/Login';
import ResetPass from '../ResetPass/ResetPass';
import SignUp from '../SignUp/SignUp';
import * as sc from './SignOn.style';

const SignOn = () => {
  const [tab, setTab] = useState('tab1');

  const dispayPanel = tab => {
    switch (tab) {
      case 'tab1':
        return <Login />;

      case 'tab2':
        return <ResetPass />;

      case 'tab3':
        return <SignUp />;

      case 'tab4':
        return <SignUp />;

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

        <label htmlFor='tab1'>Login</label>

        <input
          type='radio'
          name='tab'
          id='tab2'
          value=''
          checked={tab === 'tab2'}
          onChange={() => setTab('tab2')}
        />

        <label htmlFor='tab2'>Reset Password</label>

        <input
          type='radio'
          name='tab'
          id='tab3'
          value=''
          checked={tab === 'tab3'}
          onChange={() => setTab('tab3')}
        />

        <label htmlFor='tab3'>Sign Up</label>

        <input
          type='radio'
          name='tab'
          id='tab4'
          value=''
          checked={tab === 'tab4'}
          onChange={() => setTab('tab4')}
        />

        <label htmlFor='tab4'>Discord</label>
      </sc.Nav>

      {dispayPanel(tab)}
    </sc.Container>
  );
};

export default SignOn;
