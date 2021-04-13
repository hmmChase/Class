import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../context';
import Layout from '../components/SECTIONS/Layout/Layout';
import Header from '../components/SECTIONS/Header/Header';
import Account from '../components/SECTIONS/Account/Account';

const AccountPage = () => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser && !currentUser.id) return <Redirect to='/' />;

  return <Layout header={<Header />} main={<Account />}></Layout>;
};

export default AccountPage;
