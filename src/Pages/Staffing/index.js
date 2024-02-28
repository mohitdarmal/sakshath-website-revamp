import React from "react";
import "./style.scss";
import {
  ABOUT_WHO_WE_ARE,
  RPA_BOT,
  STAFFING,
  STAFFING_ASSESSMENT,
  STAFFING_BENIFIT,
  STAFFING_DATABASE,
} from "./Constatnt";
import Breadcumb from "../../Components/Breadcumb";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../Service/ApplicationDevelopment/Constant";
import Heading from "../../Components/Utils/Heading";
import CallToAction from "../../Components/CallToAction";
import { Fade } from "react-awesome-reveal";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
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
              <Fade direction="up" delay={300} triggerOnce>
                <div className="staffing_main_headig">
                  <Heading heading="Helping Organizations Match Great Talent to Great Opportunity" />
                </div>
              </Fade>
              <Fade direction="up" delay={300} triggerOnce>
                <div className="staffing_content">
                  {/* <ul> */}
                  <li>
                    Sakshath Technologies understands the critical importance of
                    connecting exceptional talent with ideal opportunities for
                    organizational success. Whether you're a small business or a
                    large corporation with an established HR department,
                    sourcing the right individuals can be challenging.
                  </li>

                  <li>
                    Sakshath Technologies offers enhanced access to talent and a
                    refined approach to aligning the right individual with the
                    job, resulting in expedited and improved business outcomes.
                  </li>
                  <li>
                    We take a proactive approach with our clients to address the
                    constantly increasing demand for the workforce while
                    focusing on improving productivity, reducing costs, ensuring
                    statutory compliance, and facilitating swift mobilization
                    and demobilization of resources.
                    <br />
                    <br />
                    <SlideAnimationButton
                      btnName="Get Started Now"
                      url="/contact-us"
                    />
                  </li>
                  {/* </ul> */}
                </div>
              </Fade>
            </div>
            <div className="col-md-6">
              <div className="staffing_img">
                <img src={STAFFING} alt="" />
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
              <Fade direction="up" triggerOnce>
                <div className="staffing_industry_offer_box ">
                  <img src={RPA_BOT} alt="" />
                  <h5>Fintech</h5>
                </div>
              </Fade>
            </div>
            <div className="col-md-3">
              <Fade direction="up" triggerOnce>
                <div className="staffing_industry_offer_box ">
                  <img src={RPA_BOT} alt="" />
                  <h5>IT & ITES</h5>
                </div>
              </Fade>
            </div>
            <div className="col-md-3">
              <Fade direction="up" triggerOnce>
                <div className="staffing_industry_offer_box ">
                  <img src={RPA_BOT} alt="" />
                  <h5>Telecom</h5>
                </div>
              </Fade>
            </div>
            <div className="col-md-3">
              <Fade direction="up" triggerOnce>
                <div className="staffing_industry_offer_box ">
                  <img src={RPA_BOT} alt="" />
                  <h5>Automotive</h5>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* staffing benfits end */}

      {/* content2 */}
      <Fade direction="up" triggerOnce>
        <CallToAction
          ctaContent={
            "We focus on providing a quality staffing service for our clients and a smooth career transition for our candidates. "
          }
        />
      </Fade>
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

      <section className="our_staf_service_section">
        <div className="container">
          <div className="row">
            <div className="staffing_service text-center">
              <Heading heading="Our Staffing Services" />

              <p>
                Our primary objective is to provide a quality staffing service
                to our clients and to help our candidates transition smoothly
                from one career to another. As a result, we have created the
                perfect synergy between technology and human interaction, which
                enables us to achieve measurable and effective results.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* staffing JOb starts */}
      <section className="staffing_job_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="staffing_job_box1">
                <h4>Contract</h4>
                <p>
                  Placements on a contract basis are ideal for companies that
                  manage multiple projects and require employees to fill
                  multiple or various roles and positions. If you need
                  assistance finishing an ongoing project or taking one from
                  start to finish, we have expert consultants who are ready to
                  get started immediately and deliver the results that you need.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="staffing_job_box">
                <h4>Contract-to-Hire</h4>
                <p>
                  In contrast to contract placements, contract-to-hire
                  placements are similar to contract placements, with the
                  exception that the company usually intends to hire the
                  consultant on a Full-Time basis at some point in the future.
                  The company has the opportunity to evaluate the performance of
                  the contractor before making a formal offer of employment
                  under a contract-to-hire arrangement. Before moving on to a
                  full-time position, the consultant will be employed as a
                  contractor for a designated evaluation period.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="staffing_job_box1">
                <h4>Full Time</h4>
                <p>
                  Full-time employment is the perfect option for companies that
                  seek long-term resources and solutions. At Sakshath Staffing,
                  we specialize in establishing valuable connections with top
                  permanent placement services that give companies the ability
                  to hire permanent employees immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* staffing job ends */}

      {/* Staffing Benifits starts */}
      <section className="staffing_benifit_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center benifit_heading">
              <Heading heading="Benefits" />
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-12"> */}
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-12 d-flex">
              <div className="col-md-3 benifits_col_box_1">
                <div className="staffing_benifit">
                  <h6>Effective and Unconventional Recruitment Strategies</h6>
                  <img src={STAFFING_BENIFIT} alt="" />
                </div>
              </div>
              <div className="col-md-3 benifits_col_box_2">
                <div className="staffing_benifit">
                  <h6>Pre- Qualification Assessment</h6>
                  <img src={STAFFING_ASSESSMENT} alt="" />
                </div>
              </div>
              <div className="col-md-3 benifits_col_box_1">
                <div className="staffing_benifit ">
                  <h6> Strong Database</h6>
                  <img src={STAFFING_DATABASE} alt="" />
                </div>
              </div>
              <div className="col-md-3 benifits_col_box_2">
                <div className="staffing_benifit">
                  <h6> SLA Driven Delivery Approach</h6>
                  <img src={STAFFING_BENIFIT} alt="" />
                </div>
              </div>
            </div>
            {/* <div className="col-md-1"></div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* Staffing Benifits ends */}

      {/* Last three dicovery starts */}

      <section className="discovery_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <div className="box_dis">
                <div className="dicovery_box">
                  <h4>Discovery</h4>

                  <p>
                    We dig in with client leadership to understand the current
                    situation, desired future state, and team culture to develop
                    a clear picture of the ideal candidate to effect positive
                    change within the organization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="box_dis">
                <div className="dicovery_box">
                  <h4>Analyse</h4>

                  <p>
                    Building on Discovery, we research to find the right
                    framework to identify and target the candidate profiles
                    needed to build client teams that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_dis ">
                <div className="dicovery_box">
                  <h4>Execute</h4>

                  <p>
                    Leveraging our network and extensive experience, augmented
                    by proprietary technology, we deliver and iterate based on
                    client feedback to ensure successful selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* discovery end */}
    </>
  );
};

export default Staffing;
