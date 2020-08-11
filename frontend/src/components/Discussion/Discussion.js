import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as sc from './Discussion.style';

const Discussion = props => {
  const { questionId } = useParams();

  return (
    <sc.Container className={props.className}>
      <sc.Flexed>
        <sc.Label>DISCUSSION</sc.Label>

        <sc.Title>Ask a Question</sc.Title>

        {questionId && (
          <Link to={'/challenge'}>
            <sc.BackBtn>Back</sc.BackBtn>
          </Link>
        )}

        {!questionId && <sc.QuestionNeww />}
      </sc.Flexed>

      {questionId ? (
        <sc.QuestionDetaill questionId={questionId} />
      ) : (
        <sc.Questionss />
      )}
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
