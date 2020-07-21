import React from 'react';
// import PropTypes from 'prop-types';
import Questions from '../Questions/Questions';
import * as sc from './Discussion.style';

const Discussion = props => (
  <sc.Container>
    <sc.Flexed>
      <div>
        <sc.Label>DISCUSSION</sc.Label>

        <sc.Title>Ask a Question</sc.Title>
      </div>

      <sc.Buttonn>Post a Question</sc.Buttonn>
    </sc.Flexed>

    <Questions />
  </sc.Container>
);

// Discussion.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Discussion);
