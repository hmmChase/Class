import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './QuestionCardDetail.style';

const QuestionCardDetail = props => {
  // console.log('props:', props);

  return (
    <sc.Container>
      <sc.Author>{props.authorName}</sc.Author>

      <sc.Created>{props.createdAt}</sc.Created>

      {/* {props.isAnswer && <sc.Answeredd />} */}

      <sc.Body>{props.body}</sc.Body>
    </sc.Container>
  );
};

QuestionCardDetail.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
  // isAnswer: PropTypes.bool.isRequired
};

export default React.memo(QuestionCardDetail);
