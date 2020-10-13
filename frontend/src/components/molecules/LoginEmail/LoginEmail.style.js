import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// export const Label = styled(InputLabel)`
//   /* margin-bottom: 1rem; */
//   /* display: block; */

//   > input {
//     /* margin-left: 0.5rem; */
//   }
// `;

export const Inputt = styled(Input)`
  /* background-color: ${props => props.theme.colors.backgrounds.features}; */
  /* border-radius: 5px; */
  /* border: none; */
  /* color: ${props => props.theme.colors.text.secondaryText}; */
  /* margin-bottom: 0.5rem; */
  /* outline: none; */
  /* padding: 0.5rem; */
`;

export const Buttonn = styled(Button)`
  align-self: flex-end;
`;
