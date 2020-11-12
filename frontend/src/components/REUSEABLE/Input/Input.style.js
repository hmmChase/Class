import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${props => props.theme.colors.backgrounds.features};
  border-radius: 5px;
  border: none;
  color: ${props => props.theme.colors.text.secondaryText};
  margin-bottom: 0.5rem;
  /* min-width: 500px; */
  outline: none;
  padding: 0.5rem;
`;
