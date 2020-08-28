import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as sc from './ChallengeListCard.style';

const challengeListCard = props => {
  return (
    <sc.Container className={props.className}>
      <Link to={`/${props.path}`}>
        <sc.Title>{props.title}</sc.Title>

        <sc.Desc>{props.desc}</sc.Desc>
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
