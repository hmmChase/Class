import styled from 'styled-components';
import Button from '../Button/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
`;

export const TextArea = styled.textarea`
  min-height: 200px;
  min-width: 500px;
  margin-bottom: 1rem;
`;

export const Buttonn = styled(Button)`
  align-self: flex-end;
`;
