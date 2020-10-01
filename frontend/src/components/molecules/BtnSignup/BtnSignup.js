import React, { useState } from 'react';
import ModalSignup from '../ModalSignup/ModalSignup';
import * as sc from './BtnSignup.style';

const BtnSignup = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <ModalSignup close={() => setModalOpen(false)} />}

      <sc.Buttonn onClick={() => setModalOpen(true)}>Sign Up</sc.Buttonn>
    </>
  );
};

export default React.memo(BtnSignup);
