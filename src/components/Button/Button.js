import React from "react";
// import PropTypes from 'prop-types';
import * as sc from "./Button.style";

const Button = (props) => <sc.Button>{props.children}</sc.Button>;

// Button.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Button);
