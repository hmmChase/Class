import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
