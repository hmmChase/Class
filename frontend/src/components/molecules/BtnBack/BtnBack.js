import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as sc from './BtnBack.style';

const BtnBack = props => (
  <Link className={props.className} to={`/${props.challengePath}`}>
    <sc.Buttonn>Back</sc.Buttonn>
  </Link>
);

BtnBack.propTypes = {
  challengePath: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default React.memo(BtnBack);
