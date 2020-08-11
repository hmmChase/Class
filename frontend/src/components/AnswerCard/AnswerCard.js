import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './AnswerCard.style';

const AnswerCard = props => (
  <sc.Container>
    <sc.Author>{props.authorName}</sc.Author>

    <sc.Created>{props.createdAt}</sc.Created>

    <sc.Body>{props.body}</sc.Body>
  </sc.Container>
);

AnswerCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
  // isAnswer: PropTypes.bool.isRequired
};

export default React.memo(AnswerCard);
