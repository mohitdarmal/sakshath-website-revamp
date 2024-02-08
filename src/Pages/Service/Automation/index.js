import React from "react";
import "./style.scss";
import {
  ANDRIOD_APP,
  AUTOMATION_BG_IMG,
  CHECK_ICON,
  CROSS_PLATFORM_APP,
  IOS_APPLE,
  RPA_ADVISORY,
  RPA_BOT,
  RPA_DELIVERY,
  RPA_PILOT,
} from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import WhySakshath from "../../../Components/WhySakshath";
import {
  pillar_automation,
  pillar_bank,
  pillar_microservice,
  pillar_modern,
} from "../../../Components/WhySakshath/Constant";
import Graph from "../../../Components/Graph";
import { bottom } from "@popperjs/core";

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
                      <img src={pillar_modern} alt="" />
                    </div>
                    <div className="pillar_title">
                      <p>Modern Design & Architecture</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="pillars_box">
                    <div className="pillars_box_img">
                      <img src={pillar_microservice} alt="" />
                    </div>
                    <div className="pillar_title">
                      <p>Microservices</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="pillars_box">
                    <div className="pillars_box_img">
                      <img src={pillar_bank} alt="" />
                    </div>
                    <div className="pillar_title">
                      <p>Containers Backing Services</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="pillars_box">
                    <div className="pillars_box_img">
                      <img src={pillar_automation} alt="" />
                    </div>
                    <div className="pillar_title">
                      <p>Automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*automation ends */}

      {/* mobile Application starts */}
      <section className="mobile_section">
        <div className="container">
          <div className="row">
            <div className="mobile_main_heading text-center pb-4">
              <Heading
                heading="Mobile Application Development"
                uppercase="upppercase"
              />
            </div>

            <div className="col-md-4 andriod_app">
              {/* <div className="mobile_application"> */}
              <div className="mobile_application_img">
                <img src={ANDRIOD_APP} alt="" />
              </div>
              <div className="mobile_application_heading">
                <h5>Android App Development</h5>
              </div>
              {/* </div> */}
            </div>
            <div className="col-md-4 ios_app">
              {/* <div className="mobile_application"> */}
              <div className="mobile_application_img">
                <img src={IOS_APPLE} alt="" />
              </div>
              <div className="mobile_application_heading">
                <h5>iOS App Development</h5>
                {/* </div> */}
              </div>
            </div>
            <div className="col-md-4 cross_platform">
              <div className="mobile_application_img">
                <img src={CROSS_PLATFORM_APP} alt="" />
              </div>
              <div className="mobile_application_heading">
                <h5>Cross Platform App Development</h5>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* mobile Application starts */}

      {/* application starts */}
      <section className="application_section">
        <div className="container">
          <div className="row">
            <div className="application_main_heading ">
              <Heading
                heading="Application Integration"
                uppercase="uppercase"
              />
            </div>

            <div className="application_integration">
              <ul>
                <li>Open API business strategy for monetization of API’s</li>
                <li>Hybrid Integration</li>
                <li>Services- Based Integration</li>
                <ul>
                  <p>
                    Restful and Restless (SOAP) service integration provides
                    digital integration capabilities. It has small-scale to
                    large-scale application data delivery and integration
                    capabilities.
                  </p>
                </ul>
                <li>API Gateway/Manager</li>
                <li>Social Integration</li>
                <ul>
                  <p>
                    Integration with social collaboration platforms such as,
                    Facebook, Twitter, Instagram, and many more. It consumes
                    their API and integrates the data in the DXP’s application.
                  </p>
                </ul>
                <li>Marketplace Integration</li>
                <ul>
                  <p>
                    Marketplace integration helps business users to integrate
                    with multiple channels: to buy or sell their services and
                    products of different channels while consuming a single
                    service.
                  </p>
                </ul>

                <li>In-Built Connectors</li>

                <li>Enterprise Service Bus (ESB)</li>
                <li>Pluggable Adaptors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* application starts */}

      {/* automation ends */}

      {/* why_Sakshath starts */}
      <WhySakshath />

      {/* why_Sakshath ends*/}

      {/* RPA */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="rpa_main_heading">
                {/* <Heading heading="RPA (Robotic Process Automation)"/> */}
                <h1>RPA (Robotic Process Automation)</h1>

                <p>
                  Sakshath RPA as a service is designed to help organizations to
                  integrate RPA with latest technologies like AI/ ML, Voice
                  recognition, Language processing.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3">
                  {/* <h4>Process Monitoring</h4> */}
                </div>
                <div className="col-md-6">
                  {/* Graph starts */}
                  <Graph />
                  {/* Graphs ends */}
                </div>
                <div className="col-md-3">
                  {/* <h4>Process Discovery</h4> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row  text-align-center">
                
                <div className="col-md-6">
                  <div className="rpa_boxes">
               <div className="rpa_img">

                
                    <img src={RPA_ADVISORY} alt="" />
                      </div>

                    <div className="rpa_content">
                      <h4>RPA ADVISORY</h4>
                      <p>
                        Process & Platform Assessment <br />
                        Business Case Preparation – Functional & Technical{" "}
                        <br />
                        Standard Operation Procedure (SOP’s) <br />
                        Process Validation & Triage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="rpa_boxes">
               <div className="rpa_img">

                
                    <img src={RPA_ADVISORY} alt="" />
                      </div>

                    <div className="rpa_content">
                      <h4>RPA ADVISORY</h4>
                      <p>
                        Process & Platform Assessment <br />
                        Business Case Preparation – Functional & Technical{" "}
                        <br />
                        Standard Operation Procedure (SOP’s) <br />
                        Process Validation & Triage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="rpa_boxes">
               <div className="rpa_img">

                
                    <img src={RPA_ADVISORY} alt="" />
                      </div>

                    <div className="rpa_content">
                      <h4>RPA ADVISORY</h4>
                      <p>
                        Process & Platform Assessment <br />
                        Business Case Preparation – Functional & Technical{" "}
                        <br />
                        Standard Operation Procedure (SOP’s) <br />
                        Process Validation & Triage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="rpa_boxes">
                  <div className="rpa_img">

                
                    <img src={RPA_ADVISORY} alt="" />
                      </div>

                    <div className="rpa_content">
                      <h4>RPA ADVISORY</h4>
                      <p>
                        Process & Platform Assessment <br />
                        Business Case Preparation – Functional & Technical{" "}
                        <br />
                        Standard Operation Procedure (SOP’s) <br />
                        Process Validation & Triage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section> */}

      <section className="rpa_offering_section">
        <div className="container">
          <div className="row">
            <div className="rpa_offering_main_heading text-center mb-4">
              <Heading heading="rpa offerings" uppercase="uppercase" />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row">
                {/* left side rpa  */}
                <div className="col-md-6 left_boxes_rpa">
                  <div className=" rpa_box_left">
                    <div className="rpa_imgs">
                      <img src={RPA_ADVISORY} alt="" />
                    </div>
                    <div className="rpa_heading">
                      <h4>RPA ADVISORY</h4>

                      <p>
                        Process & Platform Assessment <br />
                        Business Case Preparation – Functional & Technical.{" "}
                        <br />
                        Standard Operation Procedure (SOP’s). <br />
                        Process Validation & Triage.
                      </p>
                    </div>
                  </div>
                  <div className=" rpa_box_left">
                    <div className="rpa_imgs">
                      <img src={RPA_PILOT} alt="" />
                    </div>
                    <div className="rpa_heading">
                      <h4> RPA PILOCT & POC 
</h4>

                      <p>
                      Identification & Shortlisting of the use case <br />
Proof of concept creation & Prototyping. <br />
RPA Pilot & Enterprise Automation Roadmap (Creation & Blueprint).
<br />
                      </p>
                    </div>
                  </div>
                </div>

                {/* right box rpa */}
                <div className="col-md-6 right_boxes_rpa">
                  <div className=" rpa_box_right">
                    <div className="rpa_imgs">
                      <img src={RPA_DELIVERY} alt="" />
                    </div>
                    <div className="rpa_heading">
                      <h4>RPA DELIVERY</h4>

                      <p>
                      Automation Scripting. <br />
Attended, Unattended, Hybrid Bots. <br />
Robot Training. <br />
Robot Testing. <br />
Robot Deployment.
                      </p>
                    </div>
                  </div>
                  <div className=" rpa_box_right">
                    <div className="rpa_imgs">
                      <img src={RPA_BOT} alt="" />
                    </div>
                    <div className="rpa_heading">
                      <h4>RPA BOT SUPPORT</h4>

                      <p>
                      Level 1 Support <br />
L2 2 Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* why skashath starts */}
      <WhySakshath />
      {/*  why skashath ends */}
    </>
  );
};

export default Automation;
