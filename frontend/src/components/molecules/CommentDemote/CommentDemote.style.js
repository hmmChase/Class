import styled from 'styled-components';

export const Span = styled.span`
  padding: 0 1rem;
  /* border-bottom: 1px solid #e5e5e5; */

  /* :last-child { */
  /* border-bottom: none; */
  /* } */

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;
