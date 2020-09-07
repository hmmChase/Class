import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../context/app';
import * as sc from './AnswerCard.style';

const AnswerCard = props => {
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container className={props.className}>
      <sc.Answeredd />

      <sc.Flex>
        <div>
          <sc.Author>{props.authorName}</sc.Author>

          <sc.Timestamp>{props.timestamp}</sc.Timestamp>

          <sc.CreatedAt>{props.createdAt}</sc.CreatedAt>

          <div>hi</div>

          {/* {currentUser.role === 'TEACHER' && (
            <sc.DropdownCommentt
              commentId={props.commentId}
              isAnswer={props.isAnswer}
              handleDeleteComment={props.handleDeleteComment}
            />
          )} */}
        </div>

        <sc.Body>{props.body}</sc.Body>
      </sc.Flex>
    </sc.Container>
  );
};

AnswerCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default React.memo(AnswerCard);
