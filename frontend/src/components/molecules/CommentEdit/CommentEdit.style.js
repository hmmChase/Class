import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1em;
  gap: 1em;
`;

export const TextArea = styled.textarea`
  background-color: ${props => props.theme.colors.backgrounds.features};
  color: ${props => props.theme.colors.text.secondaryText};
  resize: vertical;
  outline: none;
  border: none;
`;

export const Buttons = styled.div`
  align-self: flex-end;
  margin-right: 1em;
`;

export const Buttonn = styled(Button)``;

export const ButtonCancel = styled(Button)`
  background-color: transparent;
`;
