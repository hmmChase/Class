import styled from 'styled-components';
import QuestionNew from '../../molecules/QuestionNew/QuestionNew';
import BtnBack from '../../molecules/BtnBack/BtnBack';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0.5rem 0.5rem 0.5rem;
  /* display: flex;
  flex-direction: column; */
  height: 100%;
  /* max-height: 800px; */
  /* overflow: auto; */

  /* p {
    color: ${props => props.theme.colors.text.secondaryText};
  } */
`;

export const Heading = styled.div`
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  margin: 0;
`;

export const BtnBackk = styled(BtnBack)`
  margin-top: 1rem;
`;

export const QuestionNeww = styled(QuestionNew)`
  margin-top: 1rem;
`;
