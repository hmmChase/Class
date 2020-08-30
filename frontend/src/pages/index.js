import React from 'react';
import Layout from '../components/organisms/Layout/Layout';
import Header from '../components/organisms/Header/Header';
import ChallengeList from '../components/molecules/ChallengeList/ChallengeList';

const IndexPage = () => {
  return <Layout header={<Header />} main={<ChallengeList />}></Layout>;
};

export default IndexPage;
