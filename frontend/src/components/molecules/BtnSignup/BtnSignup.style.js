import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Tabs from '../../atoms/Tabs/Tabs';

export const Buttonn = styled(Button)`
  background-color: ${props => props.theme.colors.buttons.actionButtonHover};
  padding: 0.5rem;
  font-weight: 800;

  :hover {
    background-color: ${props => props.theme.colors.buttons.actionButton};
    color: ${props => props.theme.colors.text.secondaryText};
  }
`;

export const Tabss = styled(Tabs)`
  height: 290px;
  width: 350px;
`;
