import React, { useContext } from 'react';
import { CurrentUserContext } from '../../../context/contexts';
import * as sc from './Main.style';

const Main = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <sc.Container>
      <sc.LeftSide>
        {currentUser && currentUser.role === 'TEACHER' && (
          <sc.SubmissionVieww />
        )}

        <sc.Challengee />

        {currentUser && currentUser.role === 'STUDENT' && (
          <sc.SubmissionSubmitt />
        )}
      </sc.LeftSide>

      <sc.Discussionn />
    </sc.Container>
  );
};

export default Main;
