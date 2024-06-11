import React, { useEffect, useRef, useState } from "react";
import { useVoiceToText } from "react-speakup";
import { Link, NavLink } from "react-router-dom";
import {
  WHO_WE_ARE_IMG,
  POPULARANALYTICS,
  POPULARBANK,
  POPULARWEB,
  POPULAUTOMATION,
  BANNER1,
  HAPPYICON,
  P_IMG,
  TEAM_IMG,
  IT_IMG,
  BLOGIMG1,
  BLOGCPROFILE,
  ISO_27001,
  GREAT_PLACE_WORK,
  ISO_9001,
  PROFESSIONAL_TEAM,
  SPECIALIZATION,
  EXPERIENCE,
  RELIABILTY,
  Achievements1,
  ACHIVEMENT_IMG1,
  ACHIVEMENT_IMG2,
  ACHIVEMENT_IMG3,
  DOTTED_IMG1,
  MILESTONE_TEXT,
  // SLIDES1,
  // SLIDES2_IMG,
  // SLIDES2,
  // SLIDES3,
  TALEND,
  AWS,
  TIMES_OF_INDIA,
  CLIQ_LOGO,
  WCRCINT,
  OUT_LOOK,
  SOTI,
  JAMF,
  Microsoft,
  DB,
  SIMPLIFYQA,
  ERP_ICON,
  AUTOMATION_ICON,
  ANALYTICS_ICON,
  APPLICATION_DEVELOPMENT_ICON,
  APPLICATION_READINESS_ICON,
  ENTERPRISES_MOBILITY_ICON,
} from "./Constant";

import { SlCalender } from "react-icons/sl";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import CountUp from "react-countup";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import Heading from "../../Components/Utils/Heading";
import SubTitle from "../../Components/Utils/Title_head";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import ClientLogo from "../../Components/ClientLogo";
import Faq from "../../Components/Faq";
import HappyClients from "../../Components/HappyClients";
import OurPrincipals from "../../Components/OurPrincipals";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BannerVideo from "../../Assets/images/banner_vid.mp4";
// import { Pagination, Navigation } from 'swiper/modules';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CallToAction from "../../Components/CallToAction";
import SeeCertificatePopup from "../../Components/SeecertificatePopup";
import { Helmet } from "react-helmet";
import BrouchurePopup from "../../Components/BoruchurePopup";
import LetsTalk from "../../Components/LetsTalk";
import {
  ABINBEV,
  ABSA,
  ADITYABIRLA,
  AIRTELTIGO,
  AKSHYAPATHRA,
  CHAITANYA,
  CLIX,
  CRAWDORD,
  ECOBANK,
  EQUITY,
  FNB,
  GWOSEVO,
  JUIPTERHOSPITAL,
  KCB,
  MOOVAFRICA,
  NCBA,
  ONEASSIST,
  PIRAMAL,
  RAWBANK,
  SMFC,
  STANBICBANK,
  STANDARDBANK,
} from "../../Components/ClientLogo/Constant";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  const textSlider = useRef();
  const imageSlider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { startListening, stopListening, transcript } = useVoiceToText();
  const handleTextSlideChange = (index) => {
    setCurrentSlide(index);
    imageSlider.current.slickGoTo(index);
  };

  const handleImageSlideChange = (index) => {
    setCurrentSlide(index);
    textSlider.current.slickGoTo(index);
  };
  const [showClientToggle, setShowClientToggle] = useState(false);

  const showLogo = () => {
    // console.log("show more")

    // if(showClientToggle =="none"){
    //   setShowClientToggle("block")
    // }
    // else{
    //   setShowClientToggle("none")
    // }
    console.log("showtoggle", showClientToggle);
    setShowClientToggle(!showClientToggle);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index) => setCurrentSlide(index),
    prevArrow: <MdArrowBackIos />,
    nextArrow: <MdArrowForwardIos />,
  };

  const achivementData = [
    {
      id: 1,
      heading_Title: "World's Leading Brands & Leaders' House Of Lords, London",
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO & Founder of Sakshath Technologies®...",
      image: require("../../Assets/images/Achivement40.jpg"),
    },
    {
      id: 2,
      heading_Title:
        "Analytics Vidhya - DataHack Summit 2023 Community Sponsor",
      description:
        " DataHack Summit 2023 by Analytics Vidhya is an annual conference that brings together data...",
      image: require("../../Assets/images/achivement_stall.jpg"),
    },
    {
      id: 3,
      heading_Title:
        "Highlighting the impactful contributions of our employees across Africa",
      description:
        " Sanjay is an esteemed member of the Rotary Club.He identified the benefits of the club...",
      image: require("../../Assets/images/achivement_img3.jpeg"),
    },
  ];

  const [achivementHome, setAchivementHome] = useState([]);
  // const [seoData, setSeoData] = useState({});

  useEffect(() => {
    setAchivementHome(achivementData);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Home - Sakshath</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      {/* @@@@@@ Banner Video start @@@@@@ */}
      <section className="tagline_sec">
        <div className="video_background">
          <video autoPlay loop muted playsInline>
            <source src={BannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container tagline_txt">
          <div className="row">
            <div className="col-md-12 text-center">
              <Fade direction="up" delay={300}>
                <div>
                  {" "}
                  <img src={MILESTONE_TEXT} />{" "}
                </div>
                <div className="position-relative">
                  <h1 className="tagline_heading">
                    {" "}
                    Making <span style={{ color: "#32A4D5" }}>
                      {" "}
                      IT Look{" "}
                    </span>{" "}
                    Easy{" "}
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* @@@@@@ Banner Video end @@@@@@ */}

      {/* @@@@@@ Banner Slider start @@@@@@ */}
      {/* <section className="banner_slides_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner_text_slider">
                <Slider
                  ref={textSlider}
                  {...settings}
                  beforeChange={(oldIndex, newIndex) =>
                    handleTextSlideChange(newIndex)
                  }
                >
                  <div className="banner_text_slider_content">
                    <h6>The Power of Analytics in Driving Growth. </h6>
                    <h3>The power of advanced analytics for your business</h3>

                    <div className="banner_text_slider_links">
                      <Link to="/analytics">Get Started Now</Link>
               
                    </div>
                  </div>

                  <div className="banner_text_slider_content">
                    <h6>Future-Ready ERP Solutions for Today's Challenges.</h6>
                    <h3>Unveiling the Power of ERP in Modern Enterprises</h3>
                    <div className="banner_text_slider_links">
                      <Link to="/erp">Get Started Now</Link>
              
                    </div>
                  </div>

                  <div className="banner_text_slider_content">
                    <h6>Unlocking Productivity, One Automation at a Time</h6>
                    <h3>
                      Revolutionizing Your Workflow with Automation Services
                    </h3>

                    <div className="banner_text_slider_links">
                      <Link to="/automation">Get Started Now</Link>
                    
                    </div>
                  </div>

                  <div className="banner_text_slider_content">
                    <h6>
                      Innovative Banking Software Solutions for a Digital
                      Future.
                    </h6>
                    <h3>Navigating the Landscape of Solutions</h3>

                    <div className="banner_text_slider_links">
                      <Link to="/banking-solution">Get Started Now</Link>
                     
                    </div>
                  </div>           
                </Slider>
              </div>
            </div>

            <div className="col-md-6">
              <div className="banner_image_slider">
                <Slider
                  ref={imageSlider}
                  {...settings}
                  beforeChange={(oldIndex, newIndex) =>
                    handleImageSlideChange(newIndex)
                  }
                >
                  <div className="banner_image_slider_box">
                    <img src={tagline_banner_erp} />
                  </div>
                  <div className="banner_image_slider_box">
                    <img src={tagline_banner_erp} />
                  </div>
                  <div className="banner_image_slider_box">
                    <img src={tagline_banner_bank} />
                  </div>
                  <div className="banner_image_slider_box">
                    <img src={tagline_banner_fintech} />
                  </div>
              </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>  */}

      {/* @@@@@@ Banner Video end @@@@@@ */}

      {/* SECTION - Banner Section Start */}
      {/* <section className="banner_sec">
        <Swiper
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          navigation={false}
          keyboard={true}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner_box">
              <div className="banner_img">
                <img className="img-fluid" src={BANNER1} />
              </div>
              <div className="banner_caption_container">
                <div className="banner_caption">
                  <h6>
                    <Fade direction="up" delay={150}>
                      Profesional IT Solution
                    </Fade>
                  </h6>
                  <h3>
                    <Fade direction="up" delay={300}>
                      Transforming Ideas into Intelligent Solutions
                    </Fade>
                  </h3>
                  <Fade direction="up" delay={500}>
                    <div>
                      <Link to="/">Get Started Now</Link>
                      <Link to="/">Explore More</Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner_box">
              <div className="banner_img">
                <img className="img-fluid" src={BANNER1} />
              </div>
              <div className="banner_caption_container">
                <div className="banner_caption">
                  <h6>
                    <Fade direction="up" delay={1000}>
                      Profesional IT Solution
                    </Fade>
                  </h6>
                  <h3>
                    <Fade direction="up" delay={1200}>
                      Elevating Experiences, One Line at a Time
                    </Fade>
                  </h3>
                  <Fade direction="up" delay={800}>
                    <div>
                      <Link to="/">Get Started Now</Link>
                      <Link to="/">Explore More</Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner_box">
              <div className="banner_img">
                <img className="img-fluid" src={BANNER1} />
              </div>
              <div className="banner_caption_container">
                <div className="banner_caption">
                  <h6>
                    <Fade direction="up" delay={1000}>
                      Profesional IT Solution
                    </Fade>
                  </h6>
                  <h3>
                    <Fade direction="up" delay={1200}>
                      Future-Proofing Your Digital Journey
                    </Fade>
                  </h3>
                  <Fade direction="up" delay={800}>
                    <div>
                      <Link to="/">Get Started Now</Link>
                      <Link to="/">Explore More</Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner_box">
              <div className="banner_img">
                <img className="img-fluid" src={BANNER1} />
              </div>
              <div className="banner_caption_container">
                <div className="banner_caption">
                  <h6>
                    <Fade direction="up" delay={1000}>
                      Profesional IT Solution
                    </Fade>
                  </h6>
                  <h3>
                    <Fade direction="up" delay={1200}>
                      Unleashing the Power of Purposeful Code
                    </Fade>
                  </h3>
                  <Fade direction="up" delay={800}>
                    <div>
                      <Link to="/">Get Started Now</Link>
                      <Link to="/">Explore More</Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner_box">
              <div className="banner_img">
                <img className="img-fluid" src={BANNER1} />
              </div>
              <div className="banner_caption_container">
                <div className="banner_caption">
                  <h6>
                    <Fade direction="up" delay={1000}>
                      Profesional IT Solution
                    </Fade>
                  </h6>
                  <h3>
                    <Fade direction="up" delay={1200}>
                      Elevating Businesses through Exceptional Code
                    </Fade>
                  </h3>
                  <Fade direction="up" delay={800}>
                    <div>
                      <Link to="/">Get Started Now</Link>
                      <Link to="/">Explore More</Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner_box">
              <div className="banner_img">
                <img className="img-fluid" src={BANNER1} />
              </div>
              <div className="banner_caption_container">
                <div className="banner_caption">
                  <h6>
                    <Fade direction="up" delay={1000}>
                      Profesional IT Solution
                    </Fade>
                  </h6>
                  <h3>
                    <Fade direction="up" delay={1200}>
                      Unlocking Potential, One Code at a Time
                    </Fade>
                  </h3>
                  <Fade direction="up" delay={800}>
                    <div>
                      <Link to="/">Get Started Now</Link>
                      <Link to="/">Explore More</Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section> */}
      {/* @@@@@@@ SECTION - Banner Section end @@@@@@@ */}

      {/* <section className="overflow-hidden">
        <div className="accreditation_sec specilation_feature">
          <div className="container">
            <div className="row ">
              <div className="text-center">
                <Fade direction="up" delay={20} triggerOnce>
                  <Heading
                    heading="Certifications"
                    uppercase="text-uppercase"
                  />
                </Fade>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 d-flex ">
                <Link
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <Fade direction="up" delay={400} triggerOnce>
                    <div className="d-flex horizontal-shake">
                      <div className="icon">
                        <img src={ISO_27001} alt="" />
                      </div>
                      <div className="content">
                        <h3>ISO 27001</h3>
                        <p>2013 (Information Security Management System)</p>


                        <p className="learn_more">See Certificate </p>


                      </div>
                    </div>
                  </Fade>
                </Link>
              </div>

              <div className="col-md-4 d-flex ">
                <Link
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <Fade direction="up" delay={400} triggerOnce>
                    <div className="d-flex horizontal-shake">
                      <div className="icon">
                        <img src={ISO_9001} alt="" />
                      </div>
                      <div className="content">
                        <h3>ISO 9001</h3>
                        <p> 2015 (Quality Management Systems) </p>


                        <p
                          className=""
                          style={{
                            paddingTop: "15px",
                            color: "#32A4D5",
                            fontWeight: "bold",
                            fontFamily: "rajdhani",
                          }}
                        >
                          See Certificate
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Link>
              </div>

              <div className="col-md-4">
                <Fade direction="up" delay={10} triggerOnce>
                  <Link
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <div className="d-flex horizontal-shake">
                      <div className="icon">
                        <img src={GREAT_PLACE_WORK} alt="" />
                      </div>
                      <div className="content">
                        <h3 className="text">Great Place to Work</h3>
                        <p>
                          Sakshath was recognised as a Great Place to Work again
                          in 2024!
                        </p>
                        <p className="learn_more">See Certificate</p>
                      </div>
                    </div>
                  </Link>
                </Fade>
              </div>

            </div>
          </div>
        </div>
      </section> */}

      <section className="overflow-hidden certification_sec">
        <div className="accreditation_sec specilation_feature">
          <div className="container accreditation_sec_container">
            <div className="row ">
              <div className="text-center">
                <Fade direction="up" delay={20} triggerOnce>
                  <Heading
                    heading="Certifications"
                    uppercase="text-uppercase"
                  />
                </Fade>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <div className="d-flex  certificate_box">
                  <Link
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <Fade direction="up"   triggerOnce>
                      <div className="d-flex horizontal-shake">
                        <div className="icon">
                          <img src={ISO_27001} alt="" />
                        </div>
                        <div className="content">
                          <h3>ISO 27001</h3>
                          <p>2013 (Information Security Management System)</p>

                          <p className="learn_more">See Certificate </p>
                        </div>
                      </div>
                    </Fade>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="d-flex certificate_box">
                  <Link
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <Fade direction="up"  triggerOnce>
                      <div className="d-flex horizontal-shake">
                        <div className="icon">
                          <img src={ISO_9001} alt="" />
                        </div>
                        <div className="content">
                          <h3>ISO 9001</h3>
                          <p> 2015 (Quality Management Systems) </p>

                          <p
                            className=""
                            style={{
                              paddingTop: "15px",
                              color: "#32A4D5",
                              fontWeight: "bold",
                              fontFamily: "rajdhani",
                            }}
                          >
                            See Certificate
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="d-flex certificate_box">
                  <Link
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <Fade direction="up"  triggerOnce>
                      <div className="d-flex horizontal-shake">
                        <div className="icon">
                          <img src={GREAT_PLACE_WORK} alt="" />
                        </div>
                        <div className="content">
                          <h3 className="text">Great Place to Work</h3>
                          <p>
                            Sakshath was recognised as a Great Place to Work
                            again in 2024!
                          </p>
                          <p className="learn_more">See Certificate</p>
                        </div>
                      </div>
                    </Fade>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex certificate_box">
                  <Link
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <Fade direction="up"   triggerOnce>
                      <div className="d-flex horizontal-shake">
                        <div className="icon">
                          <img src={SOTI} alt="" />
                        </div>
                        <div className="content">
                          <h3 className="text">SOTI Altitude</h3>
                          <p>
                            Empower your enterprise with SOTI’s innovative
                            solutions and transform your digital landscape.
                          </p>
                          <p className="learn_more">See Certificate</p>
                        </div>
                      </div>
                    </Fade>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service start */}
      <section className="banner_tagline_sec">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 offset-md-2">
              <div className="our-services-heading">
                <SubTitle SubTitle="Multiple Process in Single Platform" />
                <Heading heading="Digitise your business by managing multiple process in a single platform." />
              </div>
            </div>
          </div>
          <div className="row">
          
            <Swiper
              spaceBetween={50}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className="swipper_service d-flex">
                  <div className="col-md-4 text-center">
                  <Fade direction="up" delay={20} triggerOnce>
                    <div className="service_home_box1 ">
                      <h4>ERP</h4>
                      <p>
                        Transform your business with our tailored ERP systems,
                        built to meet your unique needs and scale with your
                        success.
                      </p>
                    <div>
                      <img src={ERP_ICON} alt="" />
                    </div>
                    <Link to="/erp">Discover More</Link>
                   
                    </div>
                    </Fade>
                  </div>
                  <div className="col-md-4 text-center">
                  <Fade direction="up" delay={150} triggerOnce>
                    <div className="service_home_box1 ">
                      <h4>Application development</h4>
                      <p>
                        Optimize performance, maximize impact, and future-proof
                        your business with our cutting-edge application
                        services.
                      </p>
                      <div>
                      <img src={APPLICATION_DEVELOPMENT_ICON} alt="" />
                    </div>
                    <Link to="/application-development">Discover More</Link>
                    </div>
                    </Fade>
                  </div>

                  <div className="col-md-4 text-center">
                  <Fade direction="up" delay={300} triggerOnce>
                    <div className="service_home_box1 ">
                      <h4>Automation</h4>
                      <p>
                        Transform your processes, eliminate manual tasks, and
                        achieve greater accuracy with our cutting-edge
                        automation services.{" "}
                      </p>
                      <div>
                      <img src={AUTOMATION_ICON} alt="" />
                    </div>
                    <Link to="/automation">Discover More</Link>
                    </div>
                    </Fade>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipper_service d-flex">          
                  <div className="col-md-4 text-center">
                  
                    <div className="service_home_box1 ">
                      <h4>Application Readiness</h4>
                      <p>
                      Prime your applications for success with our Application Readiness Solutions! Let's ensure flawless launches together!
                      </p>
                      <div>
                      <img src={APPLICATION_READINESS_ICON} alt="" />
                    </div>
                    <Link to="/application-readiness">Discover More</Link>
                    </div>
                    
                  </div>
                  <div className="col-md-4 text-center">
                 
                    <div className="service_home_box1 ">
                      <h4>Analytics</h4>
                      <p>
                      Unlock the power of advanced analytics and predictive modeling to drive strategic decisions and business growth.
                      </p>
                      <div>
                      <img src={ANALYTICS_ICON} alt="" />
                    </div>
                    <Link to="/analytics">Discover More</Link>
                    </div>
                  
                  </div>
                  <div className="col-md-4 text-center">
                
                    <div className="service_home_box1 ">
                      <h4>Enterprise Mobility</h4>
                      <p>
                        Elevate your business operations with seamless mobility,
                        boosting productivity and collaboration across your
                        organization.
                      </p>
                      <div>
                      <img src={ENTERPRISES_MOBILITY_ICON} alt="" />
                      </div>
                      <Link to="/mobility">Discover More</Link>
                    </div>
                  
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
         
          </div>
        </div>
      </section>
      {/* service ends */}

      {/* partners start */}
      <section className="partners_section">
        <div className="container">
          <div className="row text-center mb-4">
            <Heading heading="PARTNERS" />
          </div>
          <div className="row">
            <div className="col-md-4 d-flex  ">
              <Link
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="partners_box horizontal-shake">
                    <div className="icon">
                      <img src={AWS} alt="" />
                    </div>
                    <div className="content">
                      <h3>Amazon AWS Partner</h3>
                      <p>
                        We leverage AWS programs, expertise, and tools to build
                        solutions for customers.
                      </p>
                      <p className="learn_more">See Certificate</p>
                    </div>
                  </div>
                </Fade>
              </Link>
            </div>
            <div className="col-md-4 d-flex">
              <Link
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="partners_box horizontal-shake">
                    <div className="icon">
                      <img src={CLIQ_LOGO} alt="" />
                    </div>
                    <div className="content">
                      <h3>QLIK</h3>
                      <p>
                        Licensed with Qlik for various access types and
                        core-based models.
                      </p>
                      <p className="learn_more">See Certificate</p>
                    </div>
                  </div>
                </Fade>
              </Link>
            </div>

            <div className="col-md-4 d-flex">
              <Link
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="partners_box horizontal-shake">
                    <div className="icon">
                      <img src={JAMF} alt="" />
                    </div>
                    <div className="content">
                      <h3>Jamf</h3>
                      <p>
                        Ensure seamless integration and real-time management for
                        all your Apple devices.
                      </p>
                      <p className="learn_more">See Certificate</p>
                    </div>
                  </div>
                </Fade>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 d-flex  ">
              <Link
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="partners_box horizontal-shake">
                    <div className="icon">
                      <img src={TALEND} alt="" />
                    </div>
                    <div className="content">
                      <h3>Talend</h3>
                      <p>
                    
                       We excels in implementing Talend's data solutions for optimal client outcomes.
                      </p>
                      <p className="learn_more">See Certificate</p>
                    </div>
                  </div>
                </Fade>
              </Link>
            </div>
            <div className="col-md-4 d-flex">
              <Link
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="partners_box horizontal-shake">
                    <div className="icon" style={{ mixBlendMode: "darken" }}>
                      <img src={DB} alt="" />
                    </div>
                    <div className="content">
                      <h3>D & B</h3>
                      <p>
                        Unlock the power of data-driven decisions with Dun &
                        Bradstreet.
                      </p>
                      <p className="learn_more">See Certificate</p>
                    </div>
                  </div>
                </Fade>
              </Link>
            </div>

            <div className="col-md-4 d-flex">
              <Link
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="partners_box horizontal-shake">
                    <div className="icon">
                      <img src={SIMPLIFYQA} alt="" />
                    </div>
                    <div className="content">
                      <h3>SimplifyQA</h3>
                      <p>Make better business decisions with our data.</p>
                      <p className="learn_more">See Certificate</p>
                    </div>
                  </div>
                </Fade>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* partners ends */}

      {/*  @@@@@@ SECTION - ISO CERTIFICATES START @@@@@@ */}

      {/* @@@@@ SECTION - ISO CERTIFICATES END */}

      {/* @@@@@@ SECTION - ISO certifcates start @@@@@@ */}
      {/* <section className="iso_certificate_sec">
        <div className="iso_certificate_sec_bg">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 offset-md-3">
                <Fade direction="up" triggerOnce>
                  <Heading
                    heading="iso certificates"
                    uppercase="text-uppercase"
                  />
                </Fade>
                <Fade direction="up" delay={100} triggerOnce>
                  <p className="mb-4 pb-md-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply typesetting.
                  </p>
                </Fade>
              </div>
            </div>

            <div className="row iso_certificate_logo">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  481: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  
                  <img src={ISO_27001} />
                </SwiperSlide>`
                <SwiperSlide>
                  
                  <img src={GREAT_PLACE_WORK} />
                </SwiperSlide>
                <SwiperSlide>
                  
                  <img src={ISO_9001} />
                </SwiperSlide>
                <SwiperSlide>
                  
                  <img src={GREAT_PLACE_WORK} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

      {/* @@@@@@ SECTION - ISO certifcates start @@@@@@ */}

      {/* <section className="iso_certificate_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 offset-md-3 text-center">
              <Fade direction="up" triggerOnce>
                
                <Heading
                  heading="iso certificates"
                  uppercase="text-uppercase"
                />
              </Fade>
              <Fade direction="up" delay={100} triggerOnce>
                
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </Fade>
            </div>
          </div>

          <div className="row">

            <div className="col">
              <div className="row text-center iso_logo">
                <div className="col mb-4">
                  <Fade direction="up" triggerOnce>
                    
                    <div>
                      <img src={ISO_27001} style={{ width: 150 }} />
                    </div>
                  </Fade>
                </div>
                <div className="col">
                  <Fade direction="up" triggerOnce delay={100}>
                    
                    <div>
                      <img src={GREAT_PLACE_WORK} style={{ width: 150 }} />
                    </div>
                  </Fade>
                </div>
                <div className="col">
                  <Fade direction="up" triggerOnce delay={100}>
                    
                    <div>
                      <img src={ISO_27001} style={{ width: 150 }} />
                    </div>
                  </Fade>
                </div>
                <div className="col">
                  <Fade direction="up" triggerOnce delay={100}>
                    
                    <div>
                      <img src={GREAT_PLACE_WORK} style={{ width: 150 }} />
                    </div>
                  </Fade>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* @@@@@@ SECTION - Specilizes in Building Services start @@@@@@ */}
      {/* <section className="overflow-hidden">
        <div className="specilation_feature">
          <div className="container">
            <div className="row ">
              <div className="top_content text-center mt-4">
                <Fade direction="up" triggerOnce>
                  <SubTitle SubTitle="Great Journey for it solutions" />
                </Fade>
                <Fade direction="up" delay={20} triggerOnce>
                  <Heading
                    heading="Specializes in Building Services"
                    uppercase="text-uppercase"
                  />
                </Fade>
              </div>
            </div>
            <div className="row mt-4 pt-2">
              <div className="col-md-4">
                <Fade direction="up" delay={10} triggerOnce>
                  <div className="d-flex ">
                    <div className="icon">
                      <img src={P_IMG} alt="" />
                    </div>
                    <div className="content">
                      <h3 className="text">Professional Service</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit vitae exercitationem aliquid dolore reiciendis!
                        Nihil at eos.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-4 d-flex ">
                <Fade direction="up" delay={200} triggerOnce>
                  <div className="d-flex ">
                    <div className="icon">
                      <img src={TEAM_IMG} alt="" />
                    </div>
                    <div className="content">
                      <h3 className="">Experience Team</h3>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit vitae exercitationem aliquid dolore reiciendis!
                        Nihil at eos.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>

              <div className="col-md-4 d-flex ">
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="d-flex ">
                    <div className="icon">
                      <img src={IT_IMG} alt="" />
                    </div>
                    <div className="content">
                      <h3>Best IT Solutions</h3>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit vitae exercitationem aliquid dolore reiciendis!
                        Nihil at eos.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* @@@@@@ SECTION - Specilizes in Building Services END @@@@@@ */}

      {/* @@@@@@ SECTION - "Who we are" start @@@@@@ */}
      <section className="who_we_are">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="image-box ">
                <Fade direction="left" delay={10} triggerOnce>
                  <a href="https://maps.app.goo.gl/Tr7oJgpQf1d5DET48">
                    <img className="img-fluid" src={WHO_WE_ARE_IMG} alt="" />
                  </a>
                </Fade>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="text_wrapper">
                <div className="title_area">
                  <Fade direction="up">
                    <SubTitle SubTitle="Who we are" />
                  </Fade>
                  <Heading heading="Our Story" uppercase="text-uppercase" />
                  {/* <audio controls>
  <source src={{}} type="audio/mpeg">
  Your browser does not support the audio element.
</audio> */}

                
                </div>
                <p>
                  Our story begins in 2012 with a small partnership firm called{" "}
                  <strong>Saaksh8 Consulting Services</strong> , founded with
                  minimal capital but grand ambitions. We initially focused on
                  IT recruitment services, but our vision soon expanded, leading
                  us to explore <strong>ERP</strong> offshore development. This
                  pivotal shift marked the transformation into Sakshath
                  Technologies®. Officially <strong>established in 2015</strong>
                  , our journey, though not quite a rags-to-riches tale, is a
                  testament to relentless effort, dedication, and unwavering
                  support from family and friends.
                </p>

                {/* <br/>
               <p>Imagine a small team with big dreams, navigating challenges and seizing opportunities. Our breakthrough came with the realization that ERP systems like Epicor, MS Dynamics, JD Edwards, and SYSPRO could revolutionize businesses. We embraced QA and BI & Analytics with tools like Power BI, Qlik, and Tableau. Today, we proudly stand as the only company in India offering tailored SYSPRO services designed to foster growth and profitability. Our mission is to help clients see that choosing the right software is a strategic business decision.</p> */}
                <Fade direction="up">
                  <SlideAnimationButton url="/about" btnName="MORE ABOUT US" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  SECTION - "Who we are" end  */}

      {/*  SECTION - Happy client counter starts */}
      <HappyClients />
      {/* SECTION- Happy client counter end  */}

      {/*  SECTION - Our Principals @@@ */}
      <OurPrincipals />

      {/* @ SECTION - Our Principals @@@ */}

      {/* @ SECTION - planning banner starts  */}
      {/* <section className="planning_banner">
        <div className="container">
          <div className="row planning_banner_content_box align-items-center">
            <div className="col-md-9 ipad_full_width">
              <div className="left_planning_banner_content">
                <Fade direction="up" triggerOnce>
                  <h3>
                    Let’s connect. We’d love to hear about your project and
                    discuss our procedure. Our executives will be at your
                    service ASAP.
                  </h3>
                </Fade>
              </div>
            </div>
            <div className="col-md-3 button_box ipad_full_width">
              <div className="right_planning_banner_content text-md-end">
                <Fade direction="up" delay={300} triggerOnce>
                  <Link className="lets_meet_us_button">Let's meet us
                  </Link>
                 
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <CallToAction
        ctaContent={"Let’s connect! We’d love to hear from you. "}
        ctaTitle={"Let's meet us"}
      />
      {/*SECTION - planning banner ends*/}

      {/* SECTION - Client Logo Start*/}

      {/* <ClientLogo /> */}

      {/*  SECTION - Client Logo End */}

      {/* <section>
        <div className="container">
          <div className="row">
          <Heading heading="Trusted By" />
          </div>
          <div className="ROW text-center">
          <div className="COL-2" style={{display:"inline", border:'1px solid grey', padding:'30px'}}>
            <img src={CLIENT_LOGO1} alt=""  width="120px" height="100px"/ >
          </div>
          <div className="COL-2"style={{display:"inline", border:'1px solid grey', padding:'30px'}}>
            <img src={CLIENT_LOGO2} alt="" width="120px" height="100px" />
          </div>
          <div className="COL-2" style={{display:"inline" , border:'1px solid grey', padding:'30px'}}>
          <img src={CLIENT_LOGO1} alt="" width="120px" height="100px" />
          </div>
          <div className="COL-2" style={{display:"inline" , border:'1px solid grey', padding:'30px'}}>
          <img src={CLIENT_LOGO2} alt="" width="120px" height="100px" />
          </div>
          <div className="COL-2" style={{display:"inline" , border:'1px solid grey', padding:'30px'}}>
          <img src={CLIENT_LOGO1} alt="" width="120px" height="100px" />
          </div>
          </div>
        </div>
      </section> */}

      {/* @@@@@ SECTION - Popular service start @@@@@ */}

      {/* <section className="popular_princial  text-white ">
        <div className="container ">
          <div className="row ">
         
            <div className="col-md-5 mt-4 left_home_principle">
              <Fade direction="up" triggerOnce>
              
              </Fade>
              <Fade direction="up" triggerOnce>
                <Heading
                  heading="Multiple Process in Single Platform"
                  uppercase="text-uppercase"
                />
              </Fade>
              <Fade direction="up" triggerOnce>
                <li>
                  Digitise your business by managing multiple process in a
                  single platform. Optimize efficiency and productivity
                  effortlessly.
                </li>
                <li>
                  Transform your workflow with our all-in-one platform. Manage
                  multiple processes seamlessly for optimal results.
                </li>
              </Fade>
              <Fade direction="up" triggerOnce>
                <div className="our_principal_btn">
                  <SlideAnimationButton url="/service" btnName="Read More" />
                </div>
              </Fade>
            </div>
          
            <div className="col-md-7 right_home_principle">
              <div className="row">
                <div className="col-md-6 right_home_principle_left_content_box">
                  <div className="d-flex horizontal-shake">
                    <Fade direction="up" triggerOnce>
                      <div className="right_home_principle_img">
                        <img src={POPULARWEB} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h5 className="right_home_subheading">
                          APPLICATION DEVELOPMENT
                        </h5>
                        <p className="justify-content-end  right_para ">
                          Elevating Experiences through Exceptional
                          Applications. Empowering businesses through innovative
                          apps. Next-Gen Apps for Next-Level Performance.
                        </p>
                      </div>
                    </Fade>
                  </div>
                  <div className="d-flex horizontal-shake">
                    <Fade direction="up" triggerOnce>
                      <div className="right_home_principle_img">
                        <img src={POPULARANALYTICS} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading pe-md-0">
                        <h4 className="right_home_subheading">AUTOMATION</h4>
                        <p className=" right_para">
                          Our automation solution leads the way. Our automation
                          is to your advantage. Driving productivity through
                          precision automation.
                        </p>
                      </div>
                    </Fade>
                  </div>
                </div>

                <div className="col-md-6 right_home_principle_right_content_box">
                  <div className="d-flex horizontal-shake">
                    <Fade direction="up" delay={100} triggerOnce>
                      <div className="right_home_principle_img">
                        <img src={POPULAUTOMATION} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h5 className="right_home_subheading">ANALYTICS</h5>
                        <p className="justify-content-end right_para">
                          Elevate your business with our analytics solutions. We
                          are transforming data into actionable intelligence.
                        </p>
                      </div>
                    </Fade>
                  </div>

                  <div className="d-flex horizontal-shake">
                    <Fade direction="up" delay={100} triggerOnce>
                      <div className="right_home_principle_img">
                        <img src={POPULARBANK} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h4 className="right_home_subheading text-decoration-underline">
                          BANKING SOLUTION
                        </h4>
                        <p className=" right_para">
                          Unleash the power of our comprehensive solutions.
                          Redefining Banking Solutions for a Digital World.
                        </p>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*  SECTION - Popuplar Princial End @ */}

      <section className="client_list_lat">
        <Container>
          <div className="row text-center">
            <Heading heading="Trusted By" />
          </div>
          <Row>
            <Col>
              <div className="c_img">
                <img src={CRAWDORD} alt="" />
              </div>
            </Col>
            <Col>
              <div className="c_img">
                <img src={NCBA} alt="" />
              </div>
            </Col>
            <Col>
              <div className="c_img">
                <img src={RAWBANK} alt="" />
              </div>
            </Col>
            <Col>
              <div className="c_img">
                <img src={ABINBEV} alt="" />
              </div>
            </Col>
            <Col>
              <div className="c_img">
                <img src={CLIX} alt="" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="c_img">
                <img src={PIRAMAL} alt="" />
              </div>
            </Col>
            <Col>
              <div className="c_img">
                <img src={JUIPTERHOSPITAL} alt="" />
              </div>
            </Col>
            <Col>
              <div className="c_img">
                <img src={EQUITY} alt="" />
              </div>
            </Col>
            <Col>
              <div className="c_img">
                <img src={ADITYABIRLA} alt="" />
              </div>
            </Col>
            <Col>
              <div className="c_img">
                <img src={MOOVAFRICA} alt="" />
              </div>
            </Col>
          </Row>
          <div className={`d-${showClientToggle ? "block" : "none"}`}>
            <Row>
              <Col>
                <div className="c_img">
                  <img src={SMFC} alt="" />
                </div>
              </Col>
              <Col>
                <div className="c_img">
                  <img src={AKSHYAPATHRA} alt="" />
                </div>
              </Col>
              <Col>
                <div className="c_img">
                  <img src={FNB} alt="" />
                </div>
              </Col>
              <Col>
                <div className="c_img">
                  <img src={CHAITANYA} alt="" />
                </div>
              </Col>
              <Col>
                <div className="c_img">
                  <img src={KCB} alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="c_img">
                  <img src={ECOBANK} alt="" />
                </div>
              </Col>
              <Col>
                <div className="c_img">
                  <img src={AIRTELTIGO} alt="" />
                </div>
              </Col>
              <Col>
                <div className="c_img">
                  <img src={GWOSEVO} alt="" />
                </div>
              </Col>
              <Col>
                <div className="c_img">
                  <img src={ABSA} alt="" />
                </div>
              </Col>
              <Col>
                <div className="c_img">
                  <img src={STANBICBANK} alt="" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="client_list_button">
            <button onClick={showLogo}>
              {showClientToggle ? "Show Less" : "View More Clients"}
            </button>
          </div>

          {/* <SlideAnimationButton btnName="View MORE"  onClick={showLogo} /> */}
        </Container>
      </section>

      <LetsTalk />

      {/*  SECTION - Blogs Start  */}
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="top_blog_container text-center">
              <Fade direction="up" triggerOnce>
                {/* <SubTitle SubTitle="Our Achievements" /> */}
              </Fade>
              <Fade direction="up" delay={100} triggerOnce>
                <Heading heading="News & Events" uppercase="text-uppercase" />
                GET EVERY SINGLE UPDATE ARTICLE & TIPES
              </Fade>
            </div>
          </div>
          <div className="bottom_blog_container mt-md-4">
            <div className="row blog_boxes">
              {achivementHome.map((data, index) => {
                return (
                  <div
                    className="col-md-4  blog_box ipad_half_width"
                    key={index}
                  >
                    <div className="bottom_blog_img">
                      <Fade direction="up" triggerOnce>
                        {/* <img src={ACHIVEMENT_IMG1} alt="" /> */}
                        <img src={data.image} alt="" />
                      </Fade>
                    </div>
                    <Fade direction="up" triggerOnce>
                      <div className="blog_content">
                        <div className="cust_profile"></div>
                        <div className="socail_icon">
                          <h5 className="blog_heading">
                            {/* Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath
                        Technologies */}
                            {data.heading_Title}
                          </h5>
                          <p className="blog_sub_heading">{data.description}</p>
                          <SlideAnimationButton
                            btnName="READ MORE"
                            url="/our-achievements"
                          />
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })}

              {/* <div className="col-md-4  blog_box ipad_half_width">
                <div className="bottom_blog_img">
                  <Fade direction="up" triggerOnce>
                    <img src={ACHIVEMENT_IMG2} alt="" />
                  </Fade>
                </div>
                <Fade direction="up" delay={200} triggerOnce>
                  <div className="blog_content">
                    <div className="cust_profile"></div>

                    <div className="socail_icon">
                      <h5 className="blog_heading">
                        Analytics Vidhya - DataHack Summit 2023
                      </h5>
                      <p className="blog_sub_heading">
                     
                        DataHack Summit 2023 by Analytics Vidhya is an annual
                        conference that brings together data science and machine
                        learning enthusiasts, experts, and practitioners from
                        around the world.
                      </p>
                      <SlideAnimationButton btnName="READ MORE" />
                    </div>
                  </div>
                </Fade>
              </div> */}
              {/* <div className="col-md-4  blog_box ipad_half_width">
                <div className="bottom_blog_img">
                  <Fade direction="up" triggerOnce>
                    <img src={ACHIVEMENT_IMG3} alt="" />
                  </Fade>
                </div>
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="blog_content">
                    <div className="cust_profile"></div>
                    <div className="socail_icon">
                      <h5 className="blog_heading">
                        Highlighting the impactful contributions of our
                        employees across Africa
                      </h5>
                      <p className="blog_sub_heading">
                        
                        Sanjay is an esteemed member of the Rotary Club.He
                        identified the benefits of the club and claimed up to a
                        40% discount on sanitary pads.
                      </p>

                      <SlideAnimationButton btnName="READ MORE" />
                    </div>
                  </div>
                </Fade>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - Blogs END */}

      {/* Swipper blog start */}
      {/* <section className="swipper_section">
        <div className="container">
          <div className="row pt-4 align-items-center">
            <div className="col-md-5">
              <div className="bg_dotted_img">
                 
              </div>
              <div className="our_achivement_para mt-4">
                <Heading heading="OUR ACHIVEMENT" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, ut eum distinctio nisi iusto, commodi.
                </p>
              </div>
               

              <Link to="/our-achievements" className="cta_button">
                Read More
              </Link>
            </div>
            <div className="col-md-7 right_side_achivement_content">
              <div className="swiper_container">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  navigation={true}
                  modules={[Navigation]}
                  autoplay={{
                    delay: 500,
                  }}
                  className="mySwiper"
                >
                  <div className="bottom_blog_container">
                    <div className="blog_boxes">
                      <div className="col-md-2  blog_box ipad_half_width">
                        <SwiperSlide>
                          <Fade direction="up" triggerOnce>
                            <div className="swipper_blog_container">
                              <div className="bottom_blog_img">
                                
                                <img src={ACHIVEMENT_IMG1} alt="" />
                              </div>

                              <div className="blog_content">
                                <div className="cust_profile"></div>

                                <div className="socail_icon">
                                  <ul className="d-flex justify-content-between list-unstyled">
                                    <li>
                                      <div className="icon">
                                        <SlCalender /> &nbsp; 18 JAN 2024
                                      </div>
                                    </li>
                                  </ul>
                                  <h5 className="blog_heading">
                                    Redefining Tomorrow: Shravan Kumar’s Quest
                                    at Sakshath Technologies.
                                  </h5>
                                  <p className="blog_sub_heading">
                                    
                                    Sed ut perspiciatis unde omnsiste natus
                                    errors voluptatem accusantium doloremque
                                    laudatium totae rem aperiam eaque quae
                                    abillo
                                  </p>
                                  <SlideAnimationButton btnName="READ MORE" />
                                </div>
                              </div>
                            </div>
                          </Fade>
                        </SwiperSlide>
                      </div>
                    </div>
                  </div>
                

                  <div className="bottom_blog_container">
                    <div className="blog_boxes">
                      <div className="col-md-2  blog_box ipad_half_width">
                        <SwiperSlide>
                          <Fade direction="up" triggerOnce>
                            <div className="swipper_blog_container">
                              <div className="bottom_blog_img">
                                
                                <img src={ACHIVEMENT_IMG1} alt="" />
                              </div>

                              <div className="blog_content">
                                <div className="cust_profile"></div>

                                <div className="socail_icon">
                                  <ul className="d-flex justify-content-between list-unstyled">
                                    <li>
                                      <div className="icon">
                                        <SlCalender /> &nbsp; 18 JAN 2024
                                      </div>
                                    </li>
                                  </ul>
                                  <h5 className="blog_heading">
                                    Redefining Tomorrow: Shravan Kumar’s Quest
                                    at Sakshath Technologies.
                                  </h5>
                                  <p className="blog_sub_heading">
                                    
                                    Sed ut perspiciatis unde omnsiste natus
                                    errors voluptatem accusantium doloremque
                                    laudatium totae rem aperiam eaque quae
                                    abillo
                                  </p>
                                  <SlideAnimationButton btnName="READ MORE" />
                                </div>
                              </div>
                            </div>
                          </Fade>
                        </SwiperSlide>
                      </div>
                    </div>
                  </div>
                  <div className="bottom_blog_container">
                    <div className="blog_boxes">
                      <div className="col-md-2  blog_box ipad_half_width">
                        <SwiperSlide>
                          <Fade direction="up">
                            <div className="swipper_blog_container">
                              <div className="bottom_blog_img">
                                
                                <img src={ACHIVEMENT_IMG1} alt="" />
                              </div>

                              <div className="blog_content">
                                <div className="cust_profile"></div>

                                <div className="socail_icon">
                                  <ul className="d-flex justify-content-between list-unstyled">
                                    <li>
                                      <div className="icon">
                                        <SlCalender /> &nbsp; 18 JAN 2024
                                      </div>
                                    </li>
                                  </ul>
                                  <h5 className="blog_heading">
                                    Redefining Tomorrow: Shravan Kumar’s Quest
                                    at Sakshath Technologies.
                                  </h5>
                                  <p className="blog_sub_heading">
                                    
                                    Sed ut perspiciatis unde omnsiste natus
                                    errors voluptatem accusantium doloremque
                                    laudatium totae rem aperiam eaque quae
                                    abillo
                                  </p>
                                  <SlideAnimationButton btnName="READ MORE" />
                                </div>
                              </div>
                            </div>
                          </Fade>
                        </SwiperSlide>
                      </div>
                    </div>
                  </div>
                  <div className="bottom_blog_container">
                    <div className="blog_boxes">
                      <div className="col-md-2  blog_box ipad_half_width">
                        <SwiperSlide>
                          <Fade direction="up" triggerOnce>
                            <div className="swipper_blog_container">
                              <div className="bottom_blog_img">
                                
                                <img src={ACHIVEMENT_IMG1} alt="" />
                              </div>

                              <div className="blog_content">
                                <div className="cust_profile"></div>

                                <div className="socail_icon">
                                  <ul className="d-flex justify-content-between list-unstyled">
                                    <li>
                                      <div className="icon">
                                        <SlCalender /> &nbsp; 18 JAN 2024
                                      </div>
                                    </li>
                                  </ul>
                                  <h5 className="blog_heading">
                                    Redefining Tomorrow: Shravan Kumar’s Quest
                                    at Sakshath Technologies.
                                  </h5>
                                  <p className="blog_sub_heading">
                                    
                                    Sed ut perspiciatis unde omnsiste natus
                                    errors voluptatem accusantium doloremque
                                    laudatium totae rem aperiam eaque quae
                                    abillo
                                  </p>
                                  <SlideAnimationButton btnName="READ MORE" />
                                </div>
                              </div>
                            </div>
                          </Fade>
                        </SwiperSlide>
                      </div>
                    </div>
                  </div>
                </Swiper> 
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* blogs ends */}

      {/* @SECTION -FAQ section start */}
      {/* <Faq /> */}
      {/*  SECTION -FAQ section end  */}

      {/*  */}

      {/* principle */}
      {/* <section className="principle_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">Our Principle</div>
            <div className="col-md-7 ">
              <div className="row ">
                <div className="col-md-6 mb-4">
                  <div className="principle_box">
                    <div className="icon_box">
                      <img src={RELIABILTY} alt="" />
                    </div>

                    <h5>RELIABILTY</h5>
                    <p>
                      Our customers rely on us as we provide high–quality,
                      reliable products that have control over all their
                      processes, which are rigorously managed by our quality
                      management systems.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="principle_box">
                    <div className="icon_box">
                      <img src={RELIABILTY} alt="" />
                    </div>

                    <h5>RELIABILTY</h5>
                    <p>
                      Our customers rely on us as we provide high–quality,
                      reliable products that have control over all their
                      processes, which are rigorously managed by our quality
                      management systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-6">
                  <div className="principle_box">
                    <div className="icon_box">
                      <img src={RELIABILTY} alt="" />
                    </div>

                    <h5>RELIABILTY</h5>
                    <p>
                      Our customers rely on us as we provide high–quality,
                      reliable products that have control over all their
                      processes, which are rigorously managed by our quality
                      management systems.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="principle_box">
                    <div className="icon_box">
                      <img src={RELIABILTY} alt="" />
                    </div>

                    <h5>RELIABILTY</h5>
                    <p>
                      Our customers rely on us as we provide high–quality,
                      reliable products that have control over all their
                      processes, which are rigorously managed by our quality
                      management systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <SeeCertificatePopup
        show={showModal}
        onHide={handleCloseModal}
        popUpHeading={"ISO Certificate"}
      />
    </>
  );
};

export default Home;
