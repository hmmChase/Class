import React from 'react';
// import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import * as sc from './DropdownQuestion.style';

const DropdownQuestion = props => {
  const { challengePath } = useParams();
  const history = useHistory();

  const onClick = async () => {
    await props.handleDeleteQuestion(props.questionId);

    if (history.pathname !== '/challenge1') history.push(`/${challengePath}`);
  };

  const handleClickEdit = () => {
    props.setIsEditing(true);

    props.close();
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
        <span onClick={onClick}>Remove Post</span>
      </li>
    </sc.Dropdownn>
  );
};

// DropdownQuestion.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownQuestion);
