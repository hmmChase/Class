import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import useFetch from '../../api/useFetch';
import AppContext from '../../context/app';
import * as sc from './Header.style';

const Header = () => {
  const { currentUser } = useContext(AppContext);
  const history = useHistory();
  const [getData] = useFetch('/users/logout');

  const onClick = async e => {
    e.preventDefault();

    await getData();

    history.push('/');
  };

  return (
    <sc.Container>
      <Link to='/'>
        <sc.KnightIcon />
      </Link>

      <sc.Title>challenge board</sc.Title>

      <sc.UserIcon onClick={onClick}>
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
