import React, { useState, useEffect } from "react";
import BreadCumb from "../../../Components/Breadcumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TrustedBy from "../../../Components/TrustedBy";
import {
  APPLICATION_DEVLOPMENT_BREADCUMB_IMG,
  APP_DEV_IMG,
  CONTACT_US,
  COST_EFFECTIVE_SERVICES,
  DAILY_REPORT,
  DEDICATED_SUPPORT,
  EXPERIENCED_APP_DEVELOPERS,
  MOBILE_APP_DEVELOPMENT,
  NO_OVERHEADS,
  PDF_FILE,
  PEACE_OF_MIND,
  QUALITY_ASSURANCE,
  SMOOTH_COMMUNICATION,
} from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import "./styles.scss";
import HappyClients from "../../../Components/HappyClients";
import pdfUrl from "../../../Assets/pdf/dummy.pdf";
import PdfViewer from "../../../Components/PdfViewer";
import { FaFilePdf } from "react-icons/fa";
import BrouchurePopup from "../../../Components/BoruchurePopup";
import Faq from "../../../Components/Faq";
import ServiceContactForm from "../../../Components/ServiceContactForm";
import { Fade } from "react-awesome-reveal";

// import servicePopup from "../../../Components/ServicePopup";
import ServicePopup from '../../../Components/ServicePopup'

const ApplicationDevelopment = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Application Development"
      />

<ServicePopup  popUpHeading={
  "Application Development Popup"
  
}/>


      {/* @@@@@ SECTION- App Development Start @@@@@@ */}
      <section className="why_choose_app_dev_sec">
        <div className="container">
          {/* Heading start */}
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center app_dev_heading">
              <Fade direction="up" triggerOnce>
                <Heading
                  heading="Why choose Sakshath Technologies for app development?"
                  uppercase=""
                />
              </Fade>
            </div>
          </div>
          {/* Heading end */}

          {/* App devlopment details start */}
          <div className="row mt-md-5 align-items-center why_choose_app_dev_content">
            <div className="col-md-6 ipad_full_width">
              <Fade direction="up" triggerOnce>
                <div className="row why_choose_app_dev_icon_content">
                  <div className="col-md-6">
                    {/* Start */}
                    <div className="app_dev_icon_with_text">
                      <div>
                        <img src={EXPERIENCED_APP_DEVELOPERS} />
                      </div>
                      <div>
                        <h5>
                          Experienced <br />
                          App Developers{" "}
                        </h5>
                      </div>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="app_dev_icon_with_text">
                      <div>
                        <img src={COST_EFFECTIVE_SERVICES} />
                      </div>
                      <div>
                        <h5>
                          Cost-Effective <br />
                          Services{" "}
                        </h5>
                      </div>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="app_dev_icon_with_text">
                      <div>
                        <img src={DEDICATED_SUPPORT} />
                      </div>
                      <div>
                        <h5>
                          24*7 <br />
                          Dedicated Support{" "}
                        </h5>
                      </div>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="app_dev_icon_with_text">
                      <div>
                        <img src={QUALITY_ASSURANCE} />
                      </div>
                      <div>
                        <h5>
                          100% <br />
                          Quality Assurance{" "}
                        </h5>
                      </div>
                    </div>
                    {/* End */}
                  </div>

                  <div className="col-md-6 ">
                    {/* Start */}
                    <div className="app_dev_icon_with_text">
                      <div>
                        <img src={PEACE_OF_MIND} />
                      </div>
                      <div>
                        <h5>
                          Complete <br />
                          Peace of Mind{" "}
                        </h5>
                      </div>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="app_dev_icon_with_text">
                      <div>
                        <img src={DAILY_REPORT} />
                      </div>
                      <div>
                        <h5>
                          Daily/Weekly/Monthly <br />
                          Reporting{" "}
                        </h5>
                      </div>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="app_dev_icon_with_text">
                      <div>
                        <img src={SMOOTH_COMMUNICATION} />
                      </div>
                      <div>
                        <h5>
                          Transparent & <br />
                          Smooth Communication{" "}
                        </h5>
                      </div>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="app_dev_icon_with_text">
                      <div>
                        <img src={NO_OVERHEADS} />
                      </div>
                      <div>
                        <h5>
                          No Hidden Costs, <br />
                          No Overheads{" "}
                        </h5>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                </div>
              </Fade>
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-5 ipad_full_width">
              <img className="w-100" src={APP_DEV_IMG} />
            </div>
          </div>
          {/* App devlopment details end */}
        </div>
      </section>
      {/* @@@@@ SECTION- App Development end @@@@@@ */}

      {/* @@@@@@ SECTION - Happy client counter starts @@@@@*/}
      <HappyClients />
      {/* @@@@@ SECTION- Happy client counter end @@@@@@ */}

      {/* @@@@@@ SECTION - Our Services starts @@@@@*/}
      <section className="our_services_sec">
        <div className="container">
          <div className="row text-center mb-md-4">
            <Fade direction="up" triggerOnce>
              <Heading heading="Our Services" uppercase="" />
            </Fade>
          </div>
          <Fade direction="up" triggerOnce>
            <div className="row">
              <div className="col-md-4 ipad_half_width">
                <div className="our_services_box">
                  <div className="our_services_box_content">
                    <div className="our_services_box_img">
                      <img src={MOBILE_APP_DEVELOPMENT} />
                    </div>
                    <h3>Mobile App Development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ipad_half_width">
                <div className="our_services_box">
                  <div className="our_services_box_content">
                    <div className="our_services_box_img">
                      <img src={MOBILE_APP_DEVELOPMENT} />
                    </div>
                    <h3>Web Application Development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ipad_half_width">
                <div className="our_services_box">
                  <div className="our_services_box_content">
                    <div className="our_services_box_img">
                      <img src={MOBILE_APP_DEVELOPMENT} />
                    </div>
                    <h3>Dedicated App Development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ipad_half_width">
                <div className="our_services_box">
                  <div className="our_services_box_content">
                    <div className="our_services_box_img">
                      <img src={MOBILE_APP_DEVELOPMENT} />
                    </div>
                    <h3>Cloud App Development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ipad_half_width">
                <div className="our_services_box">
                  <div className="our_services_box_content">
                    <div className="our_services_box_img">
                      <img src={MOBILE_APP_DEVELOPMENT} />
                    </div>
                    <h3>Re-Engineering Migration & Maintainace</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ipad_half_width">
                <div className="our_services_box">
                  <div className="our_services_box_content">
                    <div className="our_services_box_img">
                      <img src={MOBILE_APP_DEVELOPMENT} />
                    </div>
                    <h3>Application Testing & QA</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* @@@@@ SECTION- Our Services end @@@@@@ */}
      <TrustedBy />

      {/* @@@@@ SECTION- Our Platform start @@@@@@ */}

      {/* @@@@@ SECTION- Our Platform end @@@@@@ */}

      {/* @@@@@ SECTION- Brouchure Start @@@@@@ */}
      <section className="brouchure_sec">
        <div className="container">
          <div className="text-center mb-3 pb-md-3">
            <Fade direction="up" triggerOnce>
              <Heading heading="Brouchure" uppercase="" />
            </Fade>
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

      <section className="service_page_contact_form">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <ServiceContactForm />
            </div>
            <div className="col-md-5">
              <div className="contact_heading">
                <Fade direction="up" triggerOnce>
                  <Heading heading="Contact Us" uppercase="" />
                </Fade>
                <Fade direction="up" triggerOnce>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_us_bg">
        <img src={CONTACT_US} className="w-100" />
      </section>

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

      {/* <servicePopup/> */}
    </>
  );
};

export default ApplicationDevelopment;
