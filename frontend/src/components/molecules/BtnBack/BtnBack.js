import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import * as sc from './BtnBack.style';

const BtnBack = props => {
  const { challengePath } = useParams();

  return (
    <Link className={props.className} to={`/${challengePath}`}>
      <sc.Buttonn>Back</sc.Buttonn>
    </Link>
  );
};

BtnBack.propTypes = {
  className: PropTypes.string
};

export default React.memo(BtnBack);
