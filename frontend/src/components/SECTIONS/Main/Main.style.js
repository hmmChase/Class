import styled from 'styled-components';
import Challenge from '../Challenge/Challenge';
import ProjectSubmit from '../../PROJECT/ProjectSubmit/ProjectSubmit';
import ProjectView from '../../PROJECT/ProjectView/ProjectView';
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

export const ProjectSubmitt = styled(ProjectSubmit)`
  @media screen and (min-width: 720px) {
    border-radius: 10px;
  }
`;

export const ProjectVieww = styled(ProjectView)`
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
