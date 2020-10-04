import React from 'react';
// import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import * as sc from './DropdownQuestion.style';

const DropdownQuestion = props => {
  const { challengePath } = useParams();
  const history = useHistory();

  const onClick = async () => {
    await props.handleDeleteQuestion(props.questionId);

    history.push(`/${challengePath}`);
  };

  return (
    <sc.Dropdownn
      className={props.className}
      isDropdownOpen={props.isDropdownOpen}
      close={props.close}
    >
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
