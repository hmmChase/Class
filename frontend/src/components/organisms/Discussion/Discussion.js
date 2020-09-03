import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AppContext from '../../../context/app';
import QuestionDetail from '../../molecules/QuestionDetail/QuestionDetail';
import Questions from '../../molecules/Questions/Questions';
import Label from '../../atoms/Label/Label';
import * as sc from './Discussion.style';

const Discussion = props => {
  const { currentUser } = useContext(AppContext);
  const { questionId } = useParams();
  const { challengePath } = useParams();

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

        {currentUser.role === 'STUDENT' && !questionId && <sc.QuestionNeww />}
      </sc.Heading>

      {questionId ? <QuestionDetail questionId={questionId} /> : <Questions />}
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
