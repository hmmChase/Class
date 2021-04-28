import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import * as sc from './BtnBack.style';

const BtnBack = props => {
  const { className } = props;

  const { challengePath } = useParams();

  return (
    <sc.Linkk className={className} to={`/${challengePath}`}>
      <sc.Buttonn>Back</sc.Buttonn>
    </sc.Linkk>
  );
};

BtnBack.propTypes = {
  className: PropTypes.string
};

export default React.memo(BtnBack);
