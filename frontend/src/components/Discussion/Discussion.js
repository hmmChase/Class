import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../api/useFetch';
import * as sc from './Discussion.style';

const Discussion = props => {
  const [questions, setQuestions] = useState([]);

  const [getData, { loading, error }] = useFetch('/questions');

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (!loading && !error && data) setQuestions(data);
    })();
  }, []);

  return (
    <sc.Container className={props.className}>
      <sc.Flexed>
        <div>
          <sc.Label>DISCUSSION</sc.Label>

          <sc.Title>Ask a Question</sc.Title>
        </div>

        <sc.QuestionBtnn />
      </sc.Flexed>

      <sc.Questionss questions={questions} />

      {/* <sc.QuestionDetail questions={questions} /> */}
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
