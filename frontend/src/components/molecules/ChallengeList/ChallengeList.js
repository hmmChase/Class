import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ChallengeListCard from '../ChallengeListCard/ChallengeListCard';
import useFetch from '../../../api/useFetch';
import Title from '../../atoms/Title/Title';
import * as sc from './ChallengeList.style';

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);

  const [allChallenges] = useFetch('/challenge/all');

  useEffect(() => {
    (async () => {
      const data = await allChallenges();

      if (data) setChallenges(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
