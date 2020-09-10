import styled from 'styled-components';
import Challenge from '../Challenge/Challenge';
import SubmissionSubmit from '../SubmissionSubmit/SubmissionSubmit';
import SubmissionView from '../SubmissionView/SubmissionView';
import Discussion from '../Discussion/Discussion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 800px) {
    flex: 1;
  }
`;

export const Challengee = styled(Challenge)`
  @media screen and (min-width: 800px) {
    border-radius: 10px;
  }
`;

export const SubmissionSubmitt = styled(SubmissionSubmit)`
  @media screen and (min-width: 800px) {
    border-radius: 10px;
  }
`;

export const SubmissionVieww = styled(SubmissionView)`
  @media screen and (min-width: 800px) {
    border-radius: 10px;
  }
`;

export const Discussionn = styled(Discussion)`
  @media screen and (min-width: 800px) {
    border-radius: 10px;
    flex: 1;
  }
`;