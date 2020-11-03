import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../reuseable/Modal/Modal';
import Button from '../../reuseable/Button/Button';
import * as sc from './QuestionNew.style';

const QuestionNew = props => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <sc.Container className={props.className}>
      <Button onClick={toggleModal}>Post a Question</Button>

      {isModalOpen && (
        <Modal close={toggleModal}>
          <sc.QuestionCreatee close={toggleModal} />
        </Modal>
      )}
    </sc.Container>
  );
};

QuestionNew.propTypes = {
  className: PropTypes.string
};

export default QuestionNew;
