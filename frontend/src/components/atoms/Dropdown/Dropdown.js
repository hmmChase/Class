import React from 'react';
// import PropTypes from 'prop-types';
import useDropdown from '../../../utils/useDropdown';
import * as sc from './Dropdown.style';

// not currently used

const DropdownMenu = props => {
  const [isDropdownOpen, setDropdownDisplay] = useDropdown();

  console.log('isDropdownOpen:', isDropdownOpen);

  return (
    <sc.Dropdown className={props.className} onClick={setDropdownDisplay}>
      <sc.Button isDropdownOpen={isDropdownOpen}>{props.button}</sc.Button>

      {isDropdownOpen && <div>{props.dropdown}</div>}
    </sc.Dropdown>
  );
};

DropdownMenu.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default React.memo(DropdownMenu);
