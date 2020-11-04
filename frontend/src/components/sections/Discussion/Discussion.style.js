import styled from 'styled-components';
import QuestionNew from '../../QUESTION/QuestionNew/QuestionNew';
import BtnBack from '../../OTHER/BtnBack/BtnBack';
import Title from '../../REUSEABLE/Title/Title';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 720px) {
    max-height: calc(100vh - 83px);
  }
`;

export const Heading = styled.div`
  padding: 0 1rem;
  /* margin-bottom: 1rem; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Titlee = styled(Title)`
  color: ${props => props.theme.colors.buttons.actionButton};
`;

export const BtnBackk = styled(BtnBack)`
  margin: 0 0 1em 1em;
`;

export const QuestionNeww = styled(QuestionNew)`
  margin-top: 1rem;
`;
