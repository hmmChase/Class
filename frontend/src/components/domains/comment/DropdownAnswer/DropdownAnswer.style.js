import styled from 'styled-components';
import Dropdown from '../../../reuseable/Dropdown/Dropdown';

export const Dropdownn = styled(Dropdown)`
  background-color: ${props =>
    props.isDropdownOpen ? props.theme.colors.backgrounds.features : 'inherit'};
  color: ${props =>
    props.isDropdownOpen ? props.theme.colors.text.secondaryText : 'inherit'};

  top: 41px;
  right: 0;
  width: 185px;
`;
