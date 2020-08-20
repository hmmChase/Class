import React, { useContext } from 'react';
import AppContext from '../../context/app';
import * as sc from './Header.style';

const Header = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container>
      <sc.KnightIcon />

      <sc.Title>challenge board</sc.Title>

      <sc.UserIcon>
        {currentUser && currentUser.avatarUrl ? (
          <sc.UserIconDefined src={currentUser.avatarUrl} />
        ) : (
          <sc.UserIconDefault />
        )}
      </sc.UserIcon>
    </sc.Container>
  );
};

export default Header;
