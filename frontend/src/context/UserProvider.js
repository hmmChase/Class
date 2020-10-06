import React, { useState, useEffect } from 'react';
import { CurrentUser } from './contexts';
import { useCurrentUser } from '../api/userApi';

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState({});

  const response = useCurrentUser();

  useEffect(() => {
    // (() => {
    if (
      response &&
      response.data &&
      response.data.data &&
      response.data.data.id
    )
      setCurrentUser(response.data.data);
    // })();
  }, [response]);

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </CurrentUser.Provider>
  );
};

export default UserProvider;
