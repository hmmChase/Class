import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.buttons.actionButton};
  border-radius: 6px;
  border: none;
  color: ${props => props.theme.colors.text.primaryText};
  padding: 0.6rem 1rem;
`;
