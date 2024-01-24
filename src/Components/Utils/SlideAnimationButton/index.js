import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"

const SlideAnimationButton = (props) => {
    return (
        <>
         <Link to={props.url} className="cta_button">{props.btnName}</Link>
        </>
    )
}

export default SlideAnimationButton;