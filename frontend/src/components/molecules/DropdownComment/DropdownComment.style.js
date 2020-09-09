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

  /* vertical-align: middle; */
  /* text-align: center; */
  /* border-top-right-radius: 10px; */

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;

export const Body = styled.div`
  /* list-style-type: none; */
  margin: 0;
  padding: 0;
  /* top: 45px; */
  right: 0px;
  width: 222px;
  background-color: ${props => props.theme.colors.backgrounds.fullApp};
  position: absolute;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  /* z-index: 1; */
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.9rem;
  padding: 0.5rem;

  :last-child {
    border-bottom: none;
  }
`;

export const P = styled.p`
  padding: 0 1rem;

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;
