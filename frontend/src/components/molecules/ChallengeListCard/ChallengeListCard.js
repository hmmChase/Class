import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import * as sc from './ChallengeListCard.style';

const challengeListCard = props => {
  const { challenge } = props;

  return (
    <sc.Container className={props.className}>
      <Link to={`/${challenge.path}`}>
        <Button>
          <h2>{challenge.title}</h2>

          <p>{challenge.desc}</p>
        </Button>
      </Link>
    </sc.Container>
  );
};

challengeListCard.propTypes = {
  className: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string
};

export default React.memo(challengeListCard);
