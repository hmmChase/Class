import styled from 'styled-components';
import Challenge from '../Challenge/Challenge';
import SubmissionSubmit from '../SubmissionSubmit/SubmissionSubmit';
import SubmissionView from '../SubmissionView/SubmissionView';
import Discussion from '../Discussion/Discussion';

export const Container = styled.div`
  padding-bottom: 2rem;
  /* max-height: 800px; */

  @media screen and (min-width: 600px) {
    /* display: flex; */
    /* flex-direction: column; */
    /* padding-bottom: 0; */
  }

  @media screen and (min-width: 1200px) {
    /* display: grid; */
    /* gap: 0.7rem; */
    /* grid-template-areas:
      'left-top right'
      'left-bottom right';
    grid-template-columns: 1fr 1fr; */

    /* flex-direction: column; */
  }
`;

export const LeftSide = styled.div`
  @media screen and (min-width: 600px) {
    flex: 1;
  }
`;

export const Challengee = styled(Challenge)`
  @media screen and (min-width: 600px) {
    border-radius: 10px;
  }
`;

export const SubmissionSubmitt = styled(SubmissionSubmit)`
  /* grid-area: left-bottom; */

  @media screen and (min-width: 600px) {
    border-radius: 10px;
  }
`;

export const SubmissionVieww = styled(SubmissionView)`
  /* grid-area: left-top; */

  @media screen and (min-width: 600px) {
    border-radius: 10px;
  }
`;

export const Discussionn = styled(Discussion)`
  /* grid-area: right; */

  @media screen and (min-width: 600px) {
    border-radius: 10px;
    flex: 1;
  }
`;
