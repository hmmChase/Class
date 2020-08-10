import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from '../QuestionCard/QuestionCard';
import Replies from '../Replies/Replies';
import formatDate from '../../utils/formatDate';
import * as sc from './QuestionDetail.style';

const QuestionDetail = props => {
  return (
    <sc.Container className={props.className}>
      <QuestionCard
        key={props.question.id}
        createdAt={formatDate(props.question.createdAt)}
        authorName={props.question.author.name}
        body={props.question.body}
        answerCount={props.question.answerCount}
        commentCount={props.question.replies.length}
      />

      <Replies replies={props.question.replies} />
    </sc.Container>
  );
};

QuestionDetail.propTypes = {
  className: PropTypes.string
};

export default React.memo(QuestionDetail);
