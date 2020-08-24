import styled from 'styled-components';
import { ReactComponent as Answered } from '../../images/answered.svg';

export const Container = styled.li`
  background-color: ${props => props.theme.colors.backgrounds.cards};
  /* display: grid;
  grid-template-areas:
    'top-left top-mid top-right'
    'body body body'
    'bottom-left bottom-left bottom-right';
  grid-gap: 1rem; */

  padding: 1rem;

  a {
    text-decoration: none;
    margin-left: auto;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Author = styled.span`
  font-size: 0.9rem;
  margin-right: 0.5rem;

  /* grid-area: top-left; */
`;

export const Created = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.terciaryText};

  /* grid-area: top-mid; */
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 auto;
`;

export const Answeredd = styled(Answered)`
  fill: ${props => props.theme.colors.text.secondaryText};
  height: 1rem;
  width: auto;
  align-self: flex-end;

  /* grid-area: top-right; */
`;

export const DotDotDot = styled.div`
  /* margin: 0 0 0 auto; */
  margin-left: 1rem;
`;

export const Body = styled.p``;

export const AnswerCount = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  margin-right: 0.5rem;

  /* grid-area: bottom-left; */
`;

export const CommentCount = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;

  /* grid-area: bottom-left; */
`;

export const ViewQuestion = styled.p`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 0.9rem;
  font-weight: 800;
  margin: 0 0 0 auto;

  /* grid-area: bottom-right; */
`;
