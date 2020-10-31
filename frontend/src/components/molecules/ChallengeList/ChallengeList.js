import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { ChallengeContext } from '../../../context/contexts';
import ChallengeListCard from '../ChallengeListCard/ChallengeListCard';
import Title from '../../atoms/Title/Title';
import * as sc from './ChallengeList.style';

const ChallengeList = () => {
  const { challenges, getChallenges } = useContext(ChallengeContext);

  getChallenges();

  const challengeListCards = challenges.map(challenge => (
    <ChallengeListCard key={challenge.id} challenge={challenge} />
  ));

  return (
    <sc.Container>
      <Title>Challenges</Title>

      <sc.Ul>
        {challengeListCards &&
          challengeListCards.length > 0 &&
          challengeListCards}
      </sc.Ul>
    </sc.Container>
  );
};

export default React.memo(ChallengeList);
