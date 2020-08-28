import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import useFetch from '../../api/useFetch';
import * as sc from './Challenge.style';

const Challenge = props => {
  const [challenge, setChallenge] = useState({});
  const { challengePath } = useParams();

  const [getData, { loading, error }] = useFetch(`/challenge/${challengePath}`);

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (!loading && !error && data) setChallenge(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <sc.Container className={props.className}>
      <>
        <sc.Label>CHALLENGE</sc.Label>

        <sc.Title>{challenge.title}</sc.Title>

        <sc.Video>
          <iframe
            title='challenge'
            src={challenge.videoUrl}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
          />
        </sc.Video>

        <sc.Desc>{challenge.desc}</sc.Desc>
      </>
    </sc.Container>
  );
};

Challenge.propTypes = {
  className: PropTypes.string
};

export default Challenge;
