import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1.2rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const SubmittedText = styled.span`
  margin-left: 1rem;
  color: ${props => props.theme.colors.text.terciaryText};
`;
