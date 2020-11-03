import React from 'react';
import PropTypes from 'prop-types';

import * as sc from './ProjectCard.style';

const ProjectCard = props => {
  console.log('props:', props);

  return <sc.Container className={props.className}>asdf</sc.Container>;
};

ProjectCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
};

export default React.memo(ProjectCard);
