import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/app';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const ChallengePage = () => {
  const { currentUser } = useContext(AppContext);

  if (!currentUser || !currentUser.id) return <Redirect to='/' />;

  return <Layout header={<Header />} main={<Main />}></Layout>;
};

export default ChallengePage;
