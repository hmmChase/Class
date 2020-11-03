import styled from 'styled-components';
import Button from '../../../reuseable/Button/Button';

export const Buttonn = styled(Button)`
  background-color: ${props => props.theme.colors.buttons.hover};
  color: ${props => props.theme.colors.buttons.actionButtonHover};
  margin-right: 1rem;
  padding: 0.5rem;
  font-weight: 800;

  :hover {
    background-color: ${props => props.theme.colors.text.secondaryText};
    color: ${props => props.theme.colors.buttons.actionButton};
  }
`;
