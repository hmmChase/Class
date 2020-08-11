import styled from 'styled-components';
import { ReactComponent as Answered } from '../../images/answered.svg';

export const Container = styled.li`
  background-color: ${props => props.theme.colors.backgrounds.cards};
  display: grid;
  grid-template-areas:
    'top-left top-mid top-right'
    'body body body'
    'bottom-left bottom-mid bottom-right';
  grid-gap: 1rem;
  padding: 1rem;
`;

export const Author = styled.span`
  font-size: 0.9rem;
  grid-area: top-left;
`;

export const Created = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.terciaryText};
  grid-area: top-mid;
`;

export const Answeredd = styled(Answered)`
  fill: ${props => props.theme.colors.text.secondaryText};
  grid-area: top-right;
  height: 20px;
  justify-self: end;
  width: 20px;
`;

export const Body = styled.p`
  grid-area: body;
  margin: 0;
`;

export const AnswerCount = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  grid-area: bottom-left;
`;

export const CommentCount = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  grid-area: bottom-mid;
`;

export const ViewQuestion = styled.a`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 0.9rem;
  font-weight: 800;
  grid-area: bottom-right;
  justify-self: end;
  text-decoration: none;
`;
