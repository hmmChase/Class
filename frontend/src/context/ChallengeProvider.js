import React, { useState } from 'react';
import { ChallengeContext } from './contexts';
import * as api from '../api/challengeApi';

const ChallengeProvider = props => {
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState([]);

  const getChallenges = () =>
    api.useGetChallenges({ onSuccess: data => setChallenges(data.data) });

  const getChallenge = challengePath => {
    api.useGetChallenge({
      variables: { challengePath },

      onSuccess: data => setChallenge(data.data)
    });
  };

  return (
    <ChallengeContext.Provider
      value={{ challenges, challenge, getChallenges, getChallenge }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
