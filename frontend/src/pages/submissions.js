import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../context/contexts';
import Layout from '../components/sections/Layout/Layout';
import Header from '../components/sections/Header/Header';
import Submissions from '../components/project/Submissions/Submissions';

const SubmissionsPage = () => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser && !currentUser.id) return <Redirect to='/' />;

  return <Layout header={<Header />} main={<Submissions />}></Layout>;
};

export default SubmissionsPage;
