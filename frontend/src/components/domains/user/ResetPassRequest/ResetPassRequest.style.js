import styled from 'styled-components';
import Input from '../../../reuseable/Input/Input';
import BtnReqPass from '../BtnReqPass/BtnReqPass';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

export const HeadingTitle3 = styled.h3`
  margin: 0 0.5em;
  white-space: nowrap;
`;

export const HRule = styled.hr`
  width: 100%;
  margin: 0;
`;

export const Inputt = styled(Input)`
  margin-bottom: 1em;
`;

export const Back = styled.span`
  font-size: 0.9em;
  width: 50px;
  margin: 0 0 1em 0;
  cursor: pointer;
  color: ${props => props.theme.colors.text.titleText};
`;

export const BtnReqPasss = styled(BtnReqPass)``;
