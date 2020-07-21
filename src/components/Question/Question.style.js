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
  grid-template-columns: min-content;
  padding: 1rem;

  /* margin: 0.4rem; */
`;

export const Author = styled.span`
  grid-area: top-left;
`;

export const Created = styled.span`
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
`;

export const AnswerCount = styled.span`
  grid-area: bottom-left;
`;

export const CommentCount = styled.span`
  grid-area: bottom-mid;
`;

export const ViewThread = styled.a`
  color: ${props => props.theme.colors.buttons.actionButton};
  grid-area: bottom-right;
  justify-self: end;
`;
