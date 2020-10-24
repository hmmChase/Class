import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../../utils/dateTime';
import { QuestionsContext } from '../../../context/contexts';
import * as sc from './Questions.style';

const Questions = props => {
  const { questions, setQuestions, getQuestions } = useContext(
    QuestionsContext
  );

  const { challengePath } = useParams();

  getQuestions(challengePath);

  const [updateQuestion] = useFetch('/question/update');

  const [deleteQuestion] = useFetch('/question/delete-soft');

  const handleUpdateQuestion = async (id, title, body) => {
    const updatedComments = await updateQuestion({
      id,
      title,
      body,
      challengePath
    });

    setQuestions(updatedComments);
  };

  const handleDeleteQuestion = async questionId => {
    await deleteQuestion({ questionId });

    const filteredQuestions = questions.filter(
      question => question.id !== questionId
    );

    setQuestions(filteredQuestions);
  };

  const questionCards = questions.map(question => {
    const answerCount = question.comments.reduce((total, comment) => {
      if (comment.isAnswer) total++;

      return total;
    }, 0);

    const commentCount = question.comments.reduce((total, comment) => {
      if (!comment.isAnswer) total++;

      return total;
    }, 0);

    return (
      <sc.QuestionCardd
        key={question.id}
        questionId={question.id}
        createdAt={formatDate(question.createdAt)}
        authorId={question.author.id}
        authorName={question.author.username}
        title={question.title}
        body={question.body}
        commentCount={commentCount}
        answerCount={answerCount}
        isAnswered={!!answerCount}
        handleUpdateQuestion={handleUpdateQuestion}
        handleDeleteQuestion={handleDeleteQuestion}
      />
    );
  });

  return (
    <sc.Container className={props.className}>
      <sc.QuestionsList>
        {questions.length > 0 && questionCards}
      </sc.QuestionsList>
    </sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default Questions;
