import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.cards};
  padding: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const Author = styled.span`
  font-size: 0.9rem;
`;

export const Created = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.terciaryText};
`;

export const Title = styled.p`
  /* margin: 0; */
`;

export const Body = styled.p`
  margin: 0;
`;
