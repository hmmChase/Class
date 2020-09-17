import React from 'react';
// import { Redirect } from 'react-router-dom';
// import AppContext from '../context/app';
// import { useParams } from 'react-router-dom';
import Layout from '../components/organisms/Layout/Layout';
import Header from '../components/organisms/Header/Header';
import Main from '../components/organisms/Main/Main';

const ChallengePage = () => {
  // const { currentUser } = useContext(AppContext);
  // const { challengePath, questionId } = useParams();

  // if (!currentUser || !currentUser.id) return <Redirect to='/' />;

  return <Layout header={<Header />} main={<Main />}></Layout>;
};

// const ChallengePage = () => <div>ChallengePage</div>;

export default ChallengePage;
