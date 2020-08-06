import React from 'react';
import ResetPass from '../components/ResetPass/ResetPass';
import ResetPassRequest from '../components/ResetPassRequest/ResetPassRequest';
import getParameterByName from '../utils/getParameterByName';

const ResetPasswordPage = () => {
  const resetToken = getParameterByName('token');

  return (
    <>
      {resetToken ? (
        <ResetPass resetToken={resetToken} />
      ) : (
        <ResetPassRequest />
      )}
    </>
  );
};

export default ResetPasswordPage;
