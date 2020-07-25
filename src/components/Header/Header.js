import React from 'react';
import useModal from '../../utils/useModal';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import * as sc from './Header.style';

const Header = () => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <sc.Container>
      <sc.KnightIcon />

      <sc.Title>challenge board</sc.Title>

      <sc.UserIcon onClick={toggleModal} />

      {isModalOpen && (
        <Modal close={toggleModal}>
          <Login />
        </Modal>
      )}
    </sc.Container>
  );
};

export default Header;
