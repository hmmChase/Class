import styled from 'styled-components';

export const Container = styled.li`
  display: grid;
  grid-template-areas:
    'top-left top-mid top-right'
    'body body body'
    'bottom-left bottom-mid bottom-right';
  grid-gap: 1rem;
  padding: 1rem;
`;

export const Author = styled.span`
  color: ${props => props.theme.colors.text.primaryText};
  font-size: 0.9rem;
  grid-area: top-left;
`;

export const Created = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.terciaryText};
  grid-area: top-mid;
`;

export const Body = styled.p`
  color: ${props => props.theme.colors.text.secondaryText};
  grid-area: body;
  margin: 0;
`;
