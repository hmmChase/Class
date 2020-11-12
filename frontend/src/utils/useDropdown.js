import { useState } from 'react';

export default () => {
  const [isDropdownOpen, setDropdownDisplay] = useState(false);

  const openDropdown = () => {
    setDropdownDisplay(true);

    document.addEventListener('click', closeDropdown);
  };

  const closeDropdown = () => {
    setDropdownDisplay(false);

    document.removeEventListener('click', closeDropdown);
  };

  return [isDropdownOpen, openDropdown];
};
