import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
// import AppContext from '../context/app';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const QPage = () => {
  const { questionId } = useParams();

  if (!questionId) return <Redirect to='/' />;

  // const { currentUser } = useContext(AppContext);

  // if (!currentUser || !currentUser.id) return <Redirect to='/' />;

  return <Layout header={<Header />} main={<Main />}></Layout>;
};

export default QPage;
