import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AppContext from '../../../context/app';
import QuestionDetail from '../../molecules/QuestionDetail/QuestionDetail';
import Questions from '../../molecules/Questions/Questions';
import * as sc from './Discussion.style';

const Discussion = props => {
  const { questionId } = useParams();
  console.log('questionId:', questionId);

  const { challengePath } = useParams();
  console.log('challengePath:', challengePath);

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

        {questionId && <sc.BtnBackk />}
      </sc.Heading>
      {currentUser.role === 'STUDENT' && !questionId && <sc.QuestionNeww />}

      {console.log('questionId:', questionId)}

      {questionId ? <QuestionDetail questionId={questionId} /> : <Questions />}
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
