import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/app';
import QuestionDetail from '../QuestionDetail/QuestionDetail';
import Questions from '../Questions/Questions';
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
          <Link to={'/challenge'}>
            <sc.BackBtn>Back</sc.BackBtn>
          </Link>
        )}
      </sc.Heading>

      {currentUser.role === 'STUDENT' && !questionId && <sc.QuestionNeww />}

      {questionId ? <QuestionDetail questionId={questionId} /> : <Questions />}
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
