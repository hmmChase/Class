import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ChallengeListCard from '../ChallengeListCard/ChallengeListCard';
import useFetch from '../../../api/useFetch';
import Title from '../../atoms/Title/Title';
import * as sc from './ChallengeList.style';

const ChallengeList = props => {
  const [challenges, setChallenges] = useState([]);

  const [getData, { loading, error }] = useFetch('/challenges');

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (!loading && !error && data) setChallenges(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const challengeListCards = challenges.map(challenge => (
    <ChallengeListCard
      key={challenge.id}
      // id={challenge.id}
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

// ChallengeList.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(ChallengeList);
