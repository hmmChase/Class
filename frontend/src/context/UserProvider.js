import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CurrentUserContext } from './';
// import * as api from '../api/userApi';

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState({});
  // const [currentUserLoading, setCurrentUserLoading] = useState(false);
  const [isCurrentUserError, setIsCurrentUserError] = useState(false);

  // // Queries

  // // api.useCurrentUser({
  // //   onSuccess: data => setCurrentUser(data.data)
  // // });

  // // Mutations

  // // const [signup] = api.useSignup({
  // //   onSuccess: data => setCurrentUser(data.data)
  // // });

  // const signup = async options => {
  //   const response = await instance.post('/user/signup', options);

  //   setCurrentUser(response.data);
  // };

  // // const [loginEmail] = api.useLoginEmail({
  // //   onError: (error, mutationVariables) => setIsCurrentUserError(true),

  // //   onSuccess: (data, mutationVariables) => setCurrentUser(data.data)
  // // });

  // const loginEmail = async options => {
  //   const response = await instance.post('/user/login', options);

  //   setCurrentUser(response.data);
  // };

  // // const [logout] = api.useLogout({
  // //   onSuccess: () => setCurrentUser({})
  // // });

  // const logout = async options => {
  //   await instance.post('/user/logout', options);

  //   setCurrentUser({});
  // };

  // // const [resetPassReq] = api.useResetPassRequest();

  // const resetPassReq = async options =>
  //   await instance.post('/user/reset-password-request', options);

  // // const [resetPass] = api.useResetPass({
  // //   onSuccess: data => setCurrentUser(data.data)
  // // });

  // const resetPass = async options => {
  //   const response = await instance.post(`/user/reset-password`, options);

  //   setCurrentUser(response.data);
  // };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isCurrentUserError,
        setIsCurrentUserError
      }}
    >
      {props.children}
    </CurrentUserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any
};

export default UserProvider;

// const useSignup = config => {
//   const [signup] = useMutation(api.signup, config);

//   return signup;
// };
