import React, { useState } from 'react';
import { CurrentUser } from './contexts';
import * as api from '../api/userApi';

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState({});
  // const [currentUserLoading, setCurrentUserLoading] = useState(false);
  // const [currentUserError, setCurrentUserError] = useState(false);

  api.useCurrentUser({
    onSuccess: data => setCurrentUser(data.data)
  });

  // if (isLoading) setCurrentUserLoading(isLoading);

  // if (isError) setCurrentUserError(error);

  const [signup] = api.useSignup({
    onSuccess: data => setCurrentUser(data.data)
  });

  const [loginEmail] = api.useLoginEmail({
    onSuccess: data => setCurrentUser(data.data)
  });

  const [logout] = api.useLogout({
    onSuccess: () => setCurrentUser({})
  });

  const [resetPassReq] = api.useResetPassRequest();

  const [resetPass] = api.useResetPass({
    onSuccess: data => setCurrentUser(data.data)
  });

  return (
    <CurrentUser.Provider
      value={{
        currentUser,
        setCurrentUser,
        signup,
        loginEmail,
        logout,
        resetPassReq,
        resetPass
      }}
    >
      {props.children}
    </CurrentUser.Provider>
  );
};

export default UserProvider;

// const useSignup = config => {
//   const [signup] = useMutation(api.signup, config);

//   return signup;
// };
