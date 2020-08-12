import styled from 'styled-components';

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

export const Body = styled.p`
  grid-area: body;
  margin: 0;
`;
