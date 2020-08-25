import styled from 'styled-components';
import { ReactComponent as KnightSvg } from '../../images/knight.svg';
import { ReactComponent as UserSvg } from '../../images/user.svg';

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.text.titleText};
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(1rem, 3vw, 1.5rem);
  letter-spacing: 0.3rem;
  margin: 0;
  text-transform: uppercase;
`;

export const KnightIcon = styled(KnightSvg)`
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

export const UserIcon = styled.div`
  background-color: ${props => props.theme.colors.text.secondaryText};
  border-radius: 50%;
  height: 2rem;
  width: 2rem;

  :hover {
    background-color: ${props => props.theme.colors.text.primaryText};
  }
`;

export const UserIconDefault = styled(UserSvg)`
  fill: ${props => props.theme.colors.backgrounds.widgetsHeader};
  border-radius: 50%;
`;

export const UserIconDefined = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  padding: 2px;
`;
