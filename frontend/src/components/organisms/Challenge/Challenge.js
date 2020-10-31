import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ChallengeContext } from '../../../context/contexts';
import Label from '../../atoms/Label/Label';
import Desc from '../../atoms/Desc/Desc';
import * as sc from './Challenge.style';

const Challenge = props => {
  const { challengePath } = useParams();

  const { challenge, getChallenge } = useContext(ChallengeContext);

  getChallenge(challengePath);

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
