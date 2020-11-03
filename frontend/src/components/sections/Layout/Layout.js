import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Layout.style';

const Layout = props => (
  <sc.Container>
    <sc.Header>{props.header}</sc.Header>

    <sc.Main>{props.main}</sc.Main>
  </sc.Container>
);

Layout.propTypes = {
  header: PropTypes.element,
  content: PropTypes.element
};

export default React.memo(Layout);
