import React, { useEffect, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { Element, scroller } from 'react-scroll';
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
  CLIENT_LOGO6,
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

const menu = [{
  id:"integrationCoe",
  title:"Integration COE"
},
{
  id:"integrationConsult",
  title:"Integration Consulting"
},
{
  id:"migrationTecnology",
  title:"Migration Technology"
},
{
  id:"managedService",
  title:"Managed Services"
}
]



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
            <Fade direction="up" delay={300} triggerOnce>
              <div className="overview_sec_left">
              
              <Heading
                heading="Overview"
              />
              
                <p className="sec_para">
                Data integration is the practice of consolidating data from disparate sources into a single dataset to provide users with consistent access to and delivery of data across all business processes.
                 Unlock seamless integration solutions with our expert consulting and managed services. 
                 Say goodbye to integration headaches and hello to optimized workflows.
                </p>
                <SlideAnimationButton btnName="Get started now!" url="/contact-us"/>
              </div>
              </Fade>
            </div>

            <div className="col-md-6 ipad_full_width">
            {/* <Fade direction="up" delay={300} triggerOnce> */}
              <div className="overview_sec_right_img">
                <img
                  className="img-fluid integration_img_left"
                  src={INTEGRATION_SECTION_ONE_IMG}
                />
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- section one end --> */}

      {/* section four start */}

      <section className="partner_logo_section">
      
     
        <div className="container partner_logo_tab">
          <div className="text-center">
          <Heading
                heading="Trusted By"
              />
          </div>
          
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
              <img src={CLIENT_LOGO6}  />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </section>

      {/* <!-- section two start --> */}
      { <section className="why_need_integration_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6  why_need_integration_left ipad_full_width">
            {/* <Fade direction="up" delay={300} triggerOnce> */}
              <div>
                <img
                  className="img-fluid integration_img_right"
                  src={INTEGRATION_SECTION_THREE_IMG}
                />
              </div>
              {/* </Fade> */}
            </div>
            <div className="col-md-6 why_need_integration_right ipad_full_width">
            <Fade direction="up" delay={300} triggerOnce>
              <Heading
                heading="Why do you need integration?"
                
              />
              <p className="sec_para">
                Inhouse application integration: application to application –
                inhouse (running on cloud or on-premises) Business application
                integration to software as a service provider using SOAP or REST
                Business 2 Business application integration: connecting to
                third-party or partner Integration of application to IoT Devices{" "}
              </p>
              </Fade>
            </div>
          </div>
        </div>
      </section> }
       {/* <!-- section two end --> */}

            {/* <!-- section three start-->  */}
      {/* <section className="body_sec_two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <p className="data-visualization-para"></p>
                            <img src={INTEGRATION_SECTION_THREE_IMG} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="heading-1">Next-level data visualization.</h3>
                            <p className="paragraph-1 ">Go from boring, static charts to vibrant, interactive dashboards that
                                give your data context and produce intuitive insights.</p>
                           
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_ONE} className="img-fluid" />
                                </div>
                                <div className="section_para">
                                    <h4>Create personalized and customizable</h4>
                                    <p>visualizations with no advanced skills required.</p>
                                </div>
                            </div>

                            
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_TWO} className="img-fluid" />
                                </div>
                                <div className="section_para">
                                    <h4>Build dashboards</h4>
                                    <p>that tell a story and encourage exploration.</p>
                                </div>
                            </div>

                    
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_THREE} className="img-fluid" />
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

      <ServiceStickMenu 
        pageName="Integration"
        menuName={menu}
      />

      {/* section navbar end */}

      {/* section five start */}
      <ScrollSpy>
      <div id="integrationCoe">
      <Element name="integrationCoe">
      <section className="integartion_coe_sec" >
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="body_sec_three_parent"> */}
            <div className="col-md-6 integration_coe_left ipad_full_width">
            <Fade direction="up" delay={300} triggerOnce>
              <Heading
                heading="Integration COE"
                
              />

              <p>
              Embrace the full potential of Integration Centers of Excellence (COE) to revolutionize your workplace through innovation and collaboration.
              </p>
              <ul className="intergration_list">
                <li> Cerified Resources</li>
                <li> Resuable Assets</li>
                <li> Industry Standard Best Practises</li>
                <li> Quality Assurance</li>
              </ul>
              </Fade>
            </div>
            <div className="col-md-6 integration_coe_right ipad_full_width">
            {/* <Fade direction="up" delay={300} triggerOnce> */}
              <img
                className="img-fluid integration_img"
                src={SECTION_THREE_ICON_ONE}
              />
              {/* </Fade> */}

            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      </Element>
      </div>
      
      {/* section five end */}

      {/* integration planning banner start */}
      <section className="integration_planning_banner">
        <div className="container">
          <div className="row integration_planning_banner_content_box align-items-center">
            <div className="col-md-9 ipad_full_width">
              <div className="integration_left_planning_banner_content">
              <Fade direction="up" delay={300} triggerOnce>
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
    
      <div id="integrationConsult">
      <Element name="integrationConsult">
      <section className="integration_consulting_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ipad_full_width">
            {/* <Fade direction="up" delay={300} triggerOnce> */}
              <div className="integration_consulting_left">
                <img
                  className="img-fluid integration_consulting_img"
                  src={SECTION_THREE_ICON_TWO}
                />
              </div>
              {/* </Fade> */}
            </div>
            <div className="col-md-6 ipad_full_width">
            <Fade direction="up" delay={300} triggerOnce>
              <div className="integration_consulting_right">
                <Heading
                heading="Integration Consulting "
                
              />
                
                <p>
                Our seasoned consultants bring years of experience to the table,
                 offering personalized guidance to ensure your integration journey is smooth and successful.
                  Streamlining Operations Through Integration Consulting
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
              </Fade>
            </div>
          </div>
        </div>
      </section>
      </Element>
      </div>
     

      {/* section software logo start */}
      <div id="migrationTecnology">
      <Element name="migrationTecnology">
      <section className="software_logo_section">
        <div className="container software_logo_tab">
          <div className="Migration_technologies ">
            <Heading
                heading="Migration Technologies"
               
              />
          </div>
          <p className="Migration_technologies_para">Our solutions turn obstacles into opportunities, unlocking new possibilities for innovation, efficiency, and growth.Transform with Our Migration Assistance</p>
          {/* <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"> */}
             <Swiper
              slidesPerView={5}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                481: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
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
      </Element>
      </div>

      {/* section software logo end */}

      {/* managed service start */}
      <div id="managedService"> 
      <Element name="managedService">
      <section className="integration_managed_services_sec">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="body_sec_three_parent"> */}
            <div className="col-md-6 integration_managed_services_left ipad_full_width">
            <Fade direction="up" delay={300} triggerOnce>
                  <Heading
                    heading="Managed services"
                    
                   
                  />
              <p>
              Our managed integration services allow you to offload the complexities of integration, freeing up your time and resources for strategic initiatives.

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
              </Fade>
            </div>
            <div className="col-md-6 managed_services_right ipad_full_width">
            {/* <Fade direction="up" delay={300} triggerOnce> */}
              <img
                className="img-fluid integration_img"
                src={SECTION_THREE_ICON_THREE}
              />
              {/* </Fade> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      </Element>
      </div>
     
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
      </ScrollSpy>
    </>
  );
};

export default Integration;
