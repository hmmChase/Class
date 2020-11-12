import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.cards};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  flex-direction: column;
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
  font-size: 0.9rem;
  padding: 1rem 0;
`;

export const Created = styled.span`
  color: ${props => props.theme.colors.text.terciaryText};
  font-size: 0.9rem;
  padding: 1rem 0;
`;

export const Title = styled.span`
  margin-bottom: 1rem;
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
