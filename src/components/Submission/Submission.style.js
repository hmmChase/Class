import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  margin: 1rem 0;
  padding: 1.5rem 1.2rem;

  > p {
    color: ${props => props.theme.colors.text.secondaryText};
  }
`;

export const Label = styled.p`
  font-size: clamp(0.8rem, 2.4vw, 1.2rem);
  margin: 0 0 0.2rem 0;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: clamp(1.2rem, 4vw, 2rem);
  margin: 0 0 0.5rem 0;
`;

export const Desc = styled.p`
  font-size: clamp(0.8rem, 2.4vw, 1.2rem);
  line-height: 1.3;
  margin: 0.1rem 0 1rem 0;
`;
