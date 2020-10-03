import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.colors.buttons.iconDefault};
  position: absolute;
  padding: 0.5rem;
  /* display: flex; */
  /* overflow: auto; */
  /* margin: 0; */
  /* right: 0px; */
  /* top: 0px; */
  /* width: 180px; */
  /* background-color: ${props => props.theme.colors.backgrounds.fullApp}; */
  /* border-bottom-left-radius: 0.5rem; */
  /* border-top-left-radius: 0.5rem; */
  /* background-color: black; */
`;

export const Ul = styled.ul`
  list-style: none;
  /* margin: 0; */
  padding: 0;

  > li {
    cursor: pointer;

    :not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }

    > span {
      font-size: 0.9rem;
      /* margin: 0.3rem; */

      :hover {
        color: ${props => props.theme.colors.text.primaryText};
      }
    }
  }
`;
