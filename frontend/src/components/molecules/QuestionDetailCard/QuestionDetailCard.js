import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateTime';
import AppContext from '../../../context/app';
import DropdownQuestion from '../DropdownQuestion/DropdownQuestion';
import BodyExpandable from '../../atoms/BodyExpandable/BodyExpandable';
import * as sc from './QuestionDetailCard.style';

const QuestionDetailCard = props => {
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container>
      <sc.Row>
        <sc.Group>
          <sc.Author>{props.question.author.username}</sc.Author>

          <sc.Created>{formatDate(props.question.createdAt)}</sc.Created>
        </sc.Group>

        {currentUser.role === 'TEACHER' && (
          <DropdownQuestion
            questionId={props.questionId}
            handleDeleteQuestion={props.handleDeleteQuestion}
          />
        )}
      </sc.Row>

      <sc.Title>{props.question.title}</sc.Title>

      <BodyExpandable>{props.question.body}</BodyExpandable>
    </sc.Container>
  );
};

QuestionDetailCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
};

export default React.memo(QuestionDetailCard);
