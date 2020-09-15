import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;

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

  > label {
    cursor: pointer;
  }

  input :hover {
    border-bottom: 2px solid
      ${props => props.theme.colors.buttons.actionButtonHover};
  }

  > input:checked + label {
    border-bottom: 2px solid ${props => props.theme.colors.buttons.actionButton};
  }
`;
