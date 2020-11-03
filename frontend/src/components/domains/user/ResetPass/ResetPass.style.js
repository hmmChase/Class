import styled from 'styled-components';
import Button from '../../../reuseable/Button/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 1rem;

  > input {
    margin-left: 0.5rem;
  }
`;

export const Buttonn = styled(Button)`
  align-self: flex-end;
`;
