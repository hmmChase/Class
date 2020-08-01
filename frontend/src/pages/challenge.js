import React from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const ChallengePage = props => {
  return <Layout header={<Header />} main={<Main />}></Layout>;
};

export default React.memo(ChallengePage);
