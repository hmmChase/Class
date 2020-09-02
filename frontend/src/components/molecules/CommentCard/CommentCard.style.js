import styled from 'styled-components';
import DropdownComment from '../DropdownComment/DropdownComment';

export const Container = styled.li`
  padding: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Author = styled.span`
  color: ${props => props.theme.colors.text.primaryText};
  font-size: 0.9rem;
  margin-right: 0.5rem;
`;

export const Timestamp = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.terciaryText};
  margin-right: 0.5rem;
`;

export const CreatedAt = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.terciaryText};
  margin-right: 0.5rem;
`;

export const DropdownCommentt = styled(DropdownComment)`
  margin-left: auto;
`;

export const Body = styled.p`
  color: ${props => props.theme.colors.text.secondaryText};
  margin: 0;
`;
