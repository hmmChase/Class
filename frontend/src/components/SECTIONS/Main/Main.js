import React, { useContext } from 'react';
import { UserContext } from '../../../context';
import * as sc from './Main.style';

const Main = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <sc.Container>
      <sc.LeftSide>
        {currentUser && currentUser.role === 'TEACHER' && <sc.ProjectVieww />}

        <sc.Challengee />

        {currentUser && currentUser.role === 'STUDENT' && <sc.ProjectSubmitt />}
      </sc.LeftSide>

      <sc.Discussionn />
    </sc.Container>
  );
};

export default Main;
