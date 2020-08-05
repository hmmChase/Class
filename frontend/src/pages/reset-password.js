import React from 'react';
import ResetPassword from '../components/ResetPassword/ResetPassword';
import RequestPassReset from '../components/RequestPassReset/RequestPassReset';
import getParameterByName from '../utils/getParameterByName';

const ResetPasswordPage = () => {
  const resetToken = getParameterByName('token');

  return (
    <>
      {resetToken ? (
        <ResetPassword resetToken={resetToken} />
      ) : (
        <RequestPassReset />
      )}
    </>
  );
};

export default ResetPasswordPage;
