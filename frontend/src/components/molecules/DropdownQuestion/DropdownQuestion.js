import React from 'react';
// import PropTypes from 'prop-types';
import useDropdown from '../../../utils/useDropdown';
import useFetch from '../../../api/useFetch';
import * as sc from './DropdownQuestion.style';

const DropdownQuestion = props => {
  const [isDropdownOpen, setDropdownDisplay] = useDropdown();
  const [getData] = useFetch('/question/delete-soft');

  // props.questionId

  const onClick = async e => {
    e.preventDefault();

    await getData({ questionId: props.questionId });
  };

  return (
    <sc.Dropdown className={props.className} onClick={setDropdownDisplay}>
      <sc.Button isDropdownOpen={isDropdownOpen}>...</sc.Button>

      {isDropdownOpen && (
        <sc.Body>
          <sc.P onClick={onClick}>Remove Post</sc.P>
        </sc.Body>
      )}
    </sc.Dropdown>
  );
};

// DropdownQuestion.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownQuestion);
