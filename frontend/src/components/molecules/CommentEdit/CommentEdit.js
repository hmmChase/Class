import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import * as sc from './CommentEdit.style';

const CommentEdit = props => {
  const [body, setBody] = useState(props.children);

  return (
    <sc.Container>
      <sc.TextArea
        value={body}
        onChange={e => setBody(e.target.value)}
        autoFocus
      />

      <sc.Row>
        <span>Cancel</span>

        <Button>Save</Button>
      </sc.Row>
    </sc.Container>
  );
};

// CommentEdit.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(CommentEdit);
