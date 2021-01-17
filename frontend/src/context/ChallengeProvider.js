import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChallengeContext } from './contexts';
import * as api from '../api/challengeApi';

import instance from '../api/baseApi';

const ChallengeProvider = props => {
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState([]);

  // const getChallenges = () =>
  //   api.useGetChallenges({ onSuccess: data => setChallenges(data.data) });

  const getChallenges = async () => {
    const response = await instance.get('/challenge/all');

    setChallenges(response.data);
  };

  // const getChallenge = challengePath => {
  //   api.useGetChallenge({
  //     variables: { challengePath },

  //     onSuccess: data => setChallenge(data.data)
  //   });
  // };

  const getChallenge = async challengePath => {
    const response = await instance.get(`/challenge/path/${challengePath}`);

    setChallenge(response.data);
  };

  return (
    <ChallengeContext.Provider
      value={{ challenges, challenge, getChallenges, getChallenge }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};

ChallengeProvider.propTypes = {
  children: PropTypes.any
};

export default ChallengeProvider;
