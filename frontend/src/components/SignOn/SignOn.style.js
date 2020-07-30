import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  height: 200px;
  width: 400px;
  color: black;
  margin: 0 auto;

  > nav {
    text-align: center;
  }
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
