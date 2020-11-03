import React from 'react';
import Layout from '../components/sections/Layout/Layout';
import Header from '../components/sections/Header/Header';
import Challenges from '../components/domains/challenge/Challenges/Challenges';

const IndexPage = () => (
  <Layout header={<Header />} main={<Challenges />}></Layout>
);

export default IndexPage;
