import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { QuestionContext } from '../../../context';
import { useQuestionDelete } from '../../../hooks/question';
import * as sc from './QuestionDropdown.style';

const QuestionDropdown = props => {
  const { className, setIsEditing, close, questionId, isDropdownOpen } = props;

  const { challengePath } = useParams();

  const navigate = useNavigate();

  const { setQuestions } = useContext(QuestionContext);

  const mutation = useQuestionDelete({
    onSuccess: data => setQuestions(data.data)
  });

  const handleClickEdit = () => {
    setIsEditing(true);

    close();
  };

  const handleClickDelete = () => {
    mutation.mutate({ challengePath, questionId });

    if (navigate.pathname !== '/challenge1') navigate.push(`/${challengePath}`);
  };

  return (
    <sc.Dropdownn
      className={className}
      isDropdownOpen={isDropdownOpen}
      close={close}
    >
      <li>
        <span onClick={handleClickEdit}>Edit Post</span>
      </li>

      <li>
        <span onClick={handleClickDelete}>Remove Post</span>
      </li>
    </sc.Dropdownn>
  );
};

QuestionDropdown.propTypes = {
  className: PropTypes.any,
  close: PropTypes.func,
  isDropdownOpen: PropTypes.any,
  questionId: PropTypes.any,
  setIsEditing: PropTypes.func
};

export default React.memo(QuestionDropdown);
