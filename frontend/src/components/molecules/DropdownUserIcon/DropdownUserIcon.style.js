import styled from 'styled-components';

export const Li = styled.li`
  :not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
`;

export const Span = styled.p`
  font-size: 0.9rem;
  margin: 0.3rem;

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;
