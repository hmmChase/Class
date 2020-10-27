import React, { useContext } from 'react';
import { CurrentUserContext } from '../../../context/contexts';
import BtnLogIn from '../../molecules/BtnLogIn/BtnLogIn';
import BtnSignup from '../../molecules/BtnSignup/BtnSignup';
import IconKnight from '../../molecules/IconKnight/IconKnight';
import IconUser from '../../molecules/IconUser/IconUser';
import * as sc from './Header.style';

const Header = () => {
  const { currentUser } = useContext(CurrentUserContext);

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
