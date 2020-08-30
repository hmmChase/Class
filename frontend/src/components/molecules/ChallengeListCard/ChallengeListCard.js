import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import * as sc from './ChallengeListCard.style';

const challengeListCard = props => {
  return (
    <sc.Container className={props.className}>
      <Link to={`/${props.path}`}>
        <Button>
          <h2>{props.title}</h2>

          <p>{props.desc}</p>
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
