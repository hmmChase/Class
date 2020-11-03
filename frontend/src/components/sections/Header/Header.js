import React, { useContext } from 'react';
import { CurrentUserContext } from '../../../context/contexts';
import BtnLogIn from '../../user/BtnLogIn/BtnLogIn';
import BtnSignup from '../../user/BtnSignup/BtnSignup';
import IconKnight from '../../other/IconKnight/IconKnight';
import IconUser from '../../other/IconUser/IconUser';
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
