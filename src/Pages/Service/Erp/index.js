import React from "react";
import "./style.scss";
import { EPICOR_OVERVIEW, SUPPLY_CHAIN_IMG } from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import { ABOUT_BANNER } from "../../../Components/Breadcumb/Constant";
import BreadCumb from "../../../Components/Breadcumb";

const Erp = () => {
  return (
    <>
      {/* EPICOR  overview  starts*/}
      <BreadCumb imgUrl={ABOUT_BANNER} title="ERP" />
      <section className="epicor_section">
        <div className="container">
          <div className="row align-items-center">
            {/* <p>
                Struggling to meet production demands? <br />
                Epicor's manufacturing solutions revolutionize your shop floor.
                From intelligent BOM management to real-time quality control,
                witness unparalleled efficiency.
              </p> */}

            <div className="col-md-6">
              <div className="epicor_content">
                {/* <div className="erpicor_subtitle">
                <h4>
                  Is your production line a bottleneck? <br /> <br />
                  Epicor's manufacturing magic optimizes processes, minimizes
                  errors, and ensures your products meet the highest standards
                  of quality and efficiency.
                </h4>
              </div> */}
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
      </section>

      {/* ERP_OVERVIEW ends */}

      {/* Syspro Starts start */}
      <section>
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
              {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                quos dignissimos error amet distinctio delectus et aperiam?
                Reprehenderit quo ullam sint assumenda, similique eligendi et
                tenetur, ad, debitis quisquam consequatur.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* Syspro Starts ends*/}

      {/*Industries starts */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="industry_container">
                <div className="industry_top">
                    <img src={SUPPLY_CHAIN_IMG} alt="SUPPLY CHAIN IMG" />
                </div>
                <div className="industry_center">
                        
                </div>
                <div className="industry_bottom">Supply Chain</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Industries ends */}
    </>
  );
};

export default Erp;
