import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { CurrentUser } from '../context/contexts';
import Layout from '../components/organisms/Layout/Layout';
import Header from '../components/organisms/Header/Header';
import Account from '../components/organisms/Account/Account';

const AccountPage = () => {
  const { currentUser } = useContext(CurrentUser);

  if (!currentUser && !currentUser.id) return <Redirect to='/' />;

  return <Layout header={<Header />} main={<Account />}></Layout>;
};

export default AccountPage;
