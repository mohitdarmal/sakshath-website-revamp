import React, { useState } from "react";
import { ABOUT_BANNER } from "../../../Components/Breadcumb/Constant";
import BreadCumb from "../../../Components/Breadcumb";
import Heading from "../../../Components/Utils/Heading";
// import Heading from "../Utils/Heading";
import { CONTACT_IMG_OVERVIEW, MOBILITY_SEC2,MOBILITY_BRAED_CRUM } from "./Constant";
import "./Style.scss";
// import Faq from "../../../Components/Faq";
// import Heading from "../Utils/Heading";
import { Accordion } from "react-bootstrap";
import SubTitle from "../../../Components/Utils/Title_head";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Mobility = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const faqcontent = [
    {
      id: 1,
      heading: "Improved Productivity",
      description:
        " Employees can access work tools from anywhere, reducing time spent in a permanent office1.",
    },
    {
      id: 2,
      heading: "Enhanced Customer Experiences",
      description:
        " Reach and engage customers anytime, anywhere, and on any device.",
    },
    {
      id: 3,
      heading: "Streamlined Workflows",
      description:
        "Digitize business communications and engagements carried out by field agents, increasing sales revenues",
    },
  ];

  useState(() => {
    setFaqData(faqcontent);
  }, []);

  const handleAccordionClick = (index) => {
    console.log(index, "inddd");
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
     
 <BreadCumb imgUrl={MOBILITY_BRAED_CRUM}
      // title="Enterprise Mobility"
       />


      <section className="mobility_overview_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="mobility_overview">
                <Heading heading="Empowering Your Business with Enterprise Mobility Solutions" />
                <p>
                  At Sakshath Technologies NZ, we’re committed to driving
                  excellence in your business by leveraging our smarter
                  enterprise mobility solutions. Our goal is to transform your
                  organization, advance your existing systems, and minimize
                  associated IT risks. With our enhanced services, you can
                  embrace mobility, engage customers, enhance workforce
                  productivity, streamline workflows, and drive overall business
                  performance.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mobility_overview_img_right">
                {/* <img src={CONTACT_IMG_OVERVIEW} alt="" /> */}
                <Link to="/contact-us">
                  <h4>
                    Contact us &nbsp; &nbsp; <FaArrowRightLong />{" "}
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobility_enterprise_service_section">
        <div className="container">
          <div className="row text-center">
            <Heading heading="Our Comprehensive Enterprise Mobility Services" />
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="mobility_service_box">
                <h5>SOTI MobiControl</h5>
                <p>
                  SOTI MobiControl is a powerful Enterprise Mobility
                  Management (MDM) tool which helps for B2B (business-to-business)
                  conditions. It provides a comprehensive set of features to
                  assist businesses by effectively managing and protecting their
                  mobile device fleet, streamlining operations, and increasing
                  productivity.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mobility_service_box">
                <h5>Microsoft Intune</h5>
                <p>
                  Microsoft Intune is a cloud-based tool that helps enterprise mobility management and versatile application management.


                  Microsoft Intune enables businesses to manage and secure their
                  mobile devices, apps, and data regardless of the platform or
                  location of the device. It was designed specifically for B2B
                  (business-to-business) environments.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mobility_service_box">
                <h5> VMware Workspace ONE</h5>
                <p>
                  VMware Workspace ONE enables businesses to safely administer
                  and distribute any application to any device. Workspace ONE,
                  designed specifically for B2B (business-to-business) settings,
                  provides an extensive feature set to improve security,
                  simplify device administration, and maximise user experience
                  across desktop, mobile, and IoT endpoints.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mobility_service_box">
                <h5>Jamf Pro</h5>
                <p>
                  Jamf Pro is the best option for efficient Apple device
                  administration. Businesses can now manage their Apple
                  environment like never before with Jamf Pro, which guarantees
                  smooth device deployment, strong security, and maximum
                  productivity. Jamf Pro, which is trusted by businesses all
                  over the world, enables IT managers to effectively manage,
                  secure, and support Apple devices on a large scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="faq_section">
        <div className="container">
          <div className="row">
         
            <div className="faq_content_box">
              <div className="faq_content">
                <div className="text-center faq_heading">
                  <Fade direction="up" triggerOnce>
           
                  </Fade>
                  <Fade direction="up" triggerOnce>
                   
                  </Fade>
                </div>
                <Fade direction="up" triggerOnce>
                  {faqData.map((data, ind) => {
                    return (
                      <>
                        <Accordion key={ind} activeKey={activeIndex}>
                          <Accordion.Item eventKey={ind}>
                            <Accordion.Header
                              className="question_button"
                              onClick={() => handleAccordionClick(ind)}
                            >
                              <BsFillQuestionCircleFill /> {data.heading}
                            </Accordion.Header>
                            <Accordion.Body>{data.description}</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </>
                    );
                  })}

                 
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="benefit_mobi_section">
        <div className="container">
          <div className="row mt-4 mb-4 text-center">
            <Heading heading="Benefits of Enterprise Mobility Solutions "></Heading>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="benefits_mobi_box">
                    <h5>Improved Productivity</h5>
                    <p>
                      Employees can access work tools from anywhere, reducing
                      time spent in a permanent office.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefits_mobi_box">
                    <h5>Enhanced Customer Experiences</h5>
                    <p>
                      Reach and engage customers anytime, anywhere, and on any
                      device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="benefits_mobi_box">
                    <h5>Streamlined Workflows</h5>
                    <p>
                      Digitize business communications and engagements carried
                      out by field agents, increasing sales & revenues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits_mobi_img">
                <img
                  src={MOBILITY_SEC2}
                  alt=""
                  width="450px"
                  height="335px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobility;
