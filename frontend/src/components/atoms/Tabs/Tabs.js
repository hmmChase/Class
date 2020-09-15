import React, { useState } from 'react';
import * as sc from './Tabs.style';

const Tabs = props => {
  const [tab, setTab] = useState('option1');

  const tabMenu = tab => {
    switch (tab) {
      case 'option1':
        return props.option1.body;

      case 'option2':
        return props.option2.body;

      default:
        break;
    }
  };

  return (
    <sc.Container className={props.className}>
      <sc.Nav>
        <input
          type='radio'
          name='tab'
          id='option1'
          value=''
          checked={tab === 'option1'}
          onChange={() => setTab('option1')}
        />

        <label htmlFor='option1'>{props.option1.title}</label>

        <input
          type='radio'
          name='tab'
          id='option2'
          value=''
          checked={tab === 'option2'}
          onChange={() => setTab('option2')}
        />

        <label htmlFor='option2'>{props.option2.title}</label>
      </sc.Nav>

      {tabMenu(tab)}
    </sc.Container>
  );
};

export default Tabs;
