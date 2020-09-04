import React from 'react';
import PropTypes from 'prop-types';
// import useFetch from '../../../api/useFetch';
import { formatDate } from '../../../utils/dateTime';
import * as sc from './Questions.style';

const Questions = props => {
  console.log('props:', props);

  // const [questions, setQuestions] = useState([]);

  // const [getData, { loading, error }] = useFetch(
  //   `/question/challenge/${challengePath}`
  // );

  // useEffect(() => {
  //   (async () => {
  //     const data = await getData();

  //     console.log('data:', data);

  //     if (!loading && !error && data) setQuestions(data);
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const questionCards = props.questions.map(question => {
    const answerCount = question.comments.reduce((total, comment) => {
      if (comment.isAnswer) total++;

      return total;
    }, 0);

    return (
      <sc.QuestionCardd
        key={question.id}
        questionId={question.id}
        createdAt={formatDate(question.createdAt)}
        authorName={question.author.username}
        body={question.body}
        commentCount={question.comments.length}
        answerCount={answerCount}
        isAnswered={!!answerCount}
      />
    );
  });

  return (
    <sc.Container className={props.className}>
      {/* <sc.Relative> */}
      {/* <sc.Absolute> */}
      <sc.QuestionsList>
        {props.questions.length && questionCards}
      </sc.QuestionsList>
      {/* </sc.Absolute> */}
      {/* </sc.Relative> */}
    </sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default Questions;
