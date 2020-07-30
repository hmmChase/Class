import React from 'react';
import useModal from '../../utils/useModal';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Question from '../Question/Question';
import * as sc from './QuestionBtn.style';

const QuestionBtn = () => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <sc.Container>
      <Button onClick={toggleModal}>Post a Question</Button>

      {isModalOpen && (
        <Modal close={toggleModal}>
          <Question />
        </Modal>
      )}
    </sc.Container>
  );
};

export default QuestionBtn;
