import React, { useState, useEffect, createContext } from 'react';
import useFetch from '../api/useFetch';

const userContext = createContext({
  currentUser: {},
  setCurrentUser: () => {}
});

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState({});

  const [getCurrentUser, loading, error] = useFetch('/user/current');

  useEffect(() => {
    (async () => {
      const currentUser = await getCurrentUser();

      if (error) console.log('UserProvider error: ', error);

      if (
        !loading &&
        !error &&
        currentUser &&
        currentUser.user &&
        currentUser.user.id
      )
        setCurrentUser(currentUser.user);
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
