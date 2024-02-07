import React from "react";
import "./style.scss";
import { AUTOMATION_BG_IMG } from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import { HiMiniArrowRightCircle } from "react-icons/hi2";

const Automation = () => {
  return (
    <>
      <section className="automation">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="cloud_bg_img">
                <img src={AUTOMATION_BG_IMG} alt="" width="580px" height="590px"/>
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
                <div className="automation_list">

                
                  <li> Open API business strategy for monetization of APIs</li>
                  <li> Hybrid Integration</li>
                  <li>
                    {" "}
                    <sup>

                    
                    Services- Based Integration Restful and Restless (SOAP)
                    service integration provides digital integration
                    capabilities. It has small-scale to large-scale application
                    data delivery and integration capabilities.</sup>
                  </li>
                  <li>  API Gateway/Manager</li>
                  <li>
                    Social Integration integration with social collaboration
                    platforms such as Facebook, Twitter, Instagram, and many
                    more. It consumes their API and integrates the data into the
                    DXP’s application.
                  </li>

                  <li> In-Built Connectors</li>
                  <li>  Enterprise Service Bus (ESB)</li>
                  <li>  Pluggable Adaptors</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Automation;
