import React, { useState } from 'react';
import DropDownUserIcon from '../../USER/DropdownUserIcon/DropDownUserIcon';
import * as sc from './IconUser.style';

const IconUser = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <sc.Container isDropdownOpen={isDropdownOpen}>
      {isDropdownOpen && (
        <DropDownUserIcon
          isDropdownOpen={isDropdownOpen}
          close={() => setDropdownOpen(false)}
        />
      )}

      <sc.IconUserDefault onClick={() => setDropdownOpen(true)} />
    </sc.Container>
  );
};

export default React.memo(IconUser);
