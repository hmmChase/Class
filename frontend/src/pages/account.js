import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../context/contexts';
import Layout from '../components/sections/Layout/Layout';
import Header from '../components/sections/Header/Header';
import Account from '../components/sections/Account/Account';

const AccountPage = () => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser && !currentUser.id) return <Redirect to='/' />;

  return <Layout header={<Header />} main={<Account />}></Layout>;
};

export default AccountPage;
