import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import * as sc from './BodyExpandable.style';

const BodyExpandable = props => {
  const [isExpanded, setExpanded] = useState(false);

  const onClick = () => setExpanded(!isExpanded);

  return (
    <sc.Container>
      <sc.Body isExpanded={isExpanded}>{props.children}</sc.Body>

      {isExpanded ? (
        <sc.ToggleText onClick={onClick}>less</sc.ToggleText>
      ) : (
        <sc.ToggleText onClick={onClick}>more</sc.ToggleText>
      )}
    </sc.Container>
  );
};

// BodyExpandable.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(BodyExpandable);
