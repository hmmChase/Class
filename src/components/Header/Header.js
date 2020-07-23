import React from 'react';
import * as sc from './Header.style';

const Header = () => (
  <sc.Container>
    <sc.KnightIcon />

    <sc.Title>challenge board</sc.Title>

    <sc.UserIcon />
  </sc.Container>
);

export default Header;
