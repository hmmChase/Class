import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Outer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 666;
`;

export const Inner = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.cards};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
  z-index: 999;
`;
