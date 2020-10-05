import styled from 'styled-components';
import { ReactComponent as Answered } from '../../../images/answered.svg';

export const Container = styled.li`
  background-color: ${props => props.theme.colors.backgrounds.cards};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 1rem 1rem;
  height: 100%;
  display: flex;

  a {
    text-decoration: none;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GroupTopRight = styled.div`
  display: flex;
`;

export const Author = styled.span`
  font-size: 0.9rem;
  padding: 1rem 0;
`;

export const Created = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  padding: 1rem 0;
`;

export const Answeredd = styled(Answered)`
  fill: ${props => props.theme.colors.text.secondaryText};
  height: 1rem;
  margin: auto 1rem auto 0;
  width: auto;
`;

export const Title = styled.span`
  margin-bottom: 1rem;
`;

export const AnswerCount = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
`;

export const CommentCount = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
`;

export const ViewQuestion = styled.span`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 0.9rem;
  font-weight: 800;
  margin-right: 1rem;
`;

export const Relative = styled.div`
  position: relative;
  display: flex;
`;

export const DropdownButton = styled.span`
  height: 100%;
  cursor: pointer;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: 0.1rem;
  background-color: ${props =>
    props.isDropdownOpen ? props.theme.colors.backgrounds.features : 'inherit'};
  padding: 0 15px;
  color: ${props =>
    props.isDropdownOpen
      ? props.theme.colors.text.primaryText
      : props.theme.colors.text.secondaryText};
  border-top-right-radius: 0.5rem;

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;
