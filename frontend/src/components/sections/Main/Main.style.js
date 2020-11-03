import styled from 'styled-components';
import Challenge from '../Challenge/Challenge';
import SubmissionSubmit from '../../project/SubmissionSubmit/SubmissionSubmit';
import SubmissionView from '../../project/SubmissionView/SubmissionView';
import Discussion from '../Discussion/Discussion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 720px) {
    flex: 1;
    height: fit-content;
  }
`;

export const Challengee = styled(Challenge)`
  @media screen and (min-width: 720px) {
    border-radius: 10px;
  }
`;

export const SubmissionSubmitt = styled(SubmissionSubmit)`
  @media screen and (min-width: 720px) {
    border-radius: 10px;
  }
`;

export const SubmissionVieww = styled(SubmissionView)`
  @media screen and (min-width: 720px) {
    border-radius: 10px;
  }
`;

export const Discussionn = styled(Discussion)`
  @media screen and (min-width: 720px) {
    border-radius: 10px;
    flex: 1;
    height: 100%;
  }
`;
