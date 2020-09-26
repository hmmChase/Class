import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import * as sc from './TextExpand.style';

const TextExpand = props => {
  const [isTruncated, setTruncated] = useState(true);

  const handleTruncate = () => setTruncated(!isTruncated);

  return (
    <sc.Container>
      {isTruncated ? (
        <Truncate
          lines={3}
          trimWhitespace
          ellipsis={
            <span>
              ... <sc.ToggleText onClick={handleTruncate}>more</sc.ToggleText>
            </span>
          }
        >
          {props.children}
        </Truncate>
      ) : (
        <>
          {props.children}

          <sc.ToggleText onClick={handleTruncate}> less</sc.ToggleText>
        </>
      )}
    </sc.Container>
  );
};

export default React.memo(TextExpand);
