import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Button from '../../atoms/Button/Button';
import Modal from '../../atoms/Modal/Modal';
import QuestionCreate from '../QuestionCreate/QuestionCreate';
import * as sc from './QuestionNew.style';

const QuestionNew = props => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <sc.Container className={props.className}>
      <Button onClick={toggleModal}>Post a Question</Button>

      {isModalOpen && (
        <Modal close={toggleModal}>
          <QuestionCreate />
        </Modal>
      )}
    </sc.Container>
  );
};

QuestionNew.propTypes = {
  className: PropTypes.string
};

export default QuestionNew;
