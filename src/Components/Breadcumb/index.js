import React from "react";
import "./style.scss";
import { ABOUT_BANNER,CARRER_IMG } from "./Constant";

const index = (props) => {
  return (
    <>
      <section
      className="breadcumb_sec"
        style={{
          backgroundImage: `url(${props.imgUrl})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="background_banner">
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
