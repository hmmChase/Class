import styled from 'styled-components';

export const Container = styled.div``;

export const Li = styled.li`
  border-bottom: 1px solid #e5e5e5;
  padding: 0.5rem;

  :last-child {
    border-bottom: none;
  }
`;

export const Span = styled.span`
  padding: 0 1rem;
  font-size: 0.9rem;

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;
