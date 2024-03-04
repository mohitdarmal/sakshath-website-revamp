import React from "react";
import "./style.scss";
const Heading2 = (props) => {
  return <h3 className={`heading2_title ${props.uppercase ? props.uppercase :""}`} >{props.heading}</h3>;
};

export default Heading2;
