import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 1rem 1rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  gap: 1rem;
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

export const Relative = styled.div`
  position: relative;
  display: flex;
`;

export const DropdownButton = styled.span`
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

  :hover {
    color: ${props => props.theme.colors.text.primaryText};
  }
`;
