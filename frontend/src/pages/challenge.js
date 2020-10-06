import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import Header from '../components/organisms/Header/Header';
import Main from '../components/organisms/Main/Main';

const ChallengePage = () => (
  <Layout header={<Header />} main={<Main />}></Layout>
);

export default ChallengePage;
