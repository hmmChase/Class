import React from 'react';
// import PropTypes from 'prop-types';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import * as sc from './DropdownComment.style';

const DropdownComment = props => {
  return (
    <sc.Container className={props.className}>
      <Dropdown>
        <sc.Li>
          {props.isAnswer ? (
            <sc.Span onClick={() => props.demoteAnswer(props.commentId)}>
              Demote from Answer
            </sc.Span>
          ) : (
            <sc.Span onClick={() => props.promoteAnswer(props.commentId)}>
              Promote as Answer
            </sc.Span>
          )}
        </sc.Li>

        <sc.Li>
          <sc.Span
            onClick={() => props.handleDeleteComment(props.commentId)}
            commentId={props.commentId}
            handleDeleteComment={props.handleDeleteComment}
          >
            Remove Post
          </sc.Span>
        </sc.Li>
      </Dropdown>
    </sc.Container>
  );
};

// DropdownComment.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownComment);
