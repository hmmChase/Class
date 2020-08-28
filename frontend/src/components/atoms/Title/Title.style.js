import styled from 'styled-components';

export const H3 = styled.h3`
  color: ${props => props.theme.colors.buttons.primaryText};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  margin: 0 0 1rem 0;
`;
