import React from "react";
import "./style.scss";
import { ABOUT_WHO_WE_ARE, RPA_BOT } from "./Constatnt";
import Breadcumb from "../../Components/Breadcumb";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../Service/ApplicationDevelopment/Constant";
import Heading from "../../Components/Utils/Heading";
import CallToAction from "../../Components/CallToAction";
const Staffing = () => {
  return (
    <>
      <Breadcumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Staffing"
      />
      {/* staffing main starts */}
      <section className="staffing_main_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="staffing_main_headig">
                <Heading heading="Helping Organizations Match Great Talent to Great Opportunity" />
              </div>

              <div className="staffing_content">
                {/* <ul> */}
                <li>
                  Sakshath Technologies understands the critical importance of
                  connecting exceptional talent with ideal opportunities for
                  organizational success. Whether you're a small business or a
                  large corporation with an established HR department, sourcing
                  the right individuals can be challenging.
                </li>

                <li>
                  Sakshath Technologies offers enhanced access to talent and a
                  refined approach to aligning the right individual with the
                  job, resulting in expedited and improved business outcomes.
                </li>
                <li>
                  We take a proactive approach with our clients to address the
                  constantly increasing demand for the workforce while focusing
                  on improving productivity, reducing costs, ensuring statutory
                  compliance, and facilitating swift mobilization and
                  demobilization of resources.
                </li>
                {/* </ul> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="staffing_img">
                <img src={ABOUT_WHO_WE_ARE} alt="" width="650px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* staffing mian ends */}

      {/* staffing benfits start*/}
      <section className="staffing_industry_offer_section">
        <div className="container">
          <div className="row">
            <div className="staffing_benift_heading text-center">
              <Heading heading="Industries In Which We Offer" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="staffing_industry_offer_box ">
                <img src={RPA_BOT} alt="" />
                <h5>Fintech</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="staffing_industry_offer_box ">
                <img src={RPA_BOT} alt="" />
                <h5>IT & ITES</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="staffing_industry_offer_box ">
                <img src={RPA_BOT} alt="" />
                <h5>Telecom</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="staffing_industry_offer_box ">
                <img src={RPA_BOT} alt="" />
                <h5>Automotive</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* staffing benfits end */}

      {/* Staffing services we offer starts*/}
      <section>
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      {/* Staffing services we offer ends */}

      {/* content2 */}
      <CallToAction
        ctaContent={
          "We focus on providing a quality staffing service for our clients and a smooth career transition for our candidates. "
        }
      />
      {/* content2 */}

      <section className="staffing_why_sakshath">
        <div className="container">
          <div className="row">
            <div className="staffing_why_sak_heading text-center">
              <Heading heading="Why Sakshath" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="satffing_why_sak_box">
                <div className="staffing_why_sak_list">
                  <ul>
                    <li>
                      We are committed to excellence. Our staffing approach is
                      tailored to support all business types, from small offices
                      to Fortune companies. Our sole focus is on providing you
                      with the best tech talent options that match your unique
                      working requirements and culture.
                    </li>
                    <li>
                      Our foundation is deeply rooted in the relationships we
                      have built and cultivated with individuals, coworkers,
                      businesses, and organizations. From contractors to
                      direct-hire, our knowledgeable recruiters stand ready to
                      connect you to the opportunities you are searching for.
                    </li>

                    <li>
                      {/* <strong>

                    Hire the best talent and achieve maximum business success.</strong>   <br /> */}
                      Sakshath Staffing is a leading IT staffing agency that
                      connects employers with the top development and creative
                      talent in India. Utilizing our innovative team building
                      and staffing solutions we deliver recruitment results that
                      improve the bottom line. Our expert recruiters specialize
                      in providing hand-selected talent across a wide variety of
                      departments and services.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row">
            <div className="staffing_service text-center">
              <Heading heading="Our Staffing Services"/>

              <p>
              Our primary objective is to provide a quality staffing service to our clients and to help our candidates transition smoothly from one career to another. As a result, we have created the perfect synergy between technology and human interaction, which enables us to achieve measurable and effective results.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="staffing_job_box">
              <h4>
              Contract

              </h4>
              <p>
              Placements on a contract basis are ideal for companies that manage multiple projects and require employees to fill multiple or various roles and positions. If you need assistance finishing an ongoing project or taking one from start to finish, we have expert consultants who are ready to get started immediately and deliver the results that you need.
              </p>

              </div>
            </div>
            <div className="col-md-4">
              <div className="staffing_job_box">
              <h4>
              Contract

              </h4>
              <p>
              Placements on a contract basis are ideal for companies that manage multiple projects and require employees to fill multiple or various roles and positions. If you need assistance finishing an ongoing project or taking one from start to finish, we have expert consultants who are ready to get started immediately and deliver the results that you need.
              </p>

              </div>
            </div>
            <div className="col-md-4">
              <div className="staffing_job_box">
              <h4>
              Contract

              </h4>
              <p>
              Placements on a contract basis are ideal for companies that manage multiple projects and require employees to fill multiple or various roles and positions. If you need assistance finishing an ongoing project or taking one from start to finish, we have expert consultants who are ready to get started immediately and deliver the results that you need.
              </p>

              </div>
            </div>
            {/* <div className="col-md-4"></div> */}
            {/* <div className="col-md-4"></div> */}
          </div>
        </div>
      </section>


      {/*  */}
    </>
  );
};

export default Staffing;
