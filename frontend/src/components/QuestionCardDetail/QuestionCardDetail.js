import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/dateTime';
import * as sc from './QuestionCardDetail.style';

const QuestionCardDetail = props => {
  return (
    <sc.Container>
      <sc.Author>{props.question.author.username}</sc.Author>

      <sc.Created>{formatDate(props.question.createdAt)}</sc.Created>

      <sc.Title>{props.question.title}</sc.Title>

      <sc.Body>{props.question.body}</sc.Body>
    </sc.Container>
  );
};

QuestionCardDetail.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
};

export default React.memo(QuestionCardDetail);
