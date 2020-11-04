import React from 'react';
import Layout from '../components/SECTIONS/Layout/Layout';
import Header from '../components/SECTIONS/Header/Header';
import ResetPass from '../components/USER/ResetPass/ResetPass';
import getQueryString from '../utils/getQueryString';

const ResetPasswordPage = () => {
  const resetToken = getQueryString('resetToken');

  return (
    <Layout
      header={<Header />}
      main={
        <>
          {resetToken ? (
            <ResetPass resetToken={resetToken} />
          ) : (
            <p>Missing reset token</p>
          )}
        </>
      }
    ></Layout>
  );
};

export default ResetPasswordPage;
