import React from "react";
import "./style.scss";
import {
  ABOUT_WHO_WE_ARE,
  EPICOR_OVERVIEW,
  SUPPLY_CHAIN_IMG,
  Who_we_r,
} from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import { ABOUT_BANNER } from "../../../Components/Breadcumb/Constant";
import BreadCumb from "../../../Components/Breadcumb";
import { EXPERIENCE } from "../../../Components/OurPrincipals/Constant";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import CallToAction from "../../../Components/CallToAction";


const Erp = () => {
  return (
    <>
      {" "}
      <BreadCumb imgUrl={ABOUT_BANNER} title="ERP" />
      {/* EPICOR  overview  starts*/}
      {/* <section className="epicor_section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <div className="epicor_content">
                <div className="epicor_overview_main_heading text-center">
                  <Heading heading=" EPICOR OVERVIEW " />
                </div>
                <div className="epicor_list">
                  <ul>
                    <li>
                      Epicor’s powerful ERP platform and enterprise applications
                      give you the fixability and agility you need to compete in
                      today’s global space by assisting you in operations
                      management optimizations and streamlining processes.
                    </li>
                    <li>
                      Going beyond traditional ERP, our company provides an
                      end-to-end software solution from Epicor that streamlines
                      and optimizes crucial business departments, such as
                      financial, inventory, and manufacturing management
                      efficiencies.
                    </li>
                    <li>
                      Epicor’s custom industry-specific business software
                      solutions provided by Sakshath Technologies® are used by
                      thousands of companies across several industries and
                      verticals.
                    </li>
                    <li>
                      These include healthcare, civil, manufacturing,
                      distributing, and retail, as well as hospitality and
                      service organizations.
                    </li>
                    <li>
                      Each solution goes beyond tried and tested enterprise
                      resource planning (ERP) to provide financial management,
                      product management, customer relationship management
                      (CRM), supply chain management (SCM), and much more.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="epicor_overview_img">
                <img src={EPICOR_OVERVIEW} alt="EPOICOR OVERVIEW IMG" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ERP_OVERVIEW ends */}
      {/* Syspro Starts start */}
      {/* <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="syspro_img">
                <img src={EPICOR_OVERVIEW} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="syspro_main_heading text-center">
                <Heading heading=" SYSPRO  " />
              </div>
              <div className="syspro_content">
                <p>
                  Become a pioneer in your business with an custom
                  industry-built ERP solutions designed to fit your business now
                  and forever.
                  <br />
                  <br />
                  SYSPRO’s powerful and versatile feature set integrated with
                  the latest innovative technologies provides a gateway to
                  digitizing your business, streamlining your supply chain, and
                  providing greater control and visibility, while simplifying
                  and personalizing the experience
                </p>
              </div>{" "}
             
            </div>
          </div>
        </div>
      </section> */}
      {/* Syspro Starts ends*/}
      {/* EPICOR  overview  starts*/}
      {/* <section className="epicor_section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="epicor_container">
                <div className="epicor_main_heading">
                  <Heading
                    heading="EPICOR OVERVIEW"
                    uppercase="text-uppercase"
                  />
                  <p>
                    Epicor’s powerful ERP platform and enterprise applications
                    give you the fixability and agility you need to compete in
                    today’s global space by assisting you in operations
                    management optimizations and streamlining processes.
                  </p>
                </div>
                <div className="epicor_content d-flex">
                  <div className="epicor_container_box">
                    <p>
                      Going beyond traditional ERP, our company provides an
                      end-to-end software solution from Epicor that streamlines
                      and optimizes crucial business departments, such as
                      financial, inventory, and manufacturing management
                      efficiencies.
                    </p>
                  </div>

                  <div className="epicor_container_box">
                    <p>
                      Each solution goes beyond tried and tested enterprise
                      resource planning (ERP) to provide financial management,
                      product management, customer relationship management
                      (CRM), supply chain management (SCM), and much more.
                    </p>
                  </div>
                </div>

                <div className="epicor_bottom_content">
                  <p>
                    Epicor’s custom industry-specific business software
                    solutions provided by Sakshath Technologies® are used by
                    thousands of companies across several industries and
                    verticals.
                  </p>

                  <p>
                    These include healthcare, civil, manufacturing,
                    distributing, and retail, as well as hospitality and service
                    organizations
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 epicor_col_m5">
              <div className="epicor_img">
                <img src={ABOUT_WHO_WE_ARE} alt="" />
              </div>
              <div className="epicor_exprience_box">
                <img src={EXPERIENCE} alt="" />
                <h6>13+ Years</h6>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* EPICOR  overview ends*/}
      {/* Syspro  overview Starts*/}
      {/* <section className="syspro_section">
        <div className="container">
          <div className="row text-center">
            <div className="syspro_container">
              <div className="syspro_main_heading">
                <Heading heading="SYSPRO" />
              </div>

              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="syspro_center_content">
                    <p>
                      Become a pioneer in your business with an custom
                      industry-built ERP solutions designed to fit your business
                      now and forever.
                    </p>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>

              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="syspro_bottom_content">
                    <p>
                      {" "}
                      SYSPRO’s powerful and versatile feature set integrated
                      with the latest innovative technologies provides a gateway
                      to digitizing your business, streamlining your supply
                      chain, and providing greater control and visibility, while
                      simplifying and personalizing the experience
                    </p>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Syspro  overview ends*/}
      {/* Industries starts */}
      {/* EPICOR  overview  starts*/}
      <section className="epicor_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="epicor_overview_heading">
                <Heading heading="Overview" />
              </div>
              <div className="overview_right_content">
                <div className="epicor_content_right">
                  <li>
                    Epicor's manufacturing solutions revolutionize your shop
                    floor. From intelligent BOM management to real-time quality
                    control, witness unparalleled efficiency.
                  </li>
                  <li>
                    Epicor’s powerful ERP platform and enterprise applications
                    give you the flexibility and agility you need to compete in
                    today’s global space by assisting you in operations
                    management optimizations and streamlining processes.
                  </li>

                  <li>
                    Epicor’s custom industry-specific business software
                    solutions provided by Sakshath Technologies® are used by
                    thousands of companies across several industries and
                    verticals.
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="epicor_right_img">
                <img src={ABOUT_WHO_WE_ARE} alt="" width="600px" />
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
                <img src={Who_we_r} alt="" width="550px" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="overview_left_content">
                <div className="epicor_overview_heading">
                  <Heading heading="Overview" />
                </div>

                <div className="epicor_content_left">
                  <li>
                    These include healthcare, civil, manufacturing,
                    distributing, and retail, as well as hospitality and service
                    organizations.
                  </li>
                  <li>
                    Each solution goes beyond tried and tested enterprise
                    resource planning (ERP) to provide financial management,
                    product management, customer relationship.
                  </li>
                  <li>
                    Epicor’s powerful ERP platform and enterprise applications
                    give you the flexibility and agility you need to compete in
                    today’s global space by assisting you in operations
                    management optimizations and streamlining processes.
                  </li>
                </div>
              

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* epicor ends */}
      {/* call to action starts */}

<CallToAction  ctaContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit doloribus labore exercitationem perspiciatis."/>

      {/* <section className="call_to_action_section">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="call_to_action_erp">
                <h3>
                  Contact Us Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. consectetur adipisicing elit.
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="call_to_action_button_sysypro">
                <SlideAnimationButton btnName="Contact us" url="/contact-us" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* call to action ends */}
      {/* syspo starts */}
      <section className="syspro_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 align-items-center">
              <div className="epicor_overview_heading">
                <Heading heading="SYSPRO" uppercase="text-uppercase" />
              </div>
              <div className="syspro_content">
                <li>
                  Become a pioneer in your business with custom, industry-built
                  ERP solutions designed to fit your business now and forever.
                </li>
                <li>
                  SYSPRO’s powerful and versatile feature set, integrated with
                  the latest innovative technologies, provides a gateway to
                  digitizing your business, streamlining your supply chain, and
                  providing greater control and visibility while simplifying and
                  personalizing the experience.
                </li>
              </div>
            </div>
            <div className="col-md-6">
              <div className="syspro_img">
                <img src={ABOUT_WHO_WE_ARE} alt="" width="600px" />
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
              <Heading heading="8 ways SYSPRO adds value to the entire supply chain" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="box_top">
                <h4>01</h4>
                <div className="syspro_value">
                  <img src={EXPERIENCE} alt="" />
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
                  <img src={EXPERIENCE} alt="" />
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
                  <img src={EXPERIENCE} alt="" />
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
                  <img src={EXPERIENCE} alt="" />
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
                  <img src={EXPERIENCE} alt="" />
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
                  <img src={EXPERIENCE} alt="" />
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
                  <img src={EXPERIENCE} alt="" />
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
                  <img src={EXPERIENCE} alt="" />
                </div>
                <div className="syspro_value_content">
                  <h3>Enable Digital Business </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* syspro 8 ways end */}
      {/* EPICOR  overview  ends*/}
      <section className="industry_section">
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
      </section>
      {/* Industries ends */}
      {/* migration */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="migration_overview_heading">
                <Heading heading="Migration" uppercase="text-uppercase" />
              </div>

              <div className="migration">
                <p>
                  The effectiveness of data migration in SYSPRO or any other ERP
                  software depends on various factors, and it's important to
                  note that the superiority of one ERP system over another in
                  terms of data migration may vary based on specific
                  requirements and contexts. However, SYSPRO, like other leading
                  ERP solutions, offers certain features and capabilities that
                  contribute to efficient data migration processes.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="migration_img">
                <img src={Who_we_r} alt="" width="550px" />
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
                <img src={ABOUT_WHO_WE_ARE} alt="" width="600px" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="sap_content_box">
                <div className="sap_heading">
                  <Heading heading="SAP" uppercase="text-uppercase" />
                </div>

                <div className="sap_content">
                  <div className="sap_box">
                    <h4>WIDE-RANGING EXPERIENCE</h4>
                    <p>
                      SAP stands out because of its wide-ranging experience as a
                      provider of ERP services. The company has provided tech
                      solutions for everyone from government financial
                      institutions to small businesses.
                    </p>
                  </div>
                  <div className="sap_box">
                    <h4>EASY UPGRADES AND MAINTENANCE</h4>
                    <p>
                      For companies looking to cut IT costs by investing in more
                      streamlined solutions, SAP is here to help. SAP’s business
                      management tools make it easier for companies to oversee
                      their operations.
                    </p>
                  </div>

                  <div className="sap_box">
                    <h4>AFFORDABILITY AND SCALABILITY</h4>
                    <p>
                      SAP makes sure that companies invest in scalable tech
                      systems, ensuring they don’t spend one dollar more than is
                      absolutely necessary. Businesses need to get the most out
                      of their IT budgets.
                    </p>
                  </div>
                </div>
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
                  <Heading heading="MS Dynamics"/>
                </div>

                <div className="dynamic_content">
                  <h4>FUELING BUSINESS WITH BETTER DATA</h4>
           <p>Master data management (MDM) is the core process used to manage, centralize, organize, categorize, localize, synchronize and enrich master data according to the business rules of the sales, marketing and operational strategies of your company. The importance of MDM lies more crucial because it directly governs the business priorities with the ever-growing government regulations . Customer data, Supplier data, product life cycle management and data governance are all significant contributors of initiatives driven by the businesses</p>

           <div className="dynamics_list">
            <ul>
              <li>
              Senior management supports the entire program to help driven the initiatives from the top down approach.

              </li>
              <li>Business users to champion and assist with smooth implementation.</li>
            </ul>
           </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">

              <div className="dynamic_img">
                <img src={Who_we_r} alt=""  width="550px"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Erp;
