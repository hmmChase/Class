import styled from "styled-components";
import { ReactComponent as Knight } from "../../images/knight.svg";
import { ReactComponent as User } from "../../images/user.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgrounds.widgetsHeader};
  padding: 0.5rem 1rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.titleText};
  font-size: 1.2rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-family: "Courier New", Courier, monospace;
`;

export const KnightIcon = styled(Knight)`
  width: 2rem;
  height: 2rem;
  padding: 2px;
  fill: ${(props) => props.theme.colors.backgrounds.widgetsHeader};
  background-color: ${(props) => props.theme.colors.text.secondaryText};
  border-radius: 50%;
  transform: scale(-1, 1);
`;

export const UserIcon = styled(User)`
  width: 2rem;
  height: 2rem;
  padding: 2px;
  fill: ${(props) => props.theme.colors.backgrounds.widgetsHeader};
  background-color: ${(props) => props.theme.colors.text.secondaryText};
  border-radius: 50%;
`;
