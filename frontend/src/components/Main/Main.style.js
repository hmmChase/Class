import styled from 'styled-components';
import Challenge from '../Challenge/Challenge';
import Submission from '../Submission/Submission';
import Discussion from '../Discussion/Discussion';

export const Container = styled.div`
  display: grid;
  gap: 0.7rem;
  grid-template-areas:
    'challenge'
    'submission'
    'discussion';

  padding-bottom: 2rem;

  @media screen and (min-width: 500px) {
    padding-bottom: 0;
  }

  @media screen and (min-width: 1000px) {
    grid-template-areas:
      'challenge discussion'
      'submission discussion';
    grid-template-columns: 1fr 1fr;
  }
`;

export const Challengee = styled(Challenge)`
  grid-area: challenge;

  @media screen and (min-width: 500px) {
    border-radius: 10px;
  }
`;

export const Submissionn = styled(Submission)`
  grid-area: submission;

  @media screen and (min-width: 500px) {
    border-radius: 10px;
  }
`;

export const Discussionn = styled(Discussion)`
  grid-area: discussion;

  @media screen and (min-width: 500px) {
    border-radius: 10px;
  }
`;
