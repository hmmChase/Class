import React, { useState } from 'react';
import DropDownUserIcon from '../../USER/DropdownUserIcon/DropDownUserIcon';
import PropTypes from 'prop-types';
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

IconUser.propTypes = {
  currentUser: PropTypes.shape({
    avatarUrl: PropTypes.string
  })
};

export default React.memo(IconUser);
