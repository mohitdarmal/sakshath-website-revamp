import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.scss";
import {
  ABOUT_WHO_WE_ARE,
  BUSINESS,
  EPICOR_OVERVIEW,
  ERP1_GRAPH_IMG,
  ERP1_OVERVIEW,
  ERP_AUTOMATION,
  ERP_CONSTRUCTION,
  ERP_ELECTONIC,
  ERP_INDUSTRY,
  ERP_INDUSTRY_1,
  ERP_INDUSTRY_MANUFACTURE,
  ERP_MANUFATURE,
  ERP_MEDICAL,
  ERP_MENTAL_HEALTH,
  ERP_METAL,
  ERP_RETAIL,
  ERP_RUBBER,
  ERP_SUPPLCHAIN,
  ERP_SYSPRO,
  INDUSTRY_IMG,
  INFORMATION,
  INTERNAL_OPERATION,
  Migration,
  ORGANIZATION,
  SAP,
  SUPPLY_CHAIN,
  SUPPLY_CHAIN_IMG,
  SYSPRO_ACTIONABLE,
  SYSPRO_BUSINESS,
  SYSPRO_Choice,
  SYSPRO_INDUSTRY,
  SYSPRO_PERSONAL,
  SYSPRO_SAFE,
  SYSPRO_SCALE,
  SYSPRO_USER,
  Who_we_r,
} from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import { ABOUT_BANNER } from "../../../Components/Breadcumb/Constant";
import BreadCumb from "../../../Components/Breadcumb";
import { EXPERIENCE } from "../../../Components/OurPrincipals/Constant";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import CallToAction from "../../../Components/CallToAction";
import WhySaksahthNew from "../../../Components/WhySakshathNew";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Faq from "../../../Components/Faq";
import ServicePopup from "../../../Components/ServicePopup";

const Erp = () => {
  const whyDEVOPS = [
    {
      id: 1,
      title: "REMARKABLE EXPERTISE",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga, autem doloremque? Aut fugiat odio illo id iste similique esse ea alias officiis dolorum, expedita,asperiores optio natus dolorem possimus amet?",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 2,
      title: "ABSOLUTE RESILIENCE",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga, autem doloremque? Aut fugiat odio illo id iste similique esse ea alias officiis dolorum, expedita,asperiores optio natus dolorem possimus amet?",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 3,
      title: "RESULTS-DRIVEN DESIGN",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga, autem doloremque? Aut fugiat odio illo id iste similique esse ea alias officiis dolorum, expedita,asperiores optio natus dolorem possimus amet?",
      img: require("../../../Assets/images/icon.png"),
    },
    {
      id: 4,
      title: "ACCURATE IT SUPPORT",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga, autem doloremque? Aut fugiat odio illo id iste similique esse ea alias officiis dolorum, expedita,asperiores optio natus dolorem possimus amet?",
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

  const [whyComp, setWhyComp] = useState([]);

  useEffect(() => {
    setWhyComp(whyDEVOPS);
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [industriesContent, setIndustriesContent] = useState([]);

  function IndustriesPopup(props) {
    console.log(props, "props");
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {industriesContent.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <p
            dangerouslySetInnerHTML={{ __html: industriesContent.content }}
          ></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <ServicePopup popUpHeading={"ERP Popup"} />
      {/* <IndustriesPopup show={modalShow} onHide={() => setModalShow(false)} /> */}

      <BreadCumb imgUrl={ABOUT_BANNER} title="ENTERPRISE RESOURCE PLANNING " />
      {/* Syspro  overview Starts*/}
      {/* EPICOR  overview  starts*/}

      <section className="epicor_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="epicor_overview_heading">
                <Fade direction="up" triggerOnce>
                  <Heading heading="Overview" uppercase="" />
                </Fade>
              </div>

              <div className="overview_right_content">
                <Fade direction="up" triggerOnce>
                  <div className="epicor_content_right">
                    <li>
                      Epicor's manufacturing solutions revolutionize your shop
                      floor. From intelligent BOM management to real-time
                      quality control, witness unparalleled efficiency.
                    </li>
                    <li>
                      Epicor’s powerful ERP platform and enterprise applications
                      give you the flexibility and agility you need to compete
                      in today’s global space by assisting you in operations
                      management optimizations and streamlining processes.
                    </li>

                    <li>
                      Epicor’s custom industry-specific business software
                      solutions provided by Sakshath Technologies&#174; are used by
                      thousands of companies across several industries and
                      verticals.
                    </li>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-6">
              <div className="epicor_right_img">
                <img src={ERP1_GRAPH_IMG} alt="" width="600px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="epicor_down_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="epicor_left_img">
                <img src={ERP1_OVERVIEW} alt="" width="550px" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="overview_left_content">
                <div className="epicor_overview_heading">
                  <Fade direction="up" triggerOnce>
                    <Heading heading="Overview" />
                  </Fade>
                </div>
                <Fade direction="up" triggerOnce>
                  <div className="epicor_content_left">
                    <li>
                      These include healthcare, civil, manufacturing,
                      distributing, and retail, as well as hospitality and
                      service organizations.
                    </li>
                    <li>
                      Each solution goes beyond tried and tested enterprise
                      resource planning (ERP) to provide financial management,
                      product management, customer relationship.
                    </li>
                    <li>
                      Epicor’s powerful ERP platform and enterprise applications
                      give you the flexibility and agility you need to compete
                      in today’s global space by assisting you in operations
                      management optimizations and streamlining processes.
                    </li>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* epicor ends */}
      {/* call to action starts */}
      <Fade direction="up" triggerOnce>
        <CallToAction
          ctaContent="Let’s connect. We’d love to hear about your project and discuss our procedure. Our executives will be at your service ASAP."
          ctaTitle={"Contact Us"}
        />
      </Fade>
      {/* call tonaction ends */}
      <section className="syspro_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 align-items-center">
              <div className="epicor_overview_heading">
                <Fade direction="up" triggerOnce>
                  <Heading heading="SYSPRO" uppercase="" />
                </Fade>
              </div>
              <Fade direction="up" triggerOnce>
                <div className="syspro_content">
                  <li>
                    Become a pioneer in your business with custom,
                    industry-built ERP solutions designed to fit your business
                    now and forever.
                  </li>
                  <li>
                    SYSPRO’s powerful and versatile feature set, integrated with
                    the latest innovative technologies, provides a gateway to
                    digitizing your business, streamlining your supply chain,
                    and providing greater control and visibility while
                    simplifying and personalizing the experience.
                  </li>
                </div>
              </Fade>
            </div>
            <div className="col-md-6">
              <div className="syspro_img">
                <img src={ERP_SYSPRO} alt="" width="600px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* syspro ends */}
      {/* syspro 8 ways  starts*/}
      <section className="syspro_8_ways_section">
        <div className="container">
          <div className="row">
            <div className="main_heading_syspro_8_ways text-center">
              <Fade direction="up" triggerOnce>
                <h3>
                  {" "}
                  8 Ways <span>SYSPRO</span> Adds Value To The Entire Supply
                  Chain
                </h3>
              </Fade>
            </div>
          </div>
          <Fade direction="up" triggerOnce>
            <div className="row">
              <div className="col-md-3">
                <div className="box_top">
                  <h4>01</h4>
                  <div className="syspro_value">
                    <img src={SYSPRO_INDUSTRY} alt="" />
                  </div>
                  <div className="syspro_value_content">
                    <h3>Industry Built</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box_top">
                  <h4>02</h4>
                  <div className="syspro_value">
                    <img src={SYSPRO_Choice} alt="" />
                  </div>
                  <div className="syspro_value_content">
                    <h3>Choice & Flexibility</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box_top">
                  <h4>03</h4>
                  <div className="syspro_value">
                    <img src={SYSPRO_ACTIONABLE} alt="" />
                  </div>
                  <div className="syspro_value_content">
                    <h3>Actionable Insights</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box_top">
                  <h4>04</h4>
                  <div className="syspro_value">
                    <img src={SYSPRO_SCALE} alt="" />
                  </div>
                  <div className="syspro_value_content">
                    <h3> Scalable</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box_top">
                  <h4>05</h4>
                  <div className="syspro_value">
                    <img src={SYSPRO_USER} alt="" />
                  </div>
                  <div className="syspro_value_content">
                    <h3>Engaging User Experience</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box_top">
                  <h4>06</h4>
                  <div className="syspro_value">
                    <img src={SYSPRO_SAFE} alt="" />
                  </div>
                  <div className="syspro_value_content">
                    <h3>Safeguard Your ERP Investment</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box_top">
                  <h4>07</h4>
                  <div className="syspro_value">
                    <img src={SYSPRO_PERSONAL} alt="" />
                  </div>
                  <div className="syspro_value_content">
                    <h3>Personalize Your Workspace</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box_top">
                  <h4>08</h4>
                  <div className="syspro_value">
                    <img src={SYSPRO_BUSINESS} alt="" />
                  </div>
                  <div className="syspro_value_content">
                    <h3>Enable Digital Business </h3>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {/* syspro 8 ways end */}
      {/* EPICOR  overview  ends*/}
      {/* industry's starts */}
      {/* <section className="industry_section">
        <div className="container">
          <div className="row">
            <div className="industry_main_heading text-center">
              <Heading heading="Industry" uppercase="text-uppercase" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="top_industry d-flex">
                <div className="industry_box1">
                  <h5>supply chain</h5>
                </div>
                <div className="industry_box1">
                  <h5>manufacturing</h5>
                </div>
                <div className="industry_box1">
                  <h5>Retailers</h5>
                </div>
              </div>

              <div className="center_top_industry">
                <div className="industry_box_2">
                  <h5>Feedback Analysis</h5>
                </div>
                <div className="industry_box_2">
                  <h5>Assement</h5>
                </div>
                <div className="industry_box_2">
                  <h5>Feedback Analysis</h5>
                </div>
              </div>
              <div className="center_bottom_industry ">
                <div className="industry_box_3">
                  <h5>Feedback Analysis</h5>
                </div>
                <div className="industry_box_3">
                  <h5>Feedback Analysis</h5>
                </div>
                <div className="industry_box_3">
                  <h5>Feedback Analysis</h5>
                </div>
              </div>
              <div className="bottom_industry">
                <div className="industry_box_4">
                  <h5>Feedback Analysis</h5>
                </div>
                <div className="industry_box_4">
                  <h5>Feedback Analysis</h5>
                </div>
                <div className="industry_box_4">
                  <h5>Feedback Analysis</h5>
                </div>
                <div className="industry_box_3">
                  <h5>Feedback Analysis</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="industry_erp">
        <div className="container">
          <div className="row text-center industry_heading">
            <Heading heading="Industry" />
          </div>
          <Fade direction="up" triggerOnce>
            <div className="row">
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_SUPPLCHAIN} alt="" />
                  </div>
                  <h4>Supply Chain</h4>
                </div>
              </Col>
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_INDUSTRY} alt="" />
                  </div>
                  <h4>manufacturing</h4>
                </div>
              </Col>
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_RETAIL} alt="" />
                  </div>
                  <h4>Retailers</h4>
                </div>
              </Col>

              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_AUTOMATION} alt="" />
                  </div>
                  <h4>Automation</h4>
                </div>
              </Col>
            </div>
          </Fade>

          <Fade direction="up" triggerOnce>
            <div className="row">
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_MANUFATURE} alt="" />
                  </div>
                  <h4>Aerospace & Defence</h4>
                </div>
              </Col>
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_RUBBER} alt="" />
                  </div>
                  <h4> Rubber & Plastics</h4>
                </div>
              </Col>
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_ELECTONIC} alt="" />
                  </div>
                  <h4>Electronics & High Tech</h4>
                </div>
              </Col>
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_METAL} alt="" />
                  </div>
                  <h4>Fabricated Metals</h4>
                </div>
              </Col>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce>
            <div className="row">
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_INDUSTRY_MANUFACTURE} alt="" />
                  </div>
                  <h4>Industrial Machinery</h4>
                </div>
              </Col>
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_MENTAL_HEALTH} alt="" />
                  </div>
                  <h4>Mental Service Centers</h4>
                </div>
              </Col>
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_CONSTRUCTION} alt="" />
                  </div>
                  <h4>Construction & Engineering </h4>
                </div>
              </Col>
              <Col>
                <div className="industry_box">
                  <div className="industry_icon">
                    <img src={ERP_MEDICAL} alt="" />
                  </div>
                  <h4>Medical</h4>
                </div>
              </Col>
              {/* <Col>
              <div className="industry_box">
                <div className="industry_icon">
                  <img src={SUPPLY_CHAIN_IMG} alt="" />
                </div>
                <h4>Furniture & Fixtures</h4>
              </div>
            </Col> */}
            </div>
          </Fade>
        </div>
      </section>
      {/* Industries ends */}

      {/*  */}
      <section className="erp_industries_sec">
        <Container>
          <Row>
            <Col className="">
              <div
                className="erp_ind_box"
                onClick={() => {
                  setModalShow(true);
                  setIndustriesContent({
                    title: "Internal Operation",
                    content:
                      "<ul><li>Manufacturing operations management</li><li>Job nesting</li><li>Bill of materials </li><li>Materials </li><li>Quality management </li><li>Traceability  </li></ul>",
                  });
                }}
              >
                <div className="erp_ind_img">
                  <img src={ORGANIZATION} />
                </div>
                <h4>Internal Operation</h4>
              </div>
            </Col>
            <Col className="">
              <div
                className="erp_ind_box"
                onClick={() => {
                  setModalShow(true);
                  setIndustriesContent({
                    title: "Supply Chain",
                    content:
                      "<ul><li>Warehouse management system</li><li>Supply chain portal</li><li>Pricing engine: Product Catalog </li><li>Cycle counting  </li><li>Sales order picking </li></ul>",
                  });
                }}
              >
                <div className="erp_ind_img">
                  <img src={SUPPLY_CHAIN} />
                </div>
                <h4>Supply Chain</h4>
              </div>
            </Col>
            <Col className="">
              {/* <div className="erp_ind_box"> */}
              <div
                className="erp_ind_box"
                onClick={() => {
                  setModalShow(true);
                  setIndustriesContent({
                    title: "Organizational Controls",
                    content:
                      "<ul><li>Warehouse management system</li><li>Supply chain portal</li><li>Pricing engine: Product Catalog </li><li>Cycle counting  </li><li>Sales order picking  </li></ul>",
                  });
                }}
              >
                <div className="erp_ind_img">
                  <img src={INTERNAL_OPERATION} />
                </div>
                <h4>Organizational Controls</h4>
              </div>
            </Col>
            <Col className="">
              <div
                className="erp_ind_box"
                onClick={() => {
                  setModalShow(true);
                  setIndustriesContent({
                    title: "Information & Intelligence",
                    content:
                      "<ul><li>Warehouse management system</li><li>Supply chain portal</li><li>Pricing engine: Product Catalog </li><li>Cycle counting  </li><li>Sales order picking  </li></ul>",
                  });
                }}
              >
                <div className="erp_ind_img">
                  <img src={INFORMATION} />
                </div>
                <h4>Information & Intelligence</h4>
              </div>
            </Col>
            <Col className="">
              <div
                className="erp_ind_box"
                onClick={() => {
                  setModalShow(true);
                  setIndustriesContent({
                    title: "Digital Business Platform",
                    content:
                      "<ul><li>Warehouse management system</li><li>Supply chain portal</li><li>Pricing engine: Product Catalog </li><li>Cycle counting  </li><li>Sales order picking  </li></ul>",
                  });
                }}
              >
                <div className="erp_ind_img">
                  <img src={BUSINESS} />
                </div>
                <h4>Digital Business Platform</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* industry ends */}

      {/* migration */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="migration_overview_heading">
                <Fade direction="up" triggerOnce>
                  <Heading heading="Migration" uppercase="" />
                </Fade>
              </div>
              <Fade direction="up" triggerOnce>
                <div className="migration">
                  <p>
                    The effectiveness of data migration in SYSPRO or any other
                    ERP software depends on various factors, and it's important
                    to note that the superiority of one ERP system over another
                    in terms of data migration may vary based on specific
                    requirements and contexts. However, SYSPRO, like other
                    leading ERP solutions, offers certain features and
                    capabilities that contribute to efficient data migration
                    processes.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col-md-6">
              <div className="migration_img">
                <img src={Migration} alt="" width="550px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* migration ends */}

      {/* sap STARTS */}
      <section className="sap_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sap_img">
                <img src={SAP} alt="" width="600px" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="sap_content_box">
                <div className="sap_heading">
                  <Fade direction="up" triggerOnce>
                    <Heading heading="SAP" uppercase="text-uppercase" />
                  </Fade>
                </div>
                <Fade direction="up" triggerOnce>
                  <div className="sap_content">
                    <div className="sap_box">
                      <h4>WIDE-RANGING EXPERIENCE</h4>
                      <p>
                        SAP stands out because of its wide-ranging experience as
                        a provider of ERP services. The company has provided
                        tech solutions for everyone from government financial
                        institutions to small businesses.
                      </p>
                    </div>
                    <div className="sap_box">
                      <h4>EASY UPGRADES AND MAINTENANCE</h4>
                      <p>
                        For companies looking to cut IT costs by investing in
                        more streamlined solutions, SAP is here to help. SAP’s
                        business management tools make it easier for companies
                        to oversee their operations.
                      </p>
                    </div>

                    <div className="sap_box">
                      <h4>AFFORDABILITY AND SCALABILITY</h4>
                      <p>
                        SAP makes sure that companies invest in scalable tech
                        systems, ensuring they don’t spend one dollar more than
                        is absolutely necessary. Businesses need to get the most
                        out of their IT budgets.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="dynamic_box">
                <div className="dynamic_heading">
                  <Fade direction="up" triggerOnce>
                    <Heading heading="MS Dynamics" />
                  </Fade>
                </div>
                <Fade direction="up" triggerOnce>
                  <div className="dynamic_content">
                    <h4>FUELING BUSINESS WITH BETTER DATA</h4>
                    <p>
                      Master data management (MDM) is the core process used to
                      manage, centralize, organize, categorize, localize,
                      synchronize and enrich master data according to the
                      business rules of the sales, marketing and operational
                      strategies of your company. The importance of MDM lies
                      more crucial because it directly governs the business
                      priorities with the ever-growing government regulations .
                      Customer data, Supplier data, product life cycle
                      management and data governance are all significant
                      contributors of initiatives driven by the businesses
                    </p>

                    <div className="dynamics_list">
                      <ul>
                        <li>
                          Senior management supports the entire program to help
                          driven the initiatives from the top down approach.
                        </li>
                        <li>
                          Business users to champion and assist with smooth
                          implementation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dynamic_img">
                <img src={Who_we_r} alt="" width="550px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why sakshath */}
      <Fade direction="up" triggerOnce>
        {/* <WhySaksahthNew whyCrm={whyComp} /> */}
      </Fade>
      {/* <WhySaksahthNew whyCrm={whyRpa} /> */}
      {/* why sakshth ends */}

      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-md-1"> </div>
            <div className="col-md-10">
              <Faq />
            </div>
            <div className="col-md-1"> </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Erp;
