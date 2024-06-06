import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import BreadCumb from "../../Components/Breadcumb/index";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import {BAN_ABT_IMG  } from "../../Components/Breadcumb/Constant";
import {
  ABOUT_BANK,
  ABOUT_MISSION,
  ABOUT_VISION,
  HONESTY,
  MEDICAL,
  Manufacturing,
  NGO,
  WAVE_IMG,
  about_who_we_Are,
} from "./Constant";
import "./style.scss";
import Heading from "../../Components/Utils/Heading";
import SubTitle from "../../Components/Utils/Title_head";
import ClientLogo from "../../Components/ClientLogo";
import { Fade } from "react-awesome-reveal";
import { WHO_WE_ARE_IMG } from "../Home/Constant";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsEnvelope, BsLinkedin, BsTelephoneInbound } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Contact from "../../Components/Contact/Contact";
import Heading2 from "../../Components/Utils/Heading2";
import Inception from "../../Components/Inception";
const About = () => {
  const CoreValueData = [
    {
      id: 1,
      name: "Honesty",
      description:
        "A culture of honesty results in more than “happy” workplaces, and a deep-seated respect and expectation for honesty makes companies more successful and more profitable.",
      image: require("../../Assets/images/About_corevalue_img1.png"),
    },
    {
      id: 2,
      name: "Transparency",
      description:
        "Business transparency is the process of being open, honest, and straightforward about various company operations to their employees and stakeholders.",
      image: require("../../Assets/images/About_corevalue_img2.png"),
    },
    {
      id: 3,
      name: "Integrity",
      description:
        "As an integral firm, we ensure that we act with high integrity and consistency in whatever we undertake. We act with honesty and be consistent on belief compass you have.",
      image: require("../../Assets/images/About_corevalue_img3.png"),
    },
    {
      id: 4,
      name: "Value Creation",
      description:
        "Business owner’s extensive reservoir of understanding on customers’ needs and preferences, business environments and their dynamics add to value creation.",
      image: require("../../Assets/images/About_corevalue_img4.png"),
    },
    {
      id: 5,
      name: "Ethics",
      description:
        "Improved Ethical performance results in improved financial performances. It makes good financial sense for investors to prefer such companies who have good ethical performances.",
      image: require("../../Assets/images/About_corevalue_img5.png"),
    },
    {
      id: 6,
      name: "Knowledge",
      description:
        "Value is the ultimate benefit that your business provides and is the reason why others want to purchase your products or services. Creating a value puts a company above the other.",
      image: require("../../Assets/images/About_corevalue_img6.png"),
    },
  ];

  const [coreValue, setCoreValue] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))
  }, []);

  useEffect(() => {
    setCoreValue(CoreValueData);
  }, []);
  return (
    <>
      <Helmet>
        <title>About - Sakshath</title>
        <meta name="description" content="About SEO" />
      </Helmet>

      <BreadCumb imgUrl={BAN_ABT_IMG} title="About Us" />
      <section className=" about_who">
        <div className="container mt-4">
          <div className="row mt-4 about_who_we_r ">
            <div className="col-md-6 ipad_full_width">
              <div className="about_who_we_r_content">
                <Fade direction="up" delay={50} triggerOnce>
                  <Heading2 heading="Who we are" />
                </Fade>
                <Fade direction="up" triggerOnce>
                  <p>
                    Our journey started way back in the year 2012. It started as
                    a partnership firm initially under the name{" "}
                    <strong> Saaksh8 Consulting Services</strong> with smidgen
                    capital, later in the years this small consulting firm
                    providing IT recruitment Services ran into the idea of
                    having an ERP offshore development. If not quite a tale of
                    rags to riches, the story of Sakshath Technologies® rise to
                    stardom certainly came closer. The birth of Sakshath
                    Technologies® in 2015, wouldn’t be possible without the
                    utmost faith and trust of family and friends. <br />
                    <br />
                    Sakshath Technologies® biggest USP’s are ERP (Epicor, MS
                    Dynamics, JD Edwards and SYSPRO), QA, BI & Analytics (Power
                    BI, Qlik and Tableau).
                    <strong>
                      {" "}
                      Sakshath Technologies® is the only company in India to
                      provide SYSPRO Services that are designed in a way to
                      support growth and improve profitability
                    </strong>
                    . We are committed to helping customers understand that the
                    software used in their organization is a business decision
                    that maximizes their software investment. We are equipped
                    with software-skilled consultants to identify and enhance
                    the client’s business processes to increase efficiency and
                    maximize profits.
                    <br />
                    <br />
                    We go by the saying <strong>“I’m Sakshath”</strong> the
                    thought behind the phrase is the presence of all the
                    employees<strong> ‘HERE’ and ‘NOW’</strong>. Starting as a
                    self-funded business Sakshath Technologies® company ethos to
                    date is BY THE PEOPLE, FOR THE PEOPLE. Every employee from
                    the beginning of the journey made what Sakshath
                    Technologies® is today, we grew gradually to a family of
                    200+ employees and now have a domestic presence in 3
                    metropolitan cities serving clients from all over the world.
                    Celebrating decade milestones, today we take pride in
                    onboarding the team of Country’s Best and strongly believe
                    in Growing Together.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-md-6 ipad_full_width about_img_col6">
              <div className="who_we_are_img ipad_full_width ">
                <img src={about_who_we_Are} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mt-4">
        <div className="container mt-4">
          <div className="row mt-4 ">
            <div className="col-md-6 ipad_full_width">
              <div className="who_we_are_img_bottom">
                <img src={about_who_we_Are} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 ipad_full_width">
              <div className="about_who_we_r_content_right">
                <Fade direction="up" triggerOnce>
                  <p>
                    We go by the saying <strong>“I’m Sakshath” </strong> the
                    thought behind the phrase is the presence of all the
                    employees ‘HERE’ and ‘NOW’. Starting as a self-funded
                    business Sakshath company ethos to date is BY
                    THE PEOPLE, FOR THE PEOPLE. Every employee from the
                    beginning of the journey made what Sakshath Technologies is
                    today, we grew gradually to a family of 100+ employees and
                    now have a domestic presence in 3 metropolitan cities
                    serving clients from all over the world. Celebratingdecade
                    milestones, today we take pride in onboarding the team of
                    Country’s Best and strongly believe in Growing Together.{" "}
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* industry starts */}

      {/* <section>
  <div className="container">

  <div className="row text-center">
    <Heading heading="Service Industries"/>
  </div>
    <div className="row text-center">
      <div className="col-md-4">
        <div className="about_industry_box">
          <img src={HONESTY} alt="" />
          <h2>Banking</h2>
        </div>
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
    </div>
  </div>
</section> */}

      {/* <section className="managed_service_flowchart_sec">
        
        <div className="container-fluid">
          <div className="row text-center mb-4">
            <Heading heading="Service Industries" />
          </div>
          <Fade direction="up" delay={300} triggerOnce>
            <div className="row">
              <div className="col-md-2 about_industry_box bg1">
                <div className="managed_service_content">
                  <img src={ABOUT_BANK} alt="" />
                  <h5>Banking</h5>
                </div>
              </div>

              <div className="col-md-2  about_industry_box bg2">
                <div className="managed_service_content">
                 
                  <img src={NGO} alt="" />
                  <h5>NGO</h5>
                </div>
              </div>

              <div className="col-md-2 about_industry_box bg3">
                <div className="managed_service_content">
                 
                  <img src={Manufacturing} alt="" />
                  <h5>Manufacturing</h5>
                </div>
              </div>

              <div className="col-md-2 about_industry_box bg4">
                <div className="managed_service_content">
                  
                  <img src={MEDICAL} alt="" />
                  <h5>Healthcare</h5>
                </div>
              </div>

              <div className="col-md-2 about_industry_box bg5">
                <div className="managed_service_content">
                 
                  <img src={NGO} alt="" />
                  <h5>Retail</h5>
                </div>
              </div>

              <div className="col-md-2 about_industry_box bg6">
                <div className="managed_service_content">
                  
                  <img src={NGO} alt="" />
                  <h5>Food & Beverages</h5>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section> */}
      {/* industry ends */}
      {/* vision misson starts */}

      <section className="vision">
        <div className="container">
          <div className="row align-items-center vision_container">
            <div className="col-md-5">
              <p className="vision_para">
                <Fade direction="up" delay={150} triggerOnce>
                  It is the desire of Sakshath Technologies® to establish itself
                  as a powerful business operation with vibrance and growth
                  built on Sakshath Technologies® principles that is highly
                  regarded by our customers, stake holders and our employees. As
                  an organization, we want to be in a place where customers rely
                  on the excellence of our products and services.
                </Fade>
              </p>
            </div>
            <div className="col-md-2 text-center d-flex justify-content-center">
              <div className="vision_rounded">
                <p>Our Vision</p>
              </div>
            </div>
            <div className="col-md-5"></div>
          </div>
          <div className="row align-items-center mision_container ">
            <div className="col-md-5 "></div>
            <div className="col-md-2 text-center d-flex justify-content-center">
              <div className="mision_rounded">
                <p>Our Mission</p>
              </div>
            </div>
            <div className="col-md-5">
              <p className="mision_para">
                <Fade direction="up" delay={150} triggerOnce>
                  To engage businesses from small to medium enterprises to
                  transition into ERP solutions that are easy to use, scalable,
                  enable business insight and ultimately benefit the user
                  community. We want to be a fair, reliable and professional
                  partners to our customers by offering useful and effective
                  products and services that contribute to their success
                </Fade>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="mission">
        <div className="container">
          
        </div>
      </section> */}

      {/* Inception starts*/}

      <Inception />
      {/* Inception ennds */}

      {/* client logo */}
      {/* <ClientLogo /> */}
      {/* client logo ends */}

      {/* contact */}
      {/* <Contact /> */}
      {/* contact ends */}

      {/* <section className="contact_map_section">
        <div className="container mt-4">
          <div className="row">
          
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1QtXoNJa4bNr3llNKRLddH_rzCUNktWQ&ehbc=000F&noprof=1"
                width="100%"
                height="435"
              ></iframe>
            </div>

            <div className="col-md-6">
            
              <Contact />
             
            </div>
          </div>
        </div>
      </section> */}

      {/* Core values starts */}
      <section className="core_values">
        <div className="container">
          <div className="row">
            <div className="core_value_heading text-center  mb-4">
              <Heading heading="CORE VALUES" />
            </div>
            {coreValue.map((data) => {
              return (
                <div className="col-md-4 mb-4">
                  <div className="core_value_box">
                    <div className="title d-flex justify-content-between">
                      <Fade direction="up" delay={450} triggerOnce>
                        <p>{data.name}</p>
                        <img src={data.image} alt="" />
                      </Fade>
                    </div>
                    <Fade direction="up" delay={450} triggerOnce>
                      <p>{data.description}</p>
                    </Fade>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
