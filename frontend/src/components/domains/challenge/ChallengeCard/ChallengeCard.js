import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../../reuseable/Button/Button';
import * as sc from './ChallengeCard.style';

const ChallengeCard = props => {
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

ChallengeCard.propTypes = {
  className: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string
};

export default React.memo(ChallengeCard);
