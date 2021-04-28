import React, { useContext } from 'react';
import { ChallengeContext } from '../../../context';
import { useGetChallenges } from '../../../hooks/challenge';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import Title from '../../REUSEABLE/Title/Title';
import * as sc from './Challenges.style';

const Challenges = () => {
  const { challenges, setChallenges } = useContext(ChallengeContext);

  useGetChallenges({
    onSuccess: async data => {
      const resolvedData = await data;

      setChallenges(resolvedData.data);
    }
  });

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
