import React from "react";
import { FallingLines } from "react-loader-spinner";
import "./style.scss"

const Loader = (props) => {
    const {showLoader, showFallingLine} = props;
  return (
    <>
      <div className={`spinner_loader d-${showLoader}`}>
        <FallingLines
          color="#fff"
          width="100"
          visible={showFallingLine}
          ariaLabel="falling-circles-loading"
          wrapperClass="falling_loader"
        />
      </div>
    </>
  );
};

export default Loader;
