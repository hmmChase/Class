import React from 'react';
import * as sc from './Main.style';

const Main = props => {
  return (
    <sc.Container>
      {props.user.role === 'TEACHER' && <sc.SubmissionVieww />}

      <sc.Challengee user={props.user} />

      {props.user.role === 'STUDENT' && <sc.SubmissionSubmitt />}

      <sc.Discussionn user={props.user} />
    </sc.Container>
  );
};

export default Main;
