import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './Challenge.style';

const Challenge = props => (
  <sc.Container>
    <sc.Label>CHALLENGE #1</sc.Label>

    <sc.Title>Turn any Design into HTML</sc.Title>

    <sc.Video>
      <iframe
        title='challenge'
        src='https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      />
    </sc.Video>

    <sc.Desc>
      First challenge, turning any design into HTML, and CSS. First challenge,
      turning any design into HTML, and CSS. First challenge, turning any design
      into HTML, and CSS.
    </sc.Desc>
  </sc.Container>
);

// Challenge.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Challenge);
