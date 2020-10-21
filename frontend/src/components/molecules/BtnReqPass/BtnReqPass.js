import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CurrentUser } from '../../../context/contexts';
import Button from '../../atoms/Button/Button';
import * as sc from './BtnReqPass.style';

const BtnReqPass = props => {
  const { resetPassReq } = useContext(CurrentUser);

  const handleClick = async e => {
    e.preventDefault();

    try {
      await resetPassReq({ email: props.email });
    } catch (error) {
      // console.log('resetPassReq error: ', error);
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
