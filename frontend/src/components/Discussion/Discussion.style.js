import styled from 'styled-components';
import Button from '../Button/Button';
import Questions from '../Questions/Questions';
import QuestionDetail from '../QuestionDetail/QuestionDetail';
import QuestionNew from '../QuestionNew/QuestionNew';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  padding: 0 0.5rem 0.5rem 0.5rem;
  min-height: 800px;

  p {
    color: ${props => props.theme.colors.text.secondaryText};
  }

  @media screen and (min-width: 1000px) {
    position: relative;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1.2rem;
`;

export const Label = styled.p`
  font-size: clamp(0.8rem, 2vw, 1rem);
  margin: 0 0 0.2rem 0;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  margin: 0;
`;

export const BackBtn = styled(Button)`
  margin-top: 1rem;
`;

export const QuestionNeww = styled(QuestionNew)`
  margin-top: 1rem;
`;

export const QuestionDetaill = styled(QuestionDetail)``;

export const Questionss = styled(Questions)``;
