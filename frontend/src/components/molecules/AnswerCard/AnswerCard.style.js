import styled from 'styled-components';
import { ReactComponent as Answered } from '../../../images/answered.svg';

export const Container = styled.li`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  gap: 1rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GroupCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Answeredd = styled(Answered)`
  fill: ${props => props.theme.colors.buttons.actionButtonHover};
  height: 1rem;
  width: auto;
`;

export const Author = styled.span`
  color: ${props => props.theme.colors.text.primaryText};
  font-size: 0.9rem;
  padding: 1rem 0;
`;

export const Timestamp = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  padding: 1rem 0;
`;

export const CreatedAt = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  padding: 1rem 0;
`;

export const Body = styled.span`
  color: ${props => props.theme.colors.text.secondaryText};
  margin-bottom: 1rem;
`;
