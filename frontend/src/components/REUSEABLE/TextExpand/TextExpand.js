import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import * as sc from './TextExpand.style';

const TextExpand = props => {
  const [isTruncated, setTruncated] = useState(true);

  const handleTruncate = () => setTruncated(!isTruncated);

  return (
    <sc.Container className={props.className}>
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
          {props.children &&
            props.children.split('\n').map((line, i, arr) => {
              const linee = <span key={i}>{line}</span>;

              if (i === arr.length - 1) {
                return linee;
              } else {
                return [linee, <sc.Br key={i + 'br'} />];
              }
            })}
        </Truncate>
      ) : (
        <>
          {props.children.split('\n').map((line, i, arr) => {
            const linee = <span key={i}>{line}</span>;

            if (i === arr.length - 1) {
              return linee;
            } else {
              return [linee, <sc.Br key={i + 'br'} />];
            }
          })}

          <sc.ToggleText onClick={handleTruncate}> less</sc.ToggleText>
        </>
      )}
    </sc.Container>
  );
};

export default React.memo(TextExpand);