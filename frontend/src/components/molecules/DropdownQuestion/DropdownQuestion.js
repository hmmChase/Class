import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { QuestionContext } from '../../../context/contexts';
import * as sc from './DropdownQuestion.style';

const DropdownQuestion = props => {
  const { challengePath } = useParams();

  const { deleteQuestion } = useContext(QuestionContext);

  const history = useHistory();

  const handleClickEdit = () => {
    props.setIsEditing(true);

    props.close();
  };

  const handleClickDelete = () => {
    deleteQuestion(props.questionId);

    if (history.pathname !== '/challenge1') history.push(`/${challengePath}`);
  };

  return (
    <sc.Dropdownn
      className={props.className}
      isDropdownOpen={props.isDropdownOpen}
      close={props.close}
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

// DropdownQuestion.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownQuestion);
