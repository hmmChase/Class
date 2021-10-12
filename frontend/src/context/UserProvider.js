import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './';

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState({});
  const [isCurrentUserError, setIsCurrentUserError] = useState(false);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isCurrentUserError,
        setIsCurrentUserError
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any
};

export default UserProvider;
