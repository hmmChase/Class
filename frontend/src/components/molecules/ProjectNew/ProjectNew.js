import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../atoms/Modal/Modal';
import Button from '../../atoms/Button/Button';
import * as sc from './ProjectNew.style';

const ProjectNew = props => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <sc.Container className={props.className}>
      <Button onClick={toggleModal}>Submit Project</Button>

      {isModalOpen && (
        <Modal close={toggleModal}>
          <sc.ProjectCreatee close={toggleModal} />
        </Modal>
      )}
    </sc.Container>
  );
};

ProjectNew.propTypes = {
  className: PropTypes.string
};

export default ProjectNew;
