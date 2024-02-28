import React from "react";

import "./style.scss";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import BreadCumb from "../../Components/Breadcumb";
import { BANKING_BG_IMG, Who_we_r } from "./Constant";
import Heading from "../../Components/Utils/Heading";
const BankingSolution = () => {
  return (
    <>
      <BreadCumb imgUrl={ABOUT_BANNER} title="Banking Solution" />

      <section className="banking_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banking_main_content">
                {/* <h3>
                Welcome to Sakshath Banking Solutions!
                                </h3> */}
                <Heading heading="Welcome to Sakshath Banking Solutions!" />

                <p>
                  At Sakshath, we specialize in providing cutting-edge IT
                  solutions tailored specifically for the banking sector. With
                  our expertise, we assist banks in managing and scaling their
                  services, integrating various banking functionalities
                  seamlessly, and offering comprehensive analytical solutions to
                  understand and serve customers better.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banking_img">
                <img src={Who_we_r} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer_web_section">
        <div className="container">
          <div className="row">
            <div className="banking_upper_heading text-center">
              {/* <img src={BANKING_BG_IMG} alt="" /> */}
              <Heading heading="Recent Projects Showcase" />
            </div>
          </div>
        </div>
      </section>

      <section className="customer_web_box_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="customer_web_box">
                {/* <div className="customer_web_content"> */}
                <h4>Customer Web Application</h4>

                <p>
                  {" "}
                  Empower your customers with our comprehensive online platform
                  designed to provide convenient access to loan details,
                  facilitate seamless communication, and efficiently manage
                  Re-KYC requirements. Our user-friendly portal acts as a
                  one-stop solution, allowing borrowers to stay informed,
                  address service-related issues, and update their KYC
                  hassle-free.
                </p>
                {/* </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="customer_web_box">
                {/* <div className="customer_web_content"> */}
                <h4> Stakeholder Web Application C360</h4>

                <p>
                  {" "}
                  Gain a holistic view of your business performance and
                  operational efficiency with our organization's stakeholder
                  platform. Our portal integrates essential features like
                  real-time business number overviews, visualization charts,
                  operations queues, and Power BI dashboards. It serves as a
                  centralized hub for insightful analysis and informed
                  decision-making across all levels of your organization.
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="key_feature_section">
        <div className="container-fluid">
          <div className="row">
            <div className="key_feature_heading text-center">
              <Heading heading="Key Features" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 key_feature_box">
              {/* <div className="key_feature_box"> */}
              <h4>Real-time Business Metrics</h4>
              <p>
                Access real-time business metrics and KPIs, including revenue,
                sales figures, customer acquisition rates, and product
                performance. Easily digestible formats allow stakeholders to
                assess overall business health and identify trends swiftly.
              </p>
              {/* </div> */}
            </div>
            <div className="col-md-3 key_feature_box">
              {/* <div className="key_feature_box"> */}
              <h4>Visualization Tools</h4>
              <p>
                Customize charts and graphs to focus on specific metrics or time
                periods, enabling deeper insights into business performance and
                market trends. Our portal offers a variety of visualization
                tools, including graphs, pie charts, and trend analysis charts.
              </p>
              {/* </div> */}
            </div>
            <div className="col-md-3 key_feature_box">
              {/* <div className="key_feature_box"> */}
              {/* <img src={Who_we_r} alt=""  width="200px"/> */}
              <h4>Operations Queue</h4>
              <p>
                Streamline daily operational tasks such as application logins,
                status updates, and pending approvals through our intuitive
                operations queue. Ensure efficient task assignment, tracking,
                and completion within designated timeframes.
              </p>
              {/* </div> */}
            </div>
            <div className="col-md-3 key_feature_box">
              {/* <div className=""> */}
              <h4>Power BI Dashboards Integration</h4>
              <p>
                Seamlessly migrate Power BI dashboards to our portal,
                consolidating all analytical tools into a single platform.
                Access dynamic reports and interactive visualizations generated
                by Power BI for advanced data analysis and exploration.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BankingSolution;
