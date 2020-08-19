import React from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const ChallengePage = props => {
  if (!props.isLoggedIn) return <Redirect to='/' />;

  return (
    <Layout
      header={<Header user={props.user} />}
      main={<Main user={props.user} />}
    ></Layout>
  );
};

export default ChallengePage;
