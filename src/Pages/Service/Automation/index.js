import React from "react";
import "./style.scss";
import {
  ANDRIOD_APP,
  AUTOMATE_RPA,
  AUTOMATION_BG_IMG,
  CHECK_ICON,
  //   CLIENT_LOGO1,
  //   CLIENT_LOGO2,
  //   CLIENT_LOGO3,
  //   CLIENT_LOGO4,
  //   CLIENT_LOGO5,
  CROSS_PLATFORM_APP,
  DEVOPS,
  FLOW_CENTRIC_RPA,
  IOS_APPLE,
  POWER_AUTOMATE_RPA,
  //   POWER_AUTOMATE_RPA4,
  PRISMS_RPA,
  RPA_ADVISORY,
  RPA_BOT,
  RPA_DELIVERY,
  RPA_PILOT,
  UI_PATH_RP,
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BreadCumb from "../../../Components/Breadcumb"
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../ApplicationDevelopment/Constant";

const Automation = () => {
  return (
    <>

<BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Automation"
      />

      {/* automation starts */}
      <section className="automation">
        <div className="container">
          <div className="row align-items-center">
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

<div className="row">
<div className="col-md-6">
<div className="automation_right_content_list">
                <ul>
                 

                  <li> Hybrid Integration</li>
                  <li> Services- Based Integration</li>
                  <li> API Gateway/Manager</li>
                  <li> Open API business strategy for monetization of APIs</li>
                </ul>
              </div>
</div>

<div className="col-md-6">
<div className="automation_right_content_list">
                <ul>
                
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
          </div>
        </div>
      </section>

      <section className="pillar_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 ">
              <div className="pillar_heading">
                {/* <Heading heading="4  Pillars of sakshath" /> */}
                <Heading
                heading="4 PILLARS OF SAKSHATH"
                uppercase="text-uppercase"
              /> 
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <h5>Android Development</h5>
              </div>
              {/* </div> */}
            </div>
            <div className="col-md-4 ios_app">
              {/* <div className="mobile_application"> */}
              <div className="mobile_application_img">
                <img src={IOS_APPLE} alt="" />
              </div>
              <div className="mobile_application_heading">
                <h5>iOS Development</h5>
                {/* </div> */}
              </div>
            </div>
            <div className="col-md-4 cross_platform">
              <div className="mobile_application_img">
                <img src={CROSS_PLATFORM_APP} alt="" />
              </div>
              <div className="mobile_application_heading">
                <h5>Cross Platform Development</h5>
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

                <li>In-Built Connectors, Enterprise Service Bus (ESB), Pluggable Adaptors. </li>

                {/* <li>Enterprise Service Bus (ESB)</li>
                <li>Pluggable Adaptors</li> */}
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
      <section className="rpa_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="rpa_main_heading">
                <Heading heading="RPA" uppercase="text-uppercase" />
                <h4> Robotic Process Automation</h4>

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
              <Heading heading="RPA OFFERINGS" uppercase="text-uppercase" />
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
                        Standard Operation Procedure (SOP’s).
                      </p>
                    </div>
                  </div>
                  <div className=" rpa_box_left_down">
                    <div className="rpa_imgs">
                      <img src={RPA_PILOT} alt="" />
                    </div>
                    <div className="rpa_heading">
                      <h4> RPA PILOCT & POC</h4>

                      <p>
                        Identification & Shortlisting of the use case <br />
                        Proof of concept creation & Prototyping. <br />
                        RPA Pilot & Enterprise Automation Roadmap (Creation &
                        Blueprint).
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
                        Robot Testing.
                      </p>
                    </div>
                  </div>
                  <div className=" rpa_box_right_down">
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

      {/* RPA TOOLS STARTS */}

      <section className="rpa_tools_section">
        <div className="rpa_tools_main_heading text-center">
          <Heading heading="Rpa Tools" uppercase="text-uppercase" />
        </div>
        <div className="container rpa_tools_logos">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={PRISMS_RPA} />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img src={UI_PATH_RP} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={POWER_AUTOMATE_RPA} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={AUTOMATE_RPA} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={FLOW_CENTRIC_RPA} />
            </SwiperSlide>

            {/* <SwiperSlide><img src={CLIENT_LOGO4} /></SwiperSlide> */}
            {/* <SwiperSlide><img src={CLIENT_LOGO3} /></SwiperSlide>
            <SwiperSlide><img src={CLIENT_LOGO4} /></SwiperSlide>
            <SwiperSlide><img src={CLIENT_LOGO5} /></SwiperSlide>
            <SwiperSlide><img src={CLIENT_LOGO2} /></SwiperSlide>
            <SwiperSlide><img src={CLIENT_LOGO3} /></SwiperSlide>
            <SwiperSlide><img src={CLIENT_LOGO4} /></SwiperSlide> */}
          </Swiper>
        </div>
      </section>

      {/* RPA TOOLS ENDS */}

      {/* why skashath starts */}
      <WhySakshath />
      {/*  why skashath ends */}

      {/* <section>
        <div className="container">
          <div className="snipper"></div>
        </div>
      </section> */}

      <section className="devops_section">
        <div className="container devops_container">
          <div className="row ">
            {/* <div className="col-md-12">
                <div className="devops_testing-img">
                <img
                  src={DEVOPS}
                  alt=""
                 
                />
                </div>
            </div> */}
            <div className="col-md-8 offset-md-2">
              <div className="devops_testing_right_content">
                {/* <h2>
                DevOps/Testing
                </h2> */}
                <Heading heading="Devops Testing" uppercase="text-uppercase" />
                <p>
                  In transforming Testing to the world of Agile and DevOps,
                  Sakshath has been at the forefront of providing best-in-class,
                  tailored “QA Testing Services”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="devops_section">
        <div className="container">
          <div className="row">
            <div className="devops_heading_main text-center">
              <Heading heading="Devops Service " uppercase="text-uppercase" />
            </div>

            <div className="col-md-3 devops_boxes">
              <div className="devops_list_box">
                <ul className="devops_ul">
                  <li>Functional Testing</li>
                  <li>Unit Testing</li>

                  <li>Integration</li>
                  <li>UAT Testing</li>
                  <li>Regression Testing</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 devops_boxes">
              <div className="devops_list_box">
                <ul>
                  <li>Test Automation</li>
                  <li>Installation & Scripting</li>

                  <li>Integration</li>
                  <li>Code/Codeless testing</li>
                  <li>Scalable framework</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 devops_boxes">
              <div className="devops_list_box">
                <ul>
                  <li>Microservice & API testing</li>
                  <li>UI & Functional testing</li>

                  <li>Security, Run Time & Error Detection/Penetration</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 devops_boxes">
              <div className="devops_list_box">
                <ul>
                  <li>Microservice & API testing</li>
                  <li>UI & Functional testing</li>

                  <li>Security, Run Time & Error Detection/Penetration</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 devops_boxes">
              <div className="devops_list_box">
                <ul>
                  <li>Microservice & API testing</li>
                  <li>UI & Functional testing</li>

                  <li>Security, Run Time & Error Detection/Penetration</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 devops_boxes">
              <div className="devops_list_box">
                <ul>
                  <li>Microservice & API testing</li>
                  <li>UI & Functional testing</li>

                  <li>Security, Run Time & Error Detection/Penetration</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 devops_boxes">
              <div className="devops_list_box">
                <ul>
                  <li>Microservice & API testing</li>
                  <li>UI & Functional testing</li>

                  <li>Security, Run Time & Error Detection/Penetration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sakshath starts*/}
      <WhySakshath />
      {/* why sakshath ends */}
    </>
  );
};

export default Automation;
