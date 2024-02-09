import React from "react";
import "./style.scss";
const BlueHeading = (props) => {
  return <h3 className={`heading_title ${props.uppercase ? props.uppercase :""}`} >{props.bheading}</h3>;
};

export default BlueHeading;