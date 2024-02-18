import React, { useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import "./style.scss";
import {
  INTEGRATION_SECTION_ONE_IMG,
  INTEGRATION_SECTION_THREE_IMG,
  SECTION_THREE_ICON_ONE,
  SECTION_THREE_ICON_TWO,
  SECTION_THREE_ICON_THREE,
} from "./Constant";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ServiceStickMenu from "../../../Components/ServiceStickMenu";
import {
  CLIENT_LOGO1,
  CLIENT_LOGO2,
  CLIENT_LOGO3,
  CLIENT_LOGO4,
  CLIENT_LOGO5,
} from "../../../Components/ClientLogo/Constant";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Faq from "../../../Components/Faq";
import BrouchurePopup from "../../../Components/BoruchurePopup";
import pdfUrl from "../../../Assets/pdf/dummy.pdf";
import { FaFilePdf } from "react-icons/fa";
//import {SECTION_VECTOR} from "../../Assets/images/check icon psd.png";
import {
  SOFTWARE_LOGO_1,
  SOFTWARE_LOGO_2,
  SOFTWARE_LOGO_3,
  SOFTWARE_LOGO_4,
  SOFTWARE_LOGO_5,
  SOFTWARE_LOGO_6,
  SOFTWARE_LOGO_7,
  SOFTWARE_LOGO_8,
  SOFTWARE_LOGO_9,
  SOFTWARE_LOGO_10,
  SOFTWARE_LOGO_11,
  SECTION_VECTOR,
} from "./Constant";
import PdfViewer from "../../../Components/PdfViewer";
import Heading from "../../../Components/Utils/Heading";
import BreadCumb from "../../../Components/Breadcumb";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../ApplicationDevelopment/Constant";
export const Integration = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        className="img-fluid"
        title="Integration"
      />
      {/* <!-- section one start --> */}
      <section className="overview_sec">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 ipad_full_width">
              <div className="overview_sec_left">
              <Heading
                heading="Overview"
                uppercase="text-uppercase"
              />
                <p className="sec_para">
                  Data integration is the practice of consolidating data from
                  disparate sources into a single dataset to provide users with
                  consistent access to and delivery of data across all business
                  processes.
                </p>
                <SlideAnimationButton btnName="TALK TO SALES" to="/contact-us" />
              </div>
            </div>

            <div className="col-md-6 ipad_full_width">
              <div className="overview_sec_right_img">
                <img
                  className="img-fluid integration_img_left"
                  src={INTEGRATION_SECTION_ONE_IMG}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- section one end --> */}

      {/* section four start */}

      <section className="partner_logo_section">
        <div className="container partner_logo_tab">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper" 
            >
            <SwiperSlide>
              <img src={CLIENT_LOGO1}  />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO2}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO3}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO4}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO5}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO3}  />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </section>

      {/* <!-- section two start --> */}
      <section className="why_need_integration_sec">
        <div className="container">
          <div className="row align-items-center">
            <div class="col-md-6  why_need_integration_left ipad_full_width">
              <div>
                <img
                  className="img-fluid integration_img_right"
                  src={INTEGRATION_SECTION_ONE_IMG}
                />
              </div>
            </div>
            <div className="col-md-6 why_need_integration_right ipad_full_width">
              <Heading
                heading="Why do you need integration?"
                uppercase="text-uppercase"
              />
              <p className="sec_para">
                Inhouse application integration: application to application –
                inhouse (running on cloud or on-premises) Business application
                integration to software as a service provider using SOAP or REST
                Business 2 Business application integration: connecting to
                third-party or partner Integration of application to IoT Devices{" "}
              </p>
              {/* <SlideAnimationButton btnName="TALK TO SALES" /> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- section two end -->

            <!-- section three start--> */}
      {/* <section className="body_sec_two">
                <div className="container">
                    <div className="row">
                        <div class="col-md-6">

                            <p className="data-visualization-para"></p>
                            <img src={INTEGRATION_SECTION_THREE_IMG} class="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="heading-1">Next-level data visualization.</h3>
                            <p className="paragraph-1 ">Go from boring, static charts to vibrant, interactive dashboards that
                                give your data context and produce intuitive insights.</p>
                           
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_ONE} class="img-fluid" />
                                </div>
                                <div className="section_para">
                                    <h4>Create personalized and customizable</h4>
                                    <p>visualizations with no advanced skills required.</p>
                                </div>
                            </div>

                            
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_TWO} class="img-fluid" />
                                </div>
                                <div className="section_para">
                                    <h4>Build dashboards</h4>
                                    <p>that tell a story and encourage exploration.</p>
                                </div>
                            </div>

                    
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_THREE} class="img-fluid" />
                                </div>
                                <div className="section_para">
                                    <h4>Make your visualizations available</h4>
                                    <p>instantly on mobile devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* <!-- section three end --> */}

      {/* section navbar start */}

      <ServiceStickMenu integration_consult="integration_consult" />

      {/* section navbar end */}

      {/* section five start */}
      <ScrollSpy>
      <div id="first">
      <section className="integartion_coe_sec" id="">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="body_sec_three_parent"> */}
            <div className="col-md-6 integration_coe_left ipad_full_width">
              <Heading
                heading="Integration COE"
                uppercase="text-uppercase"
              />

              <p>
                End the days of emailing spreadsheets around and reviewing stale
                data in meetings.
              </p>
              <ul className="intergration_list">
                <li>CERTIFIED RESOURCES</li>
                <li>RESUABLE ASSETS</li>
                <li>INDUSTRY STANDARD BEST PRACTISES</li>
                <li>QUALITY ASSURANCE </li>
              </ul>
            </div>
            <div className="col-md-6 integration_coe_right ipad_full_width">
              <img
                className="img-fluid integration_img"
                src={INTEGRATION_SECTION_ONE_IMG}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      </div>
      </ScrollSpy>
      {/* section five end */}

      {/* integration planning banner start */}
      <section className="integration_planning_banner">
        <div className="container">
          <div className="row integration_planning_banner_content_box align-items-center">
            <div className="col-md-9 ipad_full_width">
              <div className="integration_left_planning_banner_content">
                <Fade direction="up" triggerOnce>
                  {" "}
                  <h3>
                    Full Truckload Planning Reimagined Experts in Security
                    Dynamic Load Planning & Dispatching
                  </h3>{" "}
                </Fade>
              </div>
            </div>
            <div className="col-md-3 button_box ipad_full_width">
              <div className="integration_right_planning_banner_content text-md-end">
                <Fade direction="up" delay={300} triggerOnce>
                  {" "}
                  <Link className="integration_lets_meet_us_button">
                    Let's meet us{" "}
                  </Link>{" "}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  integartion planning banner end*/}

      {/* section six start */}
      <ScrollSpy>
      <div id="second">
        

      <section className="integration_consulting_sec" id="integration_consult">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ipad_full_width">
              <div className="integration_consulting_left">
                <img
                  className="img-fluid integration_consulting_img"
                  src={INTEGRATION_SECTION_ONE_IMG}
                />
              </div>
            </div>
            <div className="col-md-6 ipad_full_width">
              <div className="integration_consulting_right">
                <Heading
                heading="Integration Consulting "
                uppercase="text-uppercase"
              />
                
                <p>
                  End the days of emailing spreadsheets around and reviewing
                  stale data in meetings.
                </p>

                <div className="row ">
                  <div className="col-md-6 ipad_full_width">
                    <div className="intergration_list">
                      <ul>
                        <li>Service Based Integration</li>
                        <li>API Gateway/Manager</li>
                        <li>Market Place Integration</li>
                        <li>
                          Inbuild connectors/ custom built connectors or
                          adapters
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 ipad_full_width">
                    <div className="intergration_list">
                      <ul>
                        <li>Social Integration</li>
                        <li>Pluggable Adapters</li>
                        <li>Enterprise Service Bus Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </ScrollSpy>

      {/* section software logo start */}
      <ScrollSpy>
      <div id="third">
      <section className="software_logo_section">
        <div className="container software_logo_tab">
          <div className="Migration_Services ">
            <Heading
                heading="Migration Technologies"
                uppercase="text-uppercase"
              />
          </div>
          <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam culpa provident asperiores </p>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper">
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_1} />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_8} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_9} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_10} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SOFTWARE_LOGO_11} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      </div>
      </ScrollSpy>

      {/* section software logo end */}

      {/* managed service start */}
      <ScrollSpy>
      <div id="four">
      <section className="managed_services_sec">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="body_sec_three_parent"> */}
            <div className="col-md-6 managed_services_left ipad_full_width">
                  <Heading
                    heading="Managed services"
                    uppercase="text-uppercase"
                   
                  />
              <p>
                End the days of emailing spreadsheets around and reviewing stale
                data in meetings.
              </p>
              <ul className="intergration_list">
                <li>
                  Request Validation – validation of the request
                  (whitelisted/blacklisted)
                </li>
                <li>
                  Authentication and Authorization (credential verification)
                </li>
                <li>
                  Service Discovery Locate the appropriate backend service
                </li>
                <li>
                  Protocol Translation – translation of protocol (e.g gRPC
                  request to REST or other)
                </li>
                <li>
                  Dynamic Routing (routing to the appropriate service request or
                  LB)
                </li>
              </ul>
            </div>
            <div className="col-md-6 managed_services_right ipad_full_width">
              <img
                className="img-fluid integration_img"
                src={INTEGRATION_SECTION_ONE_IMG}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      </div>
      </ScrollSpy>
      {/*  managed service end*/}

      {/* @@@@@ SECTION- Brouchure Start @@@@@@ */}
      <section className="brouchure_sec">
        <div className="container">
          <div className="text-center mb-3 pb-md-3">
            <Heading heading="Brouchure" uppercase="text-uppercase" />
          </div>
          <PdfViewer pdfUrl={pdfUrl} />
          <div className="downloadBrouchure">
            <p
              onClick={() => {
                setShowModal(true);
              }}
            >
              <FaFilePdf /> Download Brouchure{" "}
            </p>
          </div>
        </div>
        <BrouchurePopup show={showModal} onHide={handleCloseModal} />
      </section>
      {/* @@@@@ SECTION- Brouchure end @@@@@@ */}

      {/* Faq start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-1"> </div>
            <div className="col-md-10">
              <Faq />
            </div>
            <div className="col-md-1"> </div>
          </div>
        </div>
      </section>
      {/* Faq end */}
      
    </>
  );
};

export default Integration;
