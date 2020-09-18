import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import Label from '../../atoms/Label/Label';
import Desc from '../../atoms/Desc/Desc';
import * as sc from './Challenge.style';

const Challenge = props => {
  const [challenge, setChallenge] = useState({});
  const { challengePath } = useParams();

  const [getChallenge, loading, error] = useFetch(
    `/challenge/path/${challengePath}`
  );

  useEffect(() => {
    (async () => {
      const challengeData = await getChallenge();

      if (!loading && !error && challengeData) setChallenge(challengeData);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <sc.Container className={props.className}>
      <Label>CHALLENGE</Label>

      <sc.Titlee>{challenge.title}</sc.Titlee>

      <sc.Video>
        <iframe
          title='challenge'
          src={challenge.videoUrl}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      </sc.Video>

      <Desc>{challenge.desc}</Desc>
    </sc.Container>
  );
};

Challenge.propTypes = {
  className: PropTypes.string
};

export default Challenge;
