import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const InputTitle = styled.input`
  background-color: ${props => props.theme.colors.backgrounds.features};
  border-radius: 5px;
  border: none;
  color: ${props => props.theme.colors.text.secondaryText};
  margin-bottom: 0.5rem;
  min-width: 500px;
  outline: none;
  padding: 0.5rem;
`;

export const TextAreaBody = styled.textarea`
  background-color: ${props => props.theme.colors.backgrounds.features};
  border-radius: 5px;
  border: none;
  color: ${props => props.theme.colors.text.secondaryText};
  margin-bottom: 1rem;
  min-height: 200px;
  min-width: 500px;
  outline: none;
  padding: 0.5rem;
  resize: none;
`;

export const Buttonns = styled.div`
  align-self: flex-end;
`;

export const Buttonn = styled(Button)``;

export const ButtonCancel = styled(Button)`
  background-color: transparent;
`;

export const Titlee = styled(Title)`
  margin: 0;
`;
