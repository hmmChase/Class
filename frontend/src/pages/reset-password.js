import React from 'react';
import { useParams } from 'react-router-dom';
import ResetPass from '../components/ResetPass/ResetPass';
import ResetPassRequest from '../components/ResetPassRequest/ResetPassRequest';

const ResetPasswordPage = () => {
  const { resetToken } = useParams();

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
