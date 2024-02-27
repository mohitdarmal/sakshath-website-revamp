import React from "react";
import "./style.scss";
const SubHeading = (props) => {
  return <h5 className={`sub_heading ${props.uppercase ? props.uppercase :""}`} >{props.heading}</h5>;
};

export default SubHeading;