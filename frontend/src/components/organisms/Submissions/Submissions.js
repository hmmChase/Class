import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import * as sc from './Submissions.style';

const Submissions = props => {
  const [projects, setProjects] = useState([]);

  const [getProjects] = useFetch('/project');

  useEffect(() => {
    (async () => {
      const gotProjects = await getProjects();

      if (gotProjects) setProjects(gotProjects);
    })();
    // eslint-disable-next-line
  }, []);

  const projectCards = projects.map(project => {
    return <projectCard project={project} />;
  });

  return <sc.Container>{projectCards}</sc.Container>;
};

// Submissions.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Submissions);
