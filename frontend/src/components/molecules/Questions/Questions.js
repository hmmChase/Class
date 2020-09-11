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

  const [deleteQuestion] = useFetch('/question/delete-soft');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const questionCards = props.questions.map(question => {
    console.log('question.comments:', question.comments);

    const answerCount = question.comments.reduce((total, comment) => {
      if (comment.isAnswer) total++;

      return total;
    }, 0);

    const commentCount = question.comments.reduce((total, comment) => {
      if (!comment.isAnswer) total++;

      return total;
    }, 0);

    // question.comments.length

    return (
      <sc.QuestionCardd
        key={question.id}
        questionId={question.id}
        createdAt={formatDate(question.createdAt)}
        authorName={question.author.username}
        title={question.title}
        commentCount={commentCount}
        answerCount={answerCount}
        isAnswered={!!answerCount}
        handleDeleteQuestion={handleDeleteQuestion}
      />
    );
  });

  return (
    <sc.Container className={props.className}>
      <sc.Relative>
        <sc.Absolute>
          <sc.QuestionsList>
            {props.questions.length > 0 && questionCards}
          </sc.QuestionsList>
        </sc.Absolute>
      </sc.Relative>
    </sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default Questions;
