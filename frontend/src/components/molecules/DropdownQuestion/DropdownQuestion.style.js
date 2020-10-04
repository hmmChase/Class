import styled from 'styled-components';
import Dropdown from '../../atoms/Dropdown/Dropdown';

export const Container = styled.div``;

// export const Dropdownn = styled(Dropdown)`
//   /* top: 48px; */
//   /* left: 60px; */
// `;

export const Dropdownn = styled(Dropdown)`
  background-color: ${props =>
    props.isDropdownOpen ? props.theme.colors.backgrounds.features : 'inherit'};
  color: ${props =>
    props.isDropdownOpen ? props.theme.colors.text.secondaryText : 'inherit'};

  top: 41px;
  right: 0;
  width: 180px;
`;
