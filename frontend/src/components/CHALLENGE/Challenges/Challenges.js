import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { ChallengeContext } from '../../../context/contexts';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import Title from '../../REUSEABLE/Title/Title';
import * as sc from './Challenges.style';
import { useGetChallenges } from '../../../hooks/useGetChallenges';

const Challenges = () => {
  const { challenges, setChallenges } = useContext(ChallengeContext);

  const { status, error, isLoading, isFetching } = useGetChallenges(
    setChallenges
  );

  const ChallengeCards = challenges.map(challenge => (
    <ChallengeCard key={challenge.id} challenge={challenge} />
  ));

  return (
    <sc.Container>
      <Title>Challenges</Title>

      <sc.Ul>
        {ChallengeCards && ChallengeCards.length > 0 && ChallengeCards}
      </sc.Ul>
    </sc.Container>
  );
};

export default React.memo(Challenges);
