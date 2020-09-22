import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import * as sc from './TextExpand.style';

const TextExpand = props => {
  const [isExpanded, setExpanded] = useState(false);

  const [height, setHeight] = useState(null);

  const refBody = useRef(null);

  useEffect(() => {
    if (refBody.current) {
      let height = refBody.current.offsetHeight;

      setHeight(height);
    }
  }, []);

  const onClick = () => setExpanded(!isExpanded);

  return (
    <sc.Container>
      <sc.Body ref={refBody} isExpanded={isExpanded}>
        {props.children}
      </sc.Body>

      {height >= 54 ? (
        isExpanded ? (
          <sc.ToggleText onClick={onClick}>less</sc.ToggleText>
        ) : (
          <sc.ToggleText onClick={onClick}>more</sc.ToggleText>
        )
      ) : null}
    </sc.Container>
  );
};

// TextExpand.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(TextExpand);
