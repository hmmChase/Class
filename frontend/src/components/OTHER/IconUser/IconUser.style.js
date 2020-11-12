import styled from 'styled-components';
import { ReactComponent as UserSvg } from '../../../images/user.svg';

export const Container = styled.div`
  /* border-top-left-radius: 50%; */
  /* border-top-right-radius: 50%; */
  height: 2rem;
  width: 2rem;
  padding: 2px;
  cursor: pointer;
  position: relative;
`;

export const IconUserDefault = styled(UserSvg)`
  background-color: ${props => props.theme.colors.text.secondaryText};
  border: 2px solid ${props => props.theme.colors.text.secondaryText};
  fill: ${props => props.theme.colors.backgrounds.widgetsHeader};
  border-radius: 50%;

  :hover {
    background-color: ${props => props.theme.colors.text.primaryText};
  }
`;
