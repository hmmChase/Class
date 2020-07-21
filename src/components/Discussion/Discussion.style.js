import styled from 'styled-components';
import Button from '../Button/Button';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  padding: 1rem;

  /* display: flex;	*/
  /* flex-direction: column;	*/
  /* display: grid;	*/
  /* grid-template-columns: 1fr 1fr;	*/
  /* grid-template-rows: 1fr 1fr 1fr;	*/

  > p {
    color: ${props => props.theme.colors.text.secondaryText};
  }
`;

export const Label = styled.p`
  font-size: 1rem;
  margin: 0;

  /* font-size: clamp(0.8rem, 1rem, 1.2rem);	*/
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.buttons.actionButton};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: min(max(1.2rem, 4vw), 2rem);
  margin: 0.1rem 0 1rem 0;
`;

export const Buttonn = styled(Button)`
  align-self: flex-start;
`;

export const Flexed = styled.div`
  display: flex;
  justify-content: space-between;
`;
