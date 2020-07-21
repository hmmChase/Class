import React from 'react';
// import PropTypes from 'prop-types';
import Question from '../Question/Question';
import * as sc from './Questions.style';

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
  <sc.Container className={props.className}>
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
