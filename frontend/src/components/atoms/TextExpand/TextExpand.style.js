import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.colors.text.secondaryText};
`;

export const ToggleText = styled.a`
  color: ${props => props.theme.colors.buttons.actionButton};
  cursor: pointer;
`;

export const Br = styled.br`
  margin: 0;
  padding: 0;
`;
