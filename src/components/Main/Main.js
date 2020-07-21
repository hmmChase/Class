import React from 'react';
// import PropTypes from 'prop-types';

import * as sc from './Main.style';

const Main = props => (
  <sc.Container>
    <sc.Challengee />

    <sc.Submissionn />

    <sc.Discussionn />
  </sc.Container>
);

// Main.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Main);
