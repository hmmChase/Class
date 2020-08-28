import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Title.style';

const Title = props => <sc.H3>{props.children}</sc.H3>;

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default React.memo(Title);
