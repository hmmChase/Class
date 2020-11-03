import styled from 'styled-components';
import { ReactComponent as KnightSvg } from '../../../images/knight.svg';

export const KnightSvgg = styled(KnightSvg)`
  background-color: ${props => props.theme.colors.text.secondaryText};
  border-radius: 50%;
  fill: ${props => props.theme.colors.backgrounds.widgetsHeader};
  height: 2rem;
  padding: 2px;
  transform: scale(-1, 1);

  :hover {
    background-color: ${props => props.theme.colors.text.primaryText};
  }
`;
