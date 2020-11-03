import React from 'react';
import Layout from '../components/sections/Layout/Layout';
import Header from '../components/sections/Header/Header';
import ResetPass from '../components/domains/user/ResetPass/ResetPass';
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
