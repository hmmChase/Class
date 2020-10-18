import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ChallengeListCard from '../ChallengeListCard/ChallengeListCard';
import Title from '../../atoms/Title/Title';
import { useChallenges } from '../../../api/challengeApi';

import * as sc from './ChallengeList.style';

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);

  const { data } = useChallenges();

  useEffect(() => {
    if (data && data.data && data.data.length) setChallenges(data.data);
  }, [data]);

  const challengeListCards = challenges.map(challenge => (
    <ChallengeListCard
      key={challenge.id}
      path={challenge.path}
      title={challenge.title}
      desc={challenge.desc}
    />
  ));

  return (
    <sc.Container>
      <Title>Challenges</Title>

      <sc.Ul>{challengeListCards}</sc.Ul>
    </sc.Container>
  );
};

export default React.memo(ChallengeList);
