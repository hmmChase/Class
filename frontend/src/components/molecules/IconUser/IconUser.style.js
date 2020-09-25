import styled from 'styled-components';
import { ReactComponent as UserSvg } from '../../../images/user.svg';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.text.secondaryText};
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  padding: 2px;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.text.primaryText};
  }
`;

export const IconUserDefined = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

export const IconUserDefault = styled(UserSvg)`
  fill: ${props => props.theme.colors.backgrounds.widgetsHeader};
  border-radius: 50%;
`;
