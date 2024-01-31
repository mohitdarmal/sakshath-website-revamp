import React from "react";
import "./style.scss";
import { ABOUT_BANNER,CARRER_IMG } from "./Constant";

const index = (props) => {
  return (
    <>
      <section
      className="breadcumb_bg_img"
        style={{
          backgroundImage: `url(${props.imgUrl})`,
          padding: "160px 0px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="background_banner">
              <h1 className="text-center text-white ">{props.title}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
