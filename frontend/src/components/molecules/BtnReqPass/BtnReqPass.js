import React from 'react';
// import PropTypes from 'prop-types';
import { useResetPassRequest } from '../../../api/userApi';
import Button from '../../atoms/Button/Button';
import * as sc from './BtnReqPass.style';

const BtnReqPass = props => {
  const [resetPassReq] = useResetPassRequest();

  const handleClick = async e => {
    e.preventDefault();

    try {
      await resetPassReq({ email: props.email });
    } catch (error) {
      // console.log('LoginEmail error: ', error);
    }
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
