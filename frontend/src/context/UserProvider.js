import React, { useState, useEffect } from 'react';
import { CurrentUser } from './contexts';
import { useCurrentUser } from '../api/userApi';

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState({});

  const { data } = useCurrentUser();

  useEffect(() => {
    // (() => {
    if (data && data.data && data.data.id) setCurrentUser(data.data);
    // })();
  }, [data]);

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </CurrentUser.Provider>
  );
};

export default UserProvider;
