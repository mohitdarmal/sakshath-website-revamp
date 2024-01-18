import React from "react";
import "./style.scss";
const Heading = (props) => {
  return <h3 className={`heading_title ${props.uppercase ? props.uppercase :""}`} >{props.heading}</h3>;
};

export default Heading;
