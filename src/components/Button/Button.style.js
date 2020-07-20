import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.buttons.actionButton};
  color: ${(props) => props.theme.colors.text.primaryText};
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
`;
