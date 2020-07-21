import React from 'react';
// import PropTypes from 'prop-types';
import Question from '../Question/Question';
import * as sc from './Questions.style';

// section.questions
// - h2
// - button.submit.question
//   * onClick
//     * display post-question modal
// - ul.questions
//   - li.question
//     - span.author-name
//     - span.date-created
//     * if teacher commented
//       - img.answered
//     - p.question-title
//     * if teacher commented
//       - span.answer-count
//     * if has comments
//       - span.comment-count
//     - a.view-thread
//       * onClick
//         * display question-detail view

const mockQuestions = [
  {
    author: 'Jay Koontz',
    createdAt: '26/26/2020',
    body:
      'When I open my editor, I get alot of errors about not closing my parenthesis.  What should I do?',
    answerCount: 2,
    commentCount: 12
  },
  {
    author: 'Jay Koontz',
    createdAt: '26/26/2020',
    body:
      'When I open my editor, I get alot of errors about not closing my parenthesis.  What should I do?',
    answerCount: 2,
    commentCount: 12
  },
  {
    author: 'Jay Koontz',
    createdAt: '26/26/2020',
    body:
      'When I open my editor, I get alot of errors about not closing my parenthesis.  What should I do?',
    answerCount: 2,
    commentCount: 12
  },
  {
    author: 'Jay Koontz',
    createdAt: '26/26/2020',
    body:
      'When I open my editor, I get alot of errors about not closing my parenthesis.  What should I do?',
    answerCount: 2,
    commentCount: 12
  }
];

const Questions = props => (
  <sc.Container>
    {mockQuestions.map((question, i) => (
      <Question
        key={i}
        author={question.author}
        createdAt={question.createdAt}
        body={question.body}
        answerCount={question.answerCount}
        commentCount={question.commentCount}
      />
    ))}
  </sc.Container>
);

// Questions.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Questions);
