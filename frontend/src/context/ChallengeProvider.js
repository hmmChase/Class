import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChallengeContext } from './contexts';
import instance from '../api/baseApi';

const ChallengeProvider = props => {
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState([]);


  const getChallenge = async challengePath => {
    const response = await instance.get(`/challenge/path/${challengePath}`);

    setChallenge(response.data);
  };

  return (
    <ChallengeContext.Provider
      value={{ challenges, setChallenges, getChallenge }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};

ChallengeProvider.propTypes = {
  children: PropTypes.any
};

export default ChallengeProvider;
