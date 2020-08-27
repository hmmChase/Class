import styled from 'styled-components';
import Challenge from '../Challenge/Challenge';
import SubmissionSubmit from '../SubmissionSubmit/SubmissionSubmit';
import SubmissionView from '../SubmissionView/SubmissionView';
import Discussion from '../Discussion/Discussion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  max-height: 800px;

  @media screen and (min-width: 500px) {
    padding-bottom: 0;
  }

  @media screen and (min-width: 1000px) {
    display: grid;
    gap: 0.7rem;
    grid-template-areas:
      'left-top right'
      'left-bottom right';
    grid-template-columns: 1fr 1fr;
  }
`;

export const Challengee = styled(Challenge)`
  @media screen and (min-width: 500px) {
    border-radius: 10px;
  }
`;

export const SubmissionSubmitt = styled(SubmissionSubmit)`
  grid-area: left-bottom;

  @media screen and (min-width: 500px) {
    border-radius: 10px;
  }
`;

export const SubmissionVieww = styled(SubmissionView)`
  grid-area: left-top;

  @media screen and (min-width: 500px) {
    border-radius: 10px;
  }
`;

export const Discussionn = styled(Discussion)`
  grid-area: right;

  @media screen and (min-width: 500px) {
    border-radius: 10px;
  }
`;
