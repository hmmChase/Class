import React from "react";
// import PropTypes from 'prop-types';
import * as sc from "./Challenge.style";

const Challenge = (props) => (
  <sc.Container>
    <p>CHALLENGE #1</p>

    <h2>Turn any Design into HTML</h2>

    <sc.Video>
      <iframe
        title="challenge"
        src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </sc.Video>

    <p>
      First challenge, turning any design into HTML, and CSS. First challenge,
      turning any design into HTML, and CSS. First challenge, turning any design
      into HTML, and CSS.
    </p>
  </sc.Container>
);

// Challenge.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Challenge);
