import styled from 'styled-components';
import { ReactComponent as Answered } from '../../../images/answered.svg';
import DropdownEllipsis from '../DropdownQuestion/DropdownQuestion';

export const Container = styled.li`
  background-color: ${props => props.theme.colors.backgrounds.cards};
  padding-left: 1rem;
  border-radius: 0.5rem;
  padding-bottom: 1rem;

  a {
    text-decoration: none;
    margin-left: auto;
  }
`;

export const Row = styled.div`
  display: flex;

  /* :not(:last-child) {
    margin-bottom: 1rem;
  } */
`;

export const Author = styled.span`
  font-size: 0.9rem;
  margin-right: 0.5rem;
  text-align: bottom;
  vertical-align: bottom;
  align-self: flex-end;
`;

export const Created = styled.span`
  font-size: 0.9rem;
  align-self: flex-end;
  color: ${props => props.theme.colors.text.terciaryText};
`;

export const RightSide = styled.div`
  display: flex;
  margin: 0 0 0 auto;
`;

export const Answeredd = styled(Answered)`
  fill: ${props => props.theme.colors.text.secondaryText};
  height: 1rem;
  width: auto;
  align-self: center;
`;

export const DropdownEllipsiss = styled(DropdownEllipsis)`
  margin-left: 1rem;
`;

export const Body = styled.p`
  margin: 0.5rem 0;
`;

export const AnswerCount = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  margin-right: 0.5rem;
`;

export const CommentCount = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
`;

export const ViewQuestion = styled.span`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 0.9rem;
  font-weight: 800;
  margin-right: 1rem;
`;
