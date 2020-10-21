import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../../utils/dateTime';
import * as sc from './Questions.style';

const Questions = props => {
  const { challengePath } = useParams();

  const [getQuestions, loading, error] = useFetch(
    `/question/challenge/${challengePath}`
  );

  const [updateQuestion] = useFetch('/question/update');

  const [deleteQuestion] = useFetch('/question/delete-soft');

  const handleUpdateQuestion = async (id, title, body) => {
    const updatedComments = await updateQuestion({
      id,
      title,
      body,
      challengePath
    });

    props.setQuestions(updatedComments);
  };

  const handleDeleteQuestion = async questionId => {
    await deleteQuestion({ questionId });

    const filteredQuestions = props.questions.filter(
      question => question.id !== questionId
    );

    props.setQuestions(filteredQuestions);
  };

  useEffect(() => {
    (async () => {
      const gotQuestions = await getQuestions();

      if (!loading && !error && gotQuestions) props.setQuestions(gotQuestions);
    })();
    // eslint-disable-next-line
  }, []);

  const questionCards = props.questions.map(question => {
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
        {props.questions.length > 0 && questionCards}
      </sc.QuestionsList>
    </sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default Questions;
