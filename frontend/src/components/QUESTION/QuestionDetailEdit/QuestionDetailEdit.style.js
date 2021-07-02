import styled from 'styled-components';
import Button from '../../REUSEABLE/Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1em 1em 0;
  gap: 1em;
  width: 100%;
`;

export const TextArea = styled.textarea`
  background-color: ${props => props.theme.colors.backgrounds.features};
  color: ${props => props.theme.colors.text.secondaryText};
  resize: vertical;
  outline: none;
  border: none;
  width: 100%;
`;

export const Buttons = styled.div`
  align-self: flex-end;
  margin-right: 1em;
`;

export const Buttonn = styled(Button)``;

export const ButtonCancel = styled(Button)`
  background-color: transparent;
`;
