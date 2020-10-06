import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import Header from '../components/organisms/Header/Header';
import ResetPass from '../components/molecules/ResetPass/ResetPass';
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
