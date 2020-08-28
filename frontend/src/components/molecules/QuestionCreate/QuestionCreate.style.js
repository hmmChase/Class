import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* color: black; */
  /* align-items: center; */
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  margin: 0 0 0.5rem 0;
`;

export const Desc = styled.p`
  font-size: clamp(0.8rem, 2.4vw, 1.2rem);
  line-height: 1.3;
  margin: 0.1rem 0 1rem 0;
`;

export const InputTitle = styled.input``;

export const TextAreaBody = styled.textarea`
  min-height: 200px;
  min-width: 500px;
  margin-bottom: 1rem;
`;

export const Buttonn = styled(Button)`
  align-self: flex-end;
`;
