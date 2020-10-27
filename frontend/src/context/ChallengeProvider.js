import React, { useState } from 'react';
import { ChallengeContext } from './contexts';
import * as api from '../api/challengeApi';

const ChallengeProvider = props => {
  const [challenges, setChallenges] = useState([]);

  const getChallenges = () =>
    api.useGetChallenges({ onSuccess: data => setChallenges(data.data) });

  return (
    <ChallengeContext.Provider value={{ challenges, getChallenges }}>
      {props.children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
