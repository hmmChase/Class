import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../atoms/Modal/Modal';
import Button from '../../atoms/Button/Button';
import * as sc from './ProjectNew.style';

const ProjectNew = props => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, toggleModal] = useModal();

  return (
    <sc.Container className={props.className}>
      <Button onClick={toggleModal}>Submit Project</Button>

      {isModalOpen && (
        <Modal close={toggleModal}>
          {isSubmitted ? (
            <p>submitted</p>
          ) : (
            <sc.ProjectCreatee
              close={toggleModal}
              setIsSubmitted={setIsSubmitted}
            />
          )}
        </Modal>
      )}
    </sc.Container>
  );
};

ProjectNew.propTypes = {
  className: PropTypes.string
};

export default ProjectNew;
