import React, { useContext } from 'react';
import { UserContext } from '../../../context';
import BtnLogIn from '../../USER/BtnLogIn/BtnLogIn';
import BtnSignup from '../../USER/BtnSignup/BtnSignup';
import IconKnight from '../../OTHER/IconKnight/IconKnight';
import IconUser from '../../OTHER/IconUser/IconUser';
import * as sc from './Header.style';

const Header = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <sc.Container>
      <IconKnight />

      <sc.Title>challenge board</sc.Title>

      {currentUser && currentUser.id ? (
        <IconUser />
      ) : (
        <div>
          <BtnLogIn />

          <BtnSignup />
        </div>
      )}
    </sc.Container>
  );
};

export default Header;
