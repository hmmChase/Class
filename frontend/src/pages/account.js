import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context';
import Layout from '../components/SECTIONS/Layout/Layout';
import Header from '../components/SECTIONS/Header/Header';
import Account from '../components/SECTIONS/Account/Account';

const AccountPage = () => {
  const { currentUser } = useContext(UserContext);
console.log('currentUser:', currentUser)

  if (!currentUser || !currentUser.id) return <Redirect to='/' />;
console.log('!currentUser || !currentUser.id:', !currentUser || !currentUser.id)

  return <Layout header={<Header />} main={<Account />}></Layout>;
};

export default AccountPage;
