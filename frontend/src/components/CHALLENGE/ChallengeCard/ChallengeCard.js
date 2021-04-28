import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../REUSEABLE/Button/Button';
import * as sc from './ChallengeCard.style';

const ChallengeCard = props => {
  const { className, challenge } = props;

  return (
    <sc.Container className={className}>
      <Link to={`/${challenge.path}`}>
        <Button>
          <h2>{challenge.title}</h2>

          <p>{challenge.desc}</p>
        </Button>
      </Link>
    </sc.Container>
  );
};

ChallengeCard.propTypes = {
  challenge: PropTypes.shape({
    desc: PropTypes.any,
    path: PropTypes.any,
    title: PropTypes.any
  }),
  className: PropTypes.any
};

export default React.memo(ChallengeCard);
