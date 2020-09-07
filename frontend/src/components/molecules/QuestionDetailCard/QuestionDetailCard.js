import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateTime';
import * as sc from './QuestionDetailCard.style';

const QuestionDetailCard = props => {
  return (
    <sc.Container>
      <sc.Author>{props.question.author.username}</sc.Author>

      <sc.Created>{formatDate(props.question.createdAt)}</sc.Created>

      <sc.Title>{props.question.title}</sc.Title>

      <sc.Body>{props.question.body}</sc.Body>
    </sc.Container>
  );
};

QuestionDetailCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
};

export default React.memo(QuestionDetailCard);
