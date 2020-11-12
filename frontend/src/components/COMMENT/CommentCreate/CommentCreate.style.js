import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../images/arrow.svg';

export const Container = styled.div`
  display: flex;
  height: 2.5rem;
  /* justify-content: center; */
  background-color: ${props => props.theme.colors.backgrounds.features};
  align-items: center;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

export const AddInput = styled.input`
  width: 100%;
  border: none;
  height: 2.5rem;
  padding: 0.5rem;
  color: ${props => props.theme.colors.text.secondaryText};
  background-color: ${props => props.theme.colors.backgrounds.features};
  outline: none;
`;

export const ArrowBtn = styled(ArrowSvg)`
  height: 1.5rem;
  margin: 0 0.5rem;
  fill: ${props => props.theme.colors.text.terciaryText};
  margin-right: 2rem;
  cursor: pointer;

  :hover {
    fill: ${props => props.theme.colors.text.secondaryText};
  }
`;
