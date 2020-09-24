import React from 'react';
// import PropTypes from 'prop-types';
import useDropdown from '../../../utils/useDropdown';
import * as sc from './Dropdown.style';

const DropdownMenu = props => {
  const [isDropdownOpen, setDropdownDisplay] = useDropdown();

  return (
    <sc.Container className={props.className} onClick={setDropdownDisplay}>
      <sc.Button isDropdownOpen={isDropdownOpen}>...</sc.Button>

      {isDropdownOpen && (
        <sc.Dropdown>
          <sc.Ul>{props.children}</sc.Ul>
        </sc.Dropdown>
      )}
    </sc.Container>
  );
};

DropdownMenu.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default React.memo(DropdownMenu);
