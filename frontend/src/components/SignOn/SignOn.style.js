import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  height: 200px;
  width: 300px;
  color: black;
`;

export const Nav = styled.nav`
  margin-bottom: 1rem;

  > input {
    visibility: hidden;
  }

  > input:checked + label {
    background: red;
  }
`;
