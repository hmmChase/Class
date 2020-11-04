import React from 'react';
import Layout from '../components/SECTIONS/Layout/Layout';
import Header from '../components/SECTIONS/Header/Header';
import Challenges from '../components/CHALLENGE/Challenges/Challenges';

const IndexPage = () => (
  <Layout header={<Header />} main={<Challenges />}></Layout>
);

export default IndexPage;
