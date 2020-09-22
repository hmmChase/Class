import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.colors.text.secondaryText};
`;

export const Body = styled.span`
  ${props => {
    return props.isExpanded
      ? null
      : {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden'
        };
  }};
`;

export const ToggleText = styled.span`
  color: ${props => props.theme.colors.buttons.actionButton};
`;
