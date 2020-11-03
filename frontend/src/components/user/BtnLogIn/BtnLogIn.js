import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalLogin from '../ModalLogin/ModalLogin';
import * as sc from './BtnLogIn.style';

const BtnLogIn = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <ModalLogin close={() => setModalOpen(false)} />}

      <sc.Buttonn onClick={() => setModalOpen(true)}>Log In</sc.Buttonn>
    </>
  );
};

BtnLogIn.propTypes = {
  className: PropTypes.string
};

export default React.memo(BtnLogIn);
