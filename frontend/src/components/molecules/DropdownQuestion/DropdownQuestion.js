import React from 'react';
// import PropTypes from 'prop-types';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import * as sc from './DropdownQuestion.style';

const DropdownQuestion = props => (
  <sc.Container className={props.className}>
    <Dropdown>
      <sc.Span onClick={() => props.handleDeleteQuestion(props.questionId)}>
        Remove Post
      </sc.Span>
    </Dropdown>
  </sc.Container>
);

// DropdownQuestion.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownQuestion);
