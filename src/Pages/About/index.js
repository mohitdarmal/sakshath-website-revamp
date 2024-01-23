import React from "react";
import { Helmet } from "react-helmet";
// import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import BreadCumb from "../../Components/Breadcumb/index";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import { ABOUT_MISSION, ABOUT_VISION, about_who_we_Are } from "./Constant";
import "./style.scss";
import Heading from "../../Components/Utils/Heading";
import SubTitle from "../../Components/Utils/Title_head";
import ClientLogo from "../../Components/ClientLogo";
import { Fade } from "react-bootstrap";
import { WHO_WE_ARE_IMG } from "../Home/Constant";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsEnvelope, BsLinkedin, BsTelephoneInbound } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
            <div className="col-md-6">
              <div className="who_we_are_img">
                <img src={about_who_we_Are} alt="" className="img-fluid" />
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
                    It is the desire of Sakshath to establish itself as a
                    powerful business operation with vibrance and growth built
                    on Sakshath’s principles that is highly regarded by our
                    customers, stake holders and our employees. As an
                    organization, we want to be in a place where customers rely
                    on the excellence of our products and services.
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
                    To engage businesses from small to medium enterprises to
                    transition into ERP solutions that are easy to use,
                    scalable, enable business insight and ultimately benefit the
                    user community. We want to be a fair, reliable and
                    professional partner to our customers by offering useful and
                    effective products and services that contribute to their
                    success.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* client logo */}
      <ClientLogo />
      {/* client logo ends */}

      {/* SECTION - "WHO WE ARE" */}
      {/* <section className="who_we_are">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-box ">
              <Fade direction="left" delay={10}>
                <img className="img-fluid" src={WHO_WE_ARE_IMG} alt="" />
                </Fade>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
           
              <div className="text_wrapper">
                <div className="title_area">
                <Fade direction="up"> <SubTitle SubTitle="Who we are" /></Fade>  
                <Heading heading="The Enterprise Productivity Platform For Complex Data" uppercase="text-uppercase" />  
                </div>
                <p>
                  Sed perspiciatis unde omnis iste natus voluptate accusantiuy
                  doloremque laudantium totam rem aperiam eaque quae ainvtore
                  veritatis quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed quia consequuntur magni dolores eos ratione
                  volupta seque nesciunt porro quisquam doloremdolor site
                </p>
                <Fade direction="up"> <SlideAnimationButton btnName="LEARN MORE ABOUT US" /> </Fade>
              </div>
            
            </div>
          </div>
        </div>
      </section> */}
      {/* Who we are ends */}

      {/* contact us start */}

      {/* <section className="pt-100 pb-100">
        <div className="container  ">
          <div className="row">
            <div className="col-md-4 mt-4 contact_us_container bg-light">
              <div className="sub_title ">
                <SubTitle SubTitle="Contact Us" />
              </div>

              <p>
                {" "}
                <MdOutlineLocationOn />
                &nbsp; Jakkur Main Road Bangalore, Karnataka
              </p>
              <p>
                <BsEnvelope />
                &nbsp; Sakshtah-technologies@gmail.com
              </p>
              <p>
                <BsTelephoneInbound /> &nbsp; 8574883383
              </p>

              <div className="contact_social_icon d-flex">
                <Link to="/">
                  {" "}
                  <BsLinkedin />{" "}
                </Link>
                <Link to="/">
                  {" "}
                  <RiInstagramFill />{" "}
                </Link>
                <Link to="/">
                  {" "}
                  <FaYoutube />{" "}
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-control">
               
                <form  className="mt-4">
  <div class="row">
  <h5>Send Message</h5>
    <div class="col-6 mt-4">

      <input type="text" class="form-control" placeholder="First name" />
      <hr style={{border:'1px solid grey'}}/>
    </div>
    <div class="col-6 mt-4">

      <input type="text" class="form-control" placeholder="Last name"/>
      <hr style={{border:'1px solid grey'}}/>
    </div>
    <br />
    <div class="col-6 mt-4">

      <input type="email" class="form-control" placeholder="Email"/>
      <hr style={{border:'1px solid grey'}}/>
    </div>
    <div class="col-6 mt-4">

      <input type="text" class="form-control" placeholder="Mobile Number"/>
      <hr style={{border:'1px solid grey'}}/>
    </div>
    <div className="submit_button mt-4">
    <button type="submit">send</button>
    </div>
 
  </div>
</form>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* contact us ends */}

      <section>
        <div className="container mt-4">
          <div className="row">
          <span>Contact Us</span>
            <div className="col-md-6">
            <iframe src="https://www.google.com/maps/d/embed?mid=1QtXoNJa4bNr3llNKRLddH_rzCUNktWQ&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>

            </div>
           
            <div className="col-md-6">

            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default About;
