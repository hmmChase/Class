import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/app';
import * as sc from './Discussion.style';

const Discussion = props => {
  const { questionId } = useParams();
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container className={props.className}>
      <sc.Heading>
        <sc.Label>DISCUSSION</sc.Label>

        <sc.Title>
          {currentUser.role === 'TEACHER'
            ? 'Challenge Questions'
            : 'Ask a Question'}
        </sc.Title>

        {questionId && (
          <>
            <Link to={'/challenge'}>
              <sc.BackBtn>Back</sc.BackBtn>
            </Link>
          </>
        )}

        {currentUser.role === 'STUDENT' && !questionId && <sc.QuestionNeww />}
      </sc.Heading>

      {questionId && <sc.QuestionDetaill questionId={questionId} />}

      <sc.Relative>
        <sc.Absolute>
          {questionId ? (
            <sc.Commentss questionId={questionId} />
          ) : (
            <sc.Questionss />
          )}
        </sc.Absolute>
      </sc.Relative>
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
