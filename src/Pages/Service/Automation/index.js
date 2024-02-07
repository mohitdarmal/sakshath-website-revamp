import React from "react";
import "./style.scss";
import { AUTOMATION_BG_IMG, CHECK_ICON } from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import WhySakshath from "../../../Components/WhySakshath";
import {
  pillar1,
  pillar2,
  pillar3,
  pillar4,
} from "../../../Components/WhySakshath/Constant";

const Automation = () => {
  return (
    <>
      {/* automation starts */}
      <section className="automation">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="cloud_bg_img">
                <img
                  src={AUTOMATION_BG_IMG}
                  alt=""
                  width="580px"
                  height="550px"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cloud_native_content">
                <Heading heading=" Cloud Native Development" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  veniam velit quibusdam aliquid vel est expedita voluptatum
                  accusamus dolorum.
                </p>
              </div>
              <div className="automation_right_content_list">
                <ul>
                  <li> Open API business strategy for monetization of APIs</li>

                  <li> Hybrid Integration</li>
                  <li> Services- Based Integration</li>
                  <li> API Gateway/Manager</li>
                  <li>Social Integration</li>
                  <li> Marketplace Integration</li>

                  <li> In-Built Connectors</li>
                  <li> Enterprise Service Bus (ESB)</li>
                  <li> Pluggable Adaptors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pillar_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 ">
            <div className="pillar_heading">

            
              {/* <Heading heading="4  Pillars of sakshath" /> */}
              <h1>4 PILLARS OF SAKSHATH</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                consequatur? Distinctio delectus.
              </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="pillars_box">
                    <div className="pillars_box_img">
                      <img src={pillar1} alt="" />
                    </div>
                    <div className="pillar_title">
                      <p>Modern Design & Architecture</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="pillars_box">
                    <div className="pillars_box_img">
                      <img src={pillar1} alt="" />
                    </div>
                    <div className="pillar_title">
                      <p>Modern Design & Architecture</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="pillars_box">
                    <div className="pillars_box_img">
                      <img src={pillar1} alt="" />
                    </div>
                    <div className="pillar_title">
                      <p>Modern Design & Architecture</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="pillars_box">
                    <div className="pillars_box_img">
                      <img src={pillar1} alt="" />
                    </div>
                    <div className="pillar_title">
                      <p>Modern Design & Architecture</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* automation ends */}

      {/* why_Sakshath starts */}
      <WhySakshath />

      {/* why_Sakshath ends*/}
    </>
  );
};

export default Automation;
