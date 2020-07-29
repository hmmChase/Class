import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Discussion.style';

const Discussion = props => (
  <sc.Container className={props.className}>
    <sc.Flexed>
      <div>
        <sc.Label>DISCUSSION</sc.Label>

        <sc.Title>Ask a Question</sc.Title>
      </div>

      <sc.Buttonn>Post a Question</sc.Buttonn>
    </sc.Flexed>

    {/* <sc.Threadss /> */}
  </sc.Container>
);

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
