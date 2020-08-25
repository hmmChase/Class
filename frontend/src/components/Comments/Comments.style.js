import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colors.backgrounds.fullApp};

  > li {
    margin-bottom: 0.5rem;
  }

  > li:last-child {
    margin-bottom: 0;
  }
`;
