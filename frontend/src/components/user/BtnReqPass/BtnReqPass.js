import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CurrentUserContext } from '../../../context/contexts';
import Button from '../../reuseable/Button/Button';
import * as sc from './BtnReqPass.style';

const BtnReqPass = props => {
  const { resetPassReq } = useContext(CurrentUserContext);

  const handleClick = e => {
    e.preventDefault();

    resetPassReq({ email: props.email });

    props.setIsSubmitted(true);
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
