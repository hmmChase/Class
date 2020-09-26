import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.colors.text.secondaryText};
`;

export const ToggleText = styled.span`
  color: ${props => props.theme.colors.buttons.actionButton};
  cursor: pointer;
`;
