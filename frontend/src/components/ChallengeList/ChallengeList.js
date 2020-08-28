import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import useFetch from '../../api/useFetch';
import * as sc from './ChallengeList.style';
import ChallengeListCard from '../ChallengeListCard/ChallengeListCard';

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
      <h1>Challenges</h1>

      <ul>{challengeListCards}</ul>
    </sc.Container>
  );
};

// ChallengeList.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(ChallengeList);
