import styled from 'styled-components';

export const Container = styled.li`
  background-color: ${props => props.theme.colors.backgrounds.cards};
  padding: 1rem;
  /* margin: 0.4rem; */

  display: grid;
  grid-template-areas:
    'top-left top-mid top-right'
    'body body body'
    'bottom-left bottom-mid bottom-right';

  grid-template-columns: min-content;

  grid-gap: 1rem;
`;

export const Author = styled.span`
  grid-area: top-left;
`;

export const Created = styled.span`
  grid-area: top-mid;
`;

export const Answered = styled.span`
  grid-area: top-right;
  justify-self: end;
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
  grid-area: bottom-right;
  color: ${props => props.theme.colors.buttons.actionButton};
  justify-self: end;
`;
