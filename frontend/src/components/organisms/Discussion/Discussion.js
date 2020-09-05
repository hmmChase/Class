import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useFetch from '../../../api/useFetch';

import AppContext from '../../../context/app';
import QuestionDetail from '../../molecules/QuestionDetail/QuestionDetail';
import Questions from '../../molecules/Questions/Questions';
import Label from '../../atoms/Label/Label';
import * as sc from './Discussion.style';

const Discussion = props => {
  const [questions, setQuestions] = useState([]);
  const { currentUser } = useContext(AppContext);
  const { challengePath, questionId } = useParams();

  const [getQuestions, loading, error] = useFetch(
    `/question/challenge/${challengePath}`
  );

  const [createQuestion] = useFetch(`/question/create/${challengePath}`);

  const handleCreateQuestion = async (title, body) => {
    const newQuestion = await createQuestion({ title, body });

    const updatedQuestions = [newQuestion, ...questions];

    setQuestions(updatedQuestions);
  };

  useEffect(() => {
    (async () => {
      const gotQuestions = await getQuestions();

      if (!loading && !error && gotQuestions) setQuestions(gotQuestions);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <sc.Container className={props.className}>
      <sc.Heading>
        <Label>DISCUSSION</Label>

        <sc.Title>
          {currentUser.role === 'TEACHER'
            ? 'Challenge Questions'
            : 'Ask a Question'}
        </sc.Title>

        {questionId && <sc.BtnBackk challengePath={challengePath} />}

        {currentUser.role === 'STUDENT' && !questionId && (
          <sc.QuestionNeww handleCreateQuestion={handleCreateQuestion} />
        )}
      </sc.Heading>

      {questionId ? (
        <QuestionDetail questionId={questionId} setQuestions={setQuestions} />
      ) : (
        <Questions questions={questions} />
      )}
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
