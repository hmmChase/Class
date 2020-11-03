import styled from 'styled-components';
import Button from '../../../reuseable/Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1em;
  gap: 1em;
  flex: 1;
  width: 100%;
`;

export const TextArea = styled.textarea`
  background-color: ${props => props.theme.colors.backgrounds.features};
  color: ${props => props.theme.colors.text.secondaryText};
  resize: vertical;
  outline: none;
  border: none;
  flex: 1;
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
