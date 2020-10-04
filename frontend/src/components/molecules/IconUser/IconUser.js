import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as sc from './IconUser.style';

const IconUser = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <sc.Container>
      {isModalOpen && (
        <sc.DropDownUserIconn close={() => setModalOpen(false)} />
      )}

      <sc.IconUserDefault onClick={() => setModalOpen(true)} />
    </sc.Container>
  );
};

IconUser.propTypes = {
  currentUser: PropTypes.shape({
    avatarUrl: PropTypes.string
  })
};

export default React.memo(IconUser);
