import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../api/useFetch';

import * as sc from './Challenge.style';

const Challenge = props => {
  const [challenge, setChallenge] = useState([]);
  const [getData, { loading, error }] = useFetch('/challenges');

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (!loading && !error && data) setChallenge(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <sc.Container className={props.className}>
      {challenge.length > 0 && (
        <>
          <sc.Label>CHALLENGE #1</sc.Label>

          <sc.Title>{challenge[0].title}</sc.Title>

          <sc.Video>
            <iframe
              title='challenge'
              src={challenge[0].videoUrl}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
            />
          </sc.Video>

          <sc.Desc>{challenge[0].body}</sc.Desc>
        </>
      )}
    </sc.Container>
  );
};

Challenge.propTypes = {
  className: PropTypes.string
};

export default React.memo(Challenge);
