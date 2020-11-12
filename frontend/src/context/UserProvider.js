import React, { useState } from 'react';
import { CurrentUserContext } from './contexts';
import * as api from '../api/userApi';

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState({});
  // const [currentUserLoading, setCurrentUserLoading] = useState(false);
  const [isCurrentUserError, setIsCurrentUserError] = useState(false);

  // Queries

  api.useCurrentUser({
    onSuccess: data => setCurrentUser(data.data)
  });

  // Mutations

  const [signup] = api.useSignup({
    onSuccess: data => setCurrentUser(data.data)
  });

  const [loginEmail] = api.useLoginEmail({
    onError: (error, mutationVariables) => setIsCurrentUserError(true),

    onSuccess: (data, mutationVariables) => setCurrentUser(data.data)
  });

  const [logout] = api.useLogout({
    onSuccess: () => setCurrentUser({})
  });

  const [resetPassReq] = api.useResetPassRequest();

  const [resetPass] = api.useResetPass({
    onSuccess: data => setCurrentUser(data.data)
  });

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isCurrentUserError,
        signup,
        loginEmail,
        logout,
        resetPassReq,
        resetPass
      }}
    >
      {props.children}
    </CurrentUserContext.Provider>
  );
};

export default UserProvider;

// const useSignup = config => {
//   const [signup] = useMutation(api.signup, config);

//   return signup;
// };
