import styled from 'styled-components';
import Button from '../../reuseable/Button/Button';

export const Buttonn = styled(Button)`
  background-color: ${props => props.theme.colors.buttons.actionButtonHover};
  padding: 0.5rem;
  font-weight: 800;

  :hover {
    background-color: ${props => props.theme.colors.buttons.actionButton};
    color: ${props => props.theme.colors.text.secondaryText};
  }
`;
