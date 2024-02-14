import React from "react";
import "./style.scss";
import {
  ABOUT_WHO_WE_ARE,
  EPICOR_OVERVIEW,
  SUPPLY_CHAIN_IMG,
} from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import { ABOUT_BANNER } from "../../../Components/Breadcumb/Constant";
import BreadCumb from "../../../Components/Breadcumb";
import { EXPERIENCE } from "../../../Components/OurPrincipals/Constant";
import ProcessFlow from "../../../Components/ProcessFlow";

const Erp = () => {
  return (
    <>
      {/* EPICOR  overview  starts*/}
      <BreadCumb imgUrl={ABOUT_BANNER} title="ERP" />
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

      <section className="epicor_section">
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
      </section>
      {/* EPICOR  overview ends*/}

      {/* Syspro  overview Starts*/}
      <section className="syspro_section">
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

              {/* SYSPRO’s powerful and versatile feature set integrated with
                  the latest innovative technologies provides a gateway to
                  digitizing your business, streamlining your supply chain, and
                  providing greater control and visibility, while simplifying
                  and personalizing the experience */}

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
      </section>

      {/* Syspro  overview ends*/}

      {/* Industries starts */}
      {/* <section className="industry_section">
        <div className="container">
            <div className="row">

            </div>
        </div>
      </section> */}
      {/* Industries ends */}

      <ProcessFlow/>
    </>
  );
};

export default Erp;
