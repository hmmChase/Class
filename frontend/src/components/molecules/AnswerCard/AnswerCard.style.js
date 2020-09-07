import styled from 'styled-components';
import { ReactComponent as Answered } from '../../../images/answered.svg';
import DropdownComment from '../DropdownComment/DropdownComment';

export const Container = styled.li`
  display: flex;
  /* padding: 1rem; */
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  /* flex-direction: column; */
  /* margin-bottom: 0.5rem; */
`;

export const Answeredd = styled(Answered)`
  fill: ${props => props.theme.colors.buttons.actionButtonHover};
  height: 1rem;
  width: auto;
  /* align-self: center; */
`;

export const Author = styled.span`
  /* color: ${props => props.theme.colors.text.primaryText}; */
  font-size: 0.9rem;
  /* margin-left: 0.5rem; */
`;

export const Timestamp = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

export const CreatedAt = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

export const DropdownCommentt = styled(DropdownComment)`
  /* margin-left: auto; */
`;

export const Body = styled.p`
  color: ${props => props.theme.colors.text.secondaryText};
  /* margin: 0; */
`;
