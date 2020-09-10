import styled from 'styled-components';

export const Container = styled.div``;

export const Li = styled.li`
  :not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
`;

export const Span = styled.span`
  font-size: 0.9rem;

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;