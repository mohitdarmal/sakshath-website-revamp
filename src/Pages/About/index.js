import React from "react";
import { Helmet } from "react-helmet";
// import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import BreadCumb from "../../Components/Breadcumb/index";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import { ABOUT_MISSION, ABOUT_VISION, about_who_we_Are } from "./Constant";
import "./style.scss";
import Heading from "../../Components/Utils/Heading";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Sakshath</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <section className="mt-4">
        <BreadCumb imgUrl={ABOUT_BANNER} title="About Us" />
        <div className="container mt-4">
          <div className="row mt-4 ">
            <div className="col-md-6">
              <div className="who_we_are_img">
                <img src={about_who_we_Are} alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_who_we_r_content">
                {/* <div className="about_who_we_r_content"> */}

                {/* </div> */}
                <Heading heading="Who we are" uppercase="text-uppercase" />

                <p>
                  Our journey started way back in the year 2012. It started as a
                  partnership firm initially under the name Saaksh8 Consulting
                  Services with smidgen capital, later in the years this small
                  consulting firm providing IT recruitment Services ran into the
                  idea of having an ERP offshore development. If not quite a
                  tale of rags to riches, the story of Sakshath Technologies’
                  rise to stardom certainly came closer. The birth of SAKSHATH
                  TECHNOLOGIES® in 2015, wouldn’t be possible without the utmost
                  faith and trust of family and friends. <br />
                  <br />
                  Sakshath Technologies’ biggest USP’s are ERP (Epicor, MS
                  Dynamics, JD Edwards and SYSPRO), QA, BI & Analytics (Power
                  BI, Qlik and Tableau). SakshathTechnologies® is the only
                  company in India to provide SYSPRO Services that are designed
                  in a way to support growth and improve profitability. We are
                  committed to helping customers understand that the software
                  used in their organization is a business decision that
                  maximizes their software investment. We are equipped with
                  software-skilled consultants to identify and enhance the
                  client’s business processes to increase efficiency and
                  maximize profits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="who_we_r_content">
        <div className="container">
          <div className="row mt-4">
            <p className="about_content">
              We go by the saying “I’m Sakshath” the thought behind the phrase
              is the presence of all the employees ‘HERE’ and ‘NOW’. Starting as
              a self-funded business Sakshath Technologies’ company ethos to
              date is BY THE PEOPLE, FOR THE PEOPLE. Every employee from the
              beginning of the journey made what Sakshath is today, we grew
              gradually to a family of 100+ employees and now have a domestic
              presence in 3 metropolitan cities serving clients from all over
              the world. Celebratingdecade milestones, today we take pride in
              onboarding the team of Country’s Best and strongly believe in
              Growing Together.
            </p>
          </div>
        </div>
      </section>
      <section className="company_vison">
        <div className="container">
          <div className="row text-center vission_mission">
          
            <div className="col-md-6 main-content">
            <div className="box">

           
              <div className="vision">
                <div className="vison_img">
                  <img src={ABOUT_VISION} alt="" style={{ width: "10%" }} />
                </div>
                <Heading heading="VISION" uppercase="text-uppercase" />
                <div className="vision_content justify-content-start">
                It is the desire of Sakshath to establish itself as a powerful business operation with vibrance and growth built on Sakshath’s principles that is highly regarded by our customers, stake holders and our employees. As an organization, we want to be in a place where customers rely on the excellence of our products and services. 
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission">
              <div className="box">
                <div className="mission-img">
                  <img src={ABOUT_MISSION} alt="" style={{ width: "10%" }} />
                </div>
                <Heading heading="MISSION" uppercase="text-uppercase" />
                <div className="vision_content justify-content-start">
                To engage businesses from small to medium enterprises to transition into ERP solutions that are easy to use, scalable, enable business insight and ultimately benefit the user community. We want to be a fair, reliable and professional partner to our customers by offering useful and effective products and services that contribute to their success. 
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
