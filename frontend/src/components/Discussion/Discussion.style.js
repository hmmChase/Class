import styled from 'styled-components';
import Questions from '../Questions/Questions';
import QuestionDetail from '../QuestionDetail/QuestionDetail';
import QuestionBtn from '../QuestionBtn/QuestionBtn';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);

  p {
    color: ${props => props.theme.colors.text.secondaryText};
  }
`;

export const Flexed = styled.div`
  display: flex;
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

export const QuestionBtnn = styled(QuestionBtn)`
  align-self: flex-start;
`;

export const Questionss = styled(Questions)`
  height: 800px;
  margin: 0 0.5rem 0.5rem 0.5rem;
`;

export const QuestionDetaill = styled(QuestionDetail)`
  height: 800px;
  margin: 0 0.5rem 0.5rem 0.5rem;
`;
