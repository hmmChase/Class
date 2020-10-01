import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.colors.buttons.iconDefault};
`;

export const Button = styled.div`
  font-weight: 800;
  letter-spacing: 0.1rem;
  background-color: ${props =>
    props.isDropdownOpen ? props.theme.colors.backgrounds.fullApp : 'inherit'};
  padding: 10px 20px;
  color: ${props =>
    props.isDropdownOpen ? props.theme.colors.text.primaryText : 'inherit'};
  border-top-right-radius: 0.5rem;

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;

export const Dropdown = styled.div`
  margin: 0;
  padding: 0.5rem;
  right: 0px;
  top: 33px;
  width: 180px;
  background-color: ${props => props.theme.colors.backgrounds.fullApp};
  position: absolute;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
