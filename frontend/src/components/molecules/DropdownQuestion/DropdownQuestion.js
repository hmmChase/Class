import React from 'react';
// import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import * as sc from './DropdownQuestion.style';

const DropdownQuestion = props => {
  const { challengePath } = useParams();
  const history = useHistory();

  const onClick = async () => {
    await props.handleDeleteQuestion(props.questionId);

    history.push(`/${challengePath}`);
  };

  return (
    <sc.Container className={props.className}>
      <Dropdown close={props.close}>
        <sc.Li>
          <sc.Span onClick={onClick}>Remove Post</sc.Span>
        </sc.Li>
      </Dropdown>
    </sc.Container>
  );
};

// DropdownQuestion.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownQuestion);
