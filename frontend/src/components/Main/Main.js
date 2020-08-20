import React, { useContext } from 'react';
import AppContext from '../../context/app';
import * as sc from './Main.style';

const Main = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container>
      {currentUser && currentUser.role === 'TEACHER' && <sc.SubmissionVieww />}

      <sc.Challengee />

      {currentUser && currentUser.role === 'STUDENT' && (
        <sc.SubmissionSubmitt />
      )}

      <sc.Discussionn />
    </sc.Container>
  );
};

export default Main;
