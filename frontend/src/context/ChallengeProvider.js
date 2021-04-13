import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChallengeContext } from './';

const ChallengeProvider = props => {
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState([]);

  return (
    <ChallengeContext.Provider
      value={{ challenges, setChallenges, challenge, setChallenge }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};

ChallengeProvider.propTypes = {
  children: PropTypes.any
};

export default ChallengeProvider;
