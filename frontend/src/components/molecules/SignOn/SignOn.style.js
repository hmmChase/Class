import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  height: 300px;
  width: 400px;

  > nav {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  margin-bottom: 1rem;

  > input {
    display: none;
  }

  input :hover {
    border-bottom: 2px solid
      ${props => props.theme.colors.buttons.actionButtonHover};
  }

  > input:checked + label {
    border-bottom: 2px solid ${props => props.theme.colors.buttons.actionButton};
  }
`;
