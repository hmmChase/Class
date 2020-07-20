import React from "react";
// import PropTypes from 'prop-types';
import * as sc from "./Question.style";

// - li.question
// - span.author-name
// - span.date-created
// * if teacher commented
//   - img.answered
// - p.question-title
// * if teacher commented
//   - span.answer-count
// * if has comments
//   - span.comment-count
// - a.view-thread
//   * onClick
//     * display question-detail view

const Question = (props) => (
  <sc.Container>
    <sc.Author>{props.author}</sc.Author>

    <sc.Created>{props.createdAt}</sc.Created>

    {props.answerCount && <sc.Answered>answeredsvg</sc.Answered>}

    <sc.Body>{props.body}</sc.Body>

    {props.answerCount && <sc.AnswerCount>{props.answerCount}</sc.AnswerCount>}

    {props.commentCount && (
      <sc.CommentCount>{props.commentCount}</sc.CommentCount>
    )}

    <sc.ViewThread href="">View Thread</sc.ViewThread>
  </sc.Container>
);

// Question.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Question);
