import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CurrentUserContext } from '../../../context/contexts';
import Button from '../../atoms/Button/Button';
import * as sc from './BtnReqPass.style';

const BtnReqPass = props => {
  const { resetPassReq } = useContext(CurrentUserContext);

  const handleClick = async e => {
    e.preventDefault();

    await resetPassReq({ email: props.email });
  };

  return (
    <sc.Container>
      <Button onClick={handleClick}>Request Password Reset</Button>
    </sc.Container>
  );
};

// BtnReqPass.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(BtnReqPass);
