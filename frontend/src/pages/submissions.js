import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../context/contexts';
import Layout from '../components/SECTIONS/Layout/Layout';
import Header from '../components/SECTIONS/Header/Header';
import Projects from '../components/PROJECT/Projects/Projects';

const SubmissionsPage = () => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser && !currentUser.id) return <Redirect to='/' />;

  return <Layout header={<Header />} main={<Projects />}></Layout>;
};

export default SubmissionsPage;
