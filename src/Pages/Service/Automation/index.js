import React from "react";
import "./style.scss";
import { Element, scroller } from "react-scroll";
import {
  ANDRIOD_APP,
  API_IMG,
  AUTOMATE_RIGHT_IMG1,
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
  RPA_GRAPH,
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
import BreadCumb from "../../../Components/Breadcumb";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../ApplicationDevelopment/Constant";
import ServiceStickMenu from "../../../Components/ServiceStickMenu";
import {
  CLIENT_LOGO1,
  CLIENT_LOGO2,
  CLIENT_LOGO3,
  CLIENT_LOGO4,
  CLIENT_LOGO5,
  CLIENT_LOGO6,
} from "../../../Components/ClientLogo/Constant";
import { INTEGRATION_SECTION_ONE_IMG } from "../Integration/Constant";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import WhySaksahthNew from "../../../Components/WhySakshathNew";
import { Fade } from "react-awesome-reveal";

const Automation = () => {
  const menu = [
    {
      id: "cloudAutomate",
      title: "Cloud Automation Development",
    },
    {
      id: "rpa",
      title: "RPA",
    },
    {
      id: "devops",
      title: "Devops/Testing",
    },
  ];

  const whyRpa = [
    {
      id: 1,
      title: " Fastest Business Scaling",
      description:
        "Use a low-code or no-code platform to automate robotic processes to launch or grow your business. Get a greater ROI and faster business expansion with Sakshath Automation Services.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 2,
      title: "Ample Opportunities",
      description:
        "You have access to an ocean of RPA business options with Sakshath for diverse procedures across departments.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 3,
      title: " Huge Profits and Revenue",
      description:
        "Gain qualified leads for your company, accelerate the deployment of automation, and make recurring payments for the service with ease..",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 4,
      title: "Automation of the Job Process",
      description:
        " Create bots immediately and connect them to the SaaS Operating system, a single web control panel from which you can manage and monitor each automation within and between different companies simultaneously.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 5,
      title: "RPA Bots with One Click",
      description:
        " Our RPA solution will help you have an infinite number of free bots to handle any automation challenge, whether a high-volume, one-time or straightforward task bot.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 6,
      title: "Boost Efficiency and Productivity",
      description:
        "Due to Sakshath’s RPA’s on-demand scalability, consistency, accuracy, and tailored solution, your business’s productivity and performance will improve.",
      img: require("../../../Assets/images/icon.png"),
    },
  ];

  const whyCloud = [
    {
      id: 1,
      title: "REMARKABLE EXPERTISE",
      description:
        " Being a market leader, we provide cloud-native business applications and have helped companies make the necessary operational changes to benefit from the distributed architecture of the cloud.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 2,
      title: "ABSOLUTE RESILIENCES",
      description:
        "Gain access to these cloud-native applications’ size, resiliency, elasticity, and agility by collaborating with Sakshath.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 3,
      title: "RESULTS-DRIVEN DESIGN",
      description:
        " Excellent apps are successful because they provide a solution.Our design team is here to assist you in testing your concepts and crafting the best version of your product.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 4,
      title: "ACCURATE IT SUPPORT",
      description:
        " The domain-driven design methodology breaks down apps into business solutions for simple utilization and cost optimization.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 5,
      title: "SUPERIORITY & SAFETY",
      description:
        " We introduce new cloud services and features to revamp your company without sacrificing security or quality.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 6,
      title: "ADDING NEW CAPABILITIES",
      description:
        " By embracing our cloud-native development solution, your company’s capabilities will improve in trying to meet, win, and retain consumer demands. Be swift and constant.",
      img: require("../../../Assets/images/icon.png"),
    },
  ];

  const whyDevops = [
    {
      id: 1,
      title: " Total and utter DevOps Process",
      description:
        "Your development and operations will be better coordinated with the aid of our DevOps team, allowing you to launch software more frequently while also increasing resilience.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 2,
      title: "Single-stop Technical Advice",
      description:
        "Our DevOps professionals can create and assist with setting up a CI/CD pipeline for your company. We install and configure relevant DevOps-specific technologies to ensure effective execution.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 3,
      title: "Complete Implementation Roadmap",
      description:
        " Our experienced staff can also handle your company’s initial technical DevOps deployment. We carry out strategic planning, create a thorough roadmap for implementing DevOps.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 4,
      title: "Problem  Analysis",
      description:
        " Our DevOps consultants assess issues in the business model, implement solutions into your DevOps strategy, and fine-tune procedures like CI/CD technologies or application monitoring to eliminate potential problems.",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 5,
      title: "Complete Support and Maintenance",
      description:
        " Sakshath’s experts can coach your internal team on reliably managing the DevOps method and, if required, handle and support any tech difficulties that may develop (for example, CI/CD configuration failures).",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 6,
      title: "Effective Strategy Planning",
      description:
        "Our specialists begin by reviewing your workflow, application portfolio, IT resources’ capacities, and the nature and scope of your IT infrastructures.",
      img: require("../../../Assets/images/icon.png"),
    },
  ];

  return (
    <>
      <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Automation"
      />

      {/* <!-- section one start --> */}
      <section className="overview_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ipad_full_width">
              <div className="overview_sec_left">
                <Fade direction="up" triggerOnce>
                  <Heading
                    heading="Streamline Your Operations with Automation"
                    // uppercase="text-uppercase"
                  />
                  <p className="sec_para">
                    Experience seamless automation with cloud-native
                    solutions.Using Simplify workflows, reduce costs, and boost
                    productivity. Business organizations are increasingly
                    automating operational costs and inefficiencies. They are
                    right on their way. Using automation, internal and external
                    processes are becoming more efficient and productive.
                  </p>

                  <SlideAnimationButton
                    btnName="Get Started Now"
                    url="/contact-us"
                  />
                </Fade>
              </div>
            </div>

            <div className="col-md-6 ipad_full_width">
              <div className="overview_sec_right_img">
                <img
                  className="img-fluid integration_img_left"
                  src={AUTOMATE_RIGHT_IMG1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- section one end --> */}

      <section className="partner_logo_section">
        <Fade direction="up" triggerOnce>
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
                <img src={CLIENT_LOGO1} />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={CLIENT_LOGO2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CLIENT_LOGO3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CLIENT_LOGO4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CLIENT_LOGO5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={CLIENT_LOGO6} />
              </SwiperSlide>
            </Swiper>
          </div>
        </Fade>
      </section>

      {/* <!-- section two start --> */}
      {/* <section className="why_need_integration_sec">
        <div className="container">
          <div className="row align-items-center">
            <div class="col-md-6  why_need_integration_left">
              <div>
                <img
                  className="img-fluid integration_img_right"
                  src={INTEGRATION_SECTION_ONE_IMG}
                />
              </div>
            </div>
            <div className="col-md-6 why_need_integration_right">
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
       
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- section two end --> */}

      <Fade direction="up" triggerOnce>
        <ServiceStickMenu
          pageName="Automation"
          // title1="Cloud Automation DEVELOPMENT"
          // title2="RPA"
          // title3="Devops /Testing"
          menuName={menu}
        />
      </Fade>
      {/* automation starts */}

      <div id="cloudAutomate">
        <Element name="Cloud Automate Development">
          <section className="automation">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="cloud_bg_img">
                    <img
                      src={AUTOMATION_BG_IMG}
                      alt=""
                      width="550px"
                      height="460px"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cloud_native_content">
                    <Fade direction="up" triggerOnce>
                      <Heading heading=" Cloud Native Development" />
                      <p>
                        Organizations can leverage cloud-native technologies to
                        develop and run scalable applications in modern, dynamic
                        environments like public, private, and hybrid clouds.
                      </p>
                    </Fade>
                  </div>
                  <Fade direction="up"  triggerOnce>
                  <div className="row">
                    <div className="col-md-6">
                      <Fade direction="up" triggerOnce>
                        <div className="automation_right_content_list">
                          <ul>
                            <li> Hybrid Integration</li>
                            <li> Services- Based Integration</li>
                            <li> API Gateway/Manager</li>
                            <li>
                              {" "}
                              Open API business strategy for monetization of
                              APIs
                            </li>
                          </ul>
                        </div>
                      </Fade>
                    </div>

                    <div className="col-md-6">
                      <Fade direction="up" triggerOnce>
                        <div className="automation_right_content_list">
                          <ul>
                            <li> Social Integration</li>
                            <li> Marketplace Integration</li>
                            <li> In-Built Connectors</li>
                            <li> Enterprise Service Bus (ESB)</li>
                            {/* <li> Pluggable Adaptors</li> */}
                          </ul>
                        </div>
                      </Fade>
                    </div>
                  </div>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
        </Element>
      </div>

      {/* pillars */}
      <section className="pillars_section">
        <div className="container">
          <div className="row">
            <div className="pillars_heading text-center ">
            <Fade direction="up"  triggerOnce>
              <Heading heading="Pillars Of  Cloud Native Application" />
              </Fade>
            </div>
            <div className="col-md-3 pillar_number_storke pillar_number_storke">
              <Fade direction="up" triggerOnce>
                <div className="number">{/* <h1> 01</h1> */}</div>
                <div className="pillars_box">
                  <div className="pillar_icon">
                    <img src={pillar_automation} alt="" />
                  </div>
                  <div className="pillar_title">
                    <h5>Automation</h5>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-3 pillar_number_storke">
              <Fade direction="up" triggerOnce delay={250}>
                <div className="number">{/* <h1> 02</h1> */}</div>
                <div className="pillars_box">
                  <div className="pillar_icon">
                    <img src={pillar_modern} alt="" />
                  </div>
                  <div className="pillar_title">
                    <h5>Modern Design & Architecture</h5>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-3 pillar_number_storke">
              <Fade direction="up" triggerOnce delay={350}>
                <div className="number">{/* <h1> 03</h1> */}</div>
                <div className="pillars_box">
                  <div className="pillar_icon">
                    <img src={pillar_microservice} alt="" />
                  </div>
                  <div className="pillar_title">
                    <h5>Microservices</h5>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-3 pillar_number_storke">
              <Fade direction="up" triggerOnce delay={400}>
                <div className="number">{/* <h1> 04</h1> */}</div>
                <div className="pillars_box">
                  <div className="pillar_icon">
                    <img src={pillar_bank} alt="" />
                  </div>
                  <div className="pillar_title">
                    <h5>Containers Backing Services</h5>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      {/*automation ends */}

      {/* mobile application ends */}
      <Fade direction="up" triggerOnce>
        <section className="mobile_section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <div className="mobile_app_main_heading">
                  <Heading heading="Mobile Application Development" />
                </div>
              </div>
              <div className="col-md-8 ">
                <div className="row ">
                  <div className="col-md-4 text-center">
                    <div className="application_box">
                      <div className="mobile_icon">
                        <img src={ANDRIOD_APP} alt="" />
                      </div>
                      <div className="mobile_title text-center">
                        <h4>
                          Andriod <br /> Development
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="application_box">
                      <div className="mobile_icon">
                        <img src={IOS_APPLE} alt="" />
                      </div>
                      <div className="mobile_title text-center">
                        <h4>
                          iOS <br /> Development
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="application_box">
                      <div className="mobile_icon">
                        <img src={CROSS_PLATFORM_APP} alt="" />
                      </div>
                      <div className="mobile_title text-center">
                        <h4>
                          CrossPlatform <br /> Development
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* </Fade> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* application starts */}
      <section className="application_section">
        <div className="container">
          <div className="row">
            <Fade direction="up" triggerOnce>
              <div className="application_main_heading text-center">
                <Heading heading="Application Integration" />
              </div>
            </Fade>

            <div className="col-md-6 api_boxes">
            <Fade direction="up"  triggerOnce>
              <div className="api_container">
                <div className="api_icon">
                  <img src={RPA_DELIVERY} alt="" />
                </div>
                <div className="api_boxes">
                  <h4>Service Based Integration</h4>
                  <span>
                    Restful and Restless (SOAP) service integration provides
                    digital integration capabilities. It has small-scale to
                    large-scale application data delivery and integration
                    capabilities.
                  </span>
                </div>
              </div>
              </Fade>
            </div>
            <div className="col-md-6 api_boxes">
            <Fade direction="up"  triggerOnce>
              <div className="api_container">
                <div className="api_icon">
                  <img src={RPA_DELIVERY} alt="" />
                </div>
                <div className="api_boxes">
                  <h4>Social Integration</h4>
                  <span>
                    Integration with social collaboration platforms such as,
                    Facebook, Twitter, Instagram, and many more. It consumes
                    their API and integrates the data in the DXP’s application.
                  </span>
                </div>
              </div>
              </Fade>
            </div>
            <div className="col-md-6 api_boxes">
            <Fade direction="up"  triggerOnce>
              <div className="api_container ">
                <div className="api_icon">
                  <img src={RPA_DELIVERY} alt="" />
                </div>
                <div className="api_boxes">
                  <h4>Marketplace Integration</h4>
                  <span>
                    Marketplace integration helps business users to integrate
                    with multiple channels: to buy or sell their services and
                    products of different channels while consuming a single
                    service.
                  </span>
                </div>
              </div>
              </Fade>
            </div>
            <div className="col-md-6 api_boxes">
            
              <div className="api_container">
                <div className="api_icon">
                  <img src={RPA_DELIVERY} alt="" />
                </div>
                <div className="api_boxes">
                  <h4> Open API business strategy for monetization</h4>
                  <span>
                    Open API business strategy for monetization of API’s. API
                    Gateway/Manager. Hybrid Integration. In-Built Connectors,
                    Enterprise Service Bus (ESB). Pluggable Adaptors.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* application starts */}

      {/* automation ends */}

      {/* why_Sakshath starts */}
      <Fade direction="up" triggerOnce>
        <WhySaksahthNew whyCrm={whyCloud} />
      </Fade>

      {/* why_Sakshath ends*/}

      {/* RPA */}
      {/* <div id="rpa"> */}

      <section className="rpa_section">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="rpa_main_heading">
                <Fade direction="up" triggerOnce>
                  <Heading heading="RPA" uppercase="text-uppercase" />
                  <h4>(Robotic Process Automation) </h4>
                </Fade>

                <div className="rpa_lists ">
                  <ul>
                    <li>
                      Sakshath RPA as a service is designed to help
                      organizations to integrate RPA with latest technologies
                      like AI/ ML, Voice recognition, Language processing.
                    </li>
                    <li>
                      Build scalable apps and enable a faster reaction to
                      shifting business needs by combining the correct
                      cloud-centric methodologies and practices with Sakshath.
                    </li>
                    <li>
                      Our RPA can integrate with any software Suite, including
                      Finance & Accounting Sales & Distribution, Materials
                      Management, and Human Capital Management it is also
                      helping our customers to optimize back-end operations like
                      – On Boarding Process – (Vendor, Partner, Employee),
                      Procurement Process, Billing/Invoicing Process Automation
                      etc.
                    </li>
                  </ul>
                 {/* </Fade> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <Fade direction="up"  triggerOnce>
              <div className="rpa_graph">
                <img src={RPA_GRAPH} alt="" />
              </div>
              </Fade>
              <div className="rpa_text text-center mt-5">
                {/* <h4>Robotic Process Automation Business Management</h4> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </Element> */}
      {/* </div> */}

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
              <Fade direction="up" triggerOnce>
                <Heading heading="RPA Offering" />
              </Fade>
            </div>
            <div className="col-md-2"></div>

            <div className="col-md-8">
              <div className="row ">
                {/* left side rpa  */}
                <div className="col-md-6 left_boxes_rpa">
                  <div className=" rpa_box_left">
                    <div className="rpa_imgs">
                      <img src={RPA_ADVISORY} alt="" />
                    </div>
                    <div className="rpa_heading">
                      <h4> RPA Advisory</h4>
                      <div className="rpa_list">
                        <ul>
                          <li>Process & Platform Assessment.</li>
                          <li>
                            Business Case Preparation – Functional & Technical.
                          </li>
                          <li>Standard Operation Procedure (SOP’s).</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" rpa_box_left_down">
                    <div className="rpa_imgs">
                      <img src={RPA_PILOT} alt="" />
                    </div>
                    <div className="rpa_heading">
                      <h4> RPA Piloct & POC</h4>
                      <div className="rpa_list">
                        <ul>
                          <li>
                            Identification & Shortlisting of the use case.
                          </li>
                          <li>Proof of concept creation & Prototyping.</li>
                          <li>
                            RPA Pilot & Enterprise Automation Roadmap (Creation
                            & Blueprint).
                          </li>
                        </ul>
                      </div>
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
                      <h4>RPA Delivery</h4>

                      <div className="rpa_list">
                        <ul>
                          <li>Automation Scripting.</li>
                          <li> Attended, Unattended, Hybrid Bots.</li>
                          <li>Robot Training.</li>
                          <li> Robot Testing.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" rpa_box_right_down">
                    <div className="rpa_imgs">
                      <img src={RPA_BOT} alt="" />
                    </div>
                    <div className="rpa_heading">
                      <h4> RPA Bot Support </h4>
                      <div className="rpa_list">
                        <ul>
                          <li>Level 1 Support.</li>
                          <li>L2 2 Support.</li>
                        </ul>
                      </div>
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
          <Fade direction="up" triggerOnce>
            <Heading heading="RPA Tools" />
            <p>
              In order to achieve value-based RPA solutions for our customers,
              our consultants have worked with a variety of technologies and RPA
              vendors.
            </p>
          </Fade>
        </div>
        <div className="container rpa_tools_logos">
          <Swiper
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
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
            {/* <SwiperSlide>
              <img src={POWER_AUTOMATE_RPA} width="150px" />
            </SwiperSlide> */}

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
      <WhySaksahthNew whyCrm={whyRpa} />
      {/*  why skashath ends */}

      <div id="devops">
        <Element name="Devops/Testing">
          <section className="devops_section">
            <div className="container devops_container">
              <div className="row align-items-center ">
                <div className="col-md-6">
                  <div className="devops_img">
                    <img src={DEVOPS} alt="" width="580px" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="devops_testing_right_content">
                    <Fade direction="up" triggerOnce>
                      <Heading heading="DevOps/Testing" uppercase="" />
                      <p>
                        In transforming Testing to the world of Agile and
                        DevOps, Sakshath has been at the forefront of providing
                        best-in-class, tailored “QA Testing Services”.
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
      </div>

      {/* DEvops layer  start*/}

      <section className="devops_layer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="devop_layer">
                <div className="testing_layer_main_heading text-center">
                <Fade direction="up"  triggerOnce>
                  <Heading heading="Testing Layer" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div className="hr_tag">
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box1">
                <div className="layer"></div>
              </div>
              <div className="layer_title">
                <h4>Presentation Layer</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box2">
                <div className="layer"></div>
              </div>
              <div className="layer_title">
                <h4>Business Logic Layer</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box3">
                <div className="layers"></div>
              </div>
              <div className="layer_title">
                <h4>DataBase Layer</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="devops_section">
        <div className="container">
          <div className="row">
            <div className="devops_heading_main text-center">
            <Fade direction="up"  triggerOnce>
              <Heading heading="DevOps & Testing " />
              </Fade>
            </div>
            <div className="row box1 ">
              <div className="col-md-3 devops_boxes">
                <Fade direction="up" triggerOnce>
                  <div className="devops_list_box">
                    <div className="devops_ul">
                      <ul>
                        <li>Functional Testing</li>
                        <li>Unit Testing</li>
                        <li>Integration</li>
                        <li>UAT Testing</li>
                        <li>Regression Testing</li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-3 devops_boxes">
                <Fade direction="up" triggerOnce>
                  <div className="devops_list_box">
                    <div className="devops_ul">
                      <ul>
                        <li>Test Automation</li>
                        <li>Installation & Scripting</li>

                        <li>Integration</li>
                        <li>Code/Codeless testing</li>
                        <li>Scalable framework</li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-3 devops_boxes">
                <Fade direction="up" triggerOnce>
                  <div className="devops_list_box">
                    <div className="devops_ul">
                      <ul>
                        <li>Performance Testing</li>
                        <li>Load Test</li>
                        <li>Volume Test</li>
                        <li>Stress Test</li>
                        <li>Soak Test.</li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-3 devops_boxes">
                <Fade direction="up" triggerOnce>
                  <div className="devops_list_box">
                    <div className="devops_ul">
                      <ul>
                        <li>Payment Testing</li>
                        <li>Transaction Completion & Validation.</li>

                        <li>Mobile Wallet Testing.</li>
                        <li>E-commerce & M-commerce.</li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="row box2 ">
              <div className="col-md-3 devops_boxes">
                <Fade direction="up" triggerOnce>
                  <div className="devops_list_box">
                    <div className="devops_ul">
                      <ul>
                        <li>User Experience Testing</li>
                        <li>User Interface Testing</li>

                        <li>User Experience</li>
                        <li>User Behavior</li>
                        <li>Cross Browser</li>
                        <li>Browser Testing</li>
                        <li>Dynamic Page Testing</li>
                        <li> BrowserLayout</li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </div>

              <div className="col-md-3 devops_boxes">
                <Fade direction="up" triggerOnce>
                  <div className="devops_list_box">
                    <div className="devops_ul">
                      <ul>
                        <li>Security Testing & Injection.</li>
                        <li>Broken authentication & session mgmt.</li>
                        <li>Insufficient transport layer protection.</li>
                        <li>Security Misconfiguration.</li>
                        <li>Cross-Site Scripting (XSS).</li>
                        <li>Insecure Direct Object References.</li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-3 devops_boxes">
                <Fade direction="up" triggerOnce>
                  <div className="devops_list_box">
                    <div className="devops_ul">
                      <ul>
                        <li>Microservice & API testing</li>
                        <li>UI & Functional testing</li>

                        <li>
                          Security, Run Time & Error Detection/Penetration
                        </li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="devops_layer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="devop_layer">
                <div className="testing_layer_main_heading text-center">
                  <Heading heading="Testing Layer" />
                </div>
              </div>
            </div>
          </div>
          <div className="hr_tag">
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box1">
                <div className="layer"></div>
              </div>
              <div className="layer_title">
                <h4>Presentation Layer</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box2">
                <div className="layer"></div>
              </div>
              <div className="layer_title">
                <h4>Presentation Layer</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box3">
                <div className="layers"></div>
              </div>
              <div className="layer_title">
                <h4>Presentation Layer</h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Sakshath starts*/}
      <WhySaksahthNew whyCrm={whyDevops} />
      {/* why sakshath ends */}
    </>
  );
};

export default Automation;
