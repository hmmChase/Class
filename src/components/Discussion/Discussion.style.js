import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  padding: 1rem;

  > p {
    color: ${props => props.theme.colors.text.secondaryText};
  }
`;

export const Label = styled.p`
  margin: 0;
`;

export const Title = styled.h3`
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 0.1rem 0 1rem 0;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.buttons.actionButton};
`;
