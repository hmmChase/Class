import styled from 'styled-components';
import Button from '../../REUSEABLE/Button/Button';
import Input from '../../REUSEABLE/Input/Input';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Inputt = styled(Input)``;

export const Buttonn = styled(Button)`
  align-self: flex-end;
`;

export const ForgetPass = styled.span`
  font-size: 0.9em;
  margin-bottom: 2em;
  cursor: pointer;
  color: ${props => props.theme.colors.text.titleText};
`;
