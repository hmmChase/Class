import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const Author = styled.span`
  font-size: 0.9rem;
`;

// export const Created = styled.span`
//   font-size: 0.9rem;
//   color: ${props => props.theme.colors.text.terciaryText};
// `;

export const Title = styled.p`
  /* margin: 0; */
`;

export const Body = styled.p`
  /* margin: 0; */
`;
