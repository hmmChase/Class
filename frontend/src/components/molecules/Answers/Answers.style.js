import styled from 'styled-components';
import AnswerCard from '../AnswerCard/AnswerCard';

export const Container = styled.div``;

export const AnswersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const AnswerCardd = styled(AnswerCard)`
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
