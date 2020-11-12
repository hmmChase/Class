import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../REUSEABLE/Modal/Modal';
import Button from '../../REUSEABLE/Button/Button';
import ProjectSubmitted from '../ProjectSubmitted/ProjectSubmitted';
import * as sc from './ProjectNew.style';

const ProjectNew = props => {
  const [isSubmitted, setSubmitted] = useState(false);

  const [isModalOpen, toggleModal] = useModal();

  return (
    <sc.Container className={props.className}>
      <Button onClick={toggleModal}>Submit Project</Button>

      {isModalOpen && (
        <Modal close={toggleModal}>
          {isSubmitted ? (
            <ProjectSubmitted />
          ) : (
            <sc.ProjectCreatee
              close={toggleModal}
              setIsSubmitted={setSubmitted}
              setSubmittedDate={props.setSubmittedDate}
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
