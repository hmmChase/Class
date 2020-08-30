import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../atoms/Modal/Modal';
import SignOn from '../SignOn/SignOn';
import * as sc from './BtnLogIn.style';

const BtnLogIn = props => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <>
      <sc.Buttonn onClick={toggleModal}>Log In</sc.Buttonn>
      {isModalOpen && (
        <Modal close={toggleModal}>
          <SignOn />
        </Modal>
      )}
    </>
  );
};

BtnLogIn.propTypes = {
  className: PropTypes.string
};

export default React.memo(BtnLogIn);
