import React from 'react';
import * as sc from './Header.style';

const Header = props => {
  return (
    <sc.Container>
      <sc.KnightIcon />

      <sc.Title>challenge board</sc.Title>

      <sc.UserIcon>
        {props.user && props.user.avatarUrl ? (
          <sc.UserIconDefined src={props.user.avatarUrl} />
        ) : (
          <sc.UserIconDefault />
        )}
      </sc.UserIcon>
    </sc.Container>
  );
};

export default Header;
