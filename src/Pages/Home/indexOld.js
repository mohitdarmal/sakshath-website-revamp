import React, { useRef, useState } from "react";
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
} from "./Constant";

import { SlCalender } from "react-icons/sl";
import { PiChatsCircleLight } from "react-icons/pi";
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
import { Pagination, Navigation, Autoplay } from "swiper/modules";
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

export const Home = () => {
  const textSlider = useRef();
  const imageSlider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleTextSlideChange = (index) => {
    setCurrentSlide(index);
    imageSlider.current.slickGoTo(index);
  };

  const handleImageSlideChange = (index) => {
    setCurrentSlide(index);
    textSlider.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <>
      <section className="tagline_sec">
        <div className="video_background">
          <video autoPlay loop muted playsInline>
            <source src={BannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* You can add other content on top of the video if needed */}
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
                  <h1 className="tagline_heading"> Making IT Looks Easy </h1>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-and-image-slider">
            <div className="col-md-6">
              <div className="text-slider">
                <Slider
                  ref={textSlider}
                  {...settings}
                  beforeChange={(oldIndex, newIndex) =>
                    handleTextSlideChange(newIndex)
                  }
                >
                  <div>
                    <div className="">
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
                  <div>
                    <h3>Text Slide 2</h3>
                  </div>
                  <div>
                    <h3>Text Slide 3</h3>
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-6">
              <div className="image-slider">
                <Slider
                  ref={imageSlider}
                  {...settings}
                  beforeChange={(oldIndex, newIndex) =>
                    handleImageSlideChange(newIndex)
                  }
                >
                  <div>
                    <img src="image1.jpg" alt="Image 1" />
                  </div>
                  <div>
                    <img src="image2.jpg" alt="Image 2" />
                  </div>
                  <div>
                    <img src="image3.jpg" alt="Image 3" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className=""></div>
      </section>

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

      {/*  @@@@@@ SECTION - ISO CERTIFICATES START @@@@@@ */}
      <section className="overflow-hidden mt-5 pt-5">
        <div className="accreditation_sec specilation_feature">
          <div className="container">
            <div className="row ">
              <div className="text-center">
                {/* <Fade direction="up" triggerOnce>
                  <SubTitle SubTitle="Great Journey for it solutions" />
                </Fade> */}
                <Fade direction="up" delay={20} triggerOnce>
                  <Heading
                    heading="Certification & Accreditation"
                    uppercase="text-uppercase"
                  />
                </Fade>
              </div>
            </div>

            <div className="row">
              <div className="accreditation_tab_container">
                <Tabs
                  defaultActiveKey="certification"
                  id="clients_logo"
                  className="mb-3 accreditation_tab"
                >
                  {/* <div className="certificational"> */}
                  <Tab
                    eventKey="certification"
                    title={
                      <div className="d-flex">
                        <p>&nbsp;&nbsp;</p>
                        <p>Certification</p>
                      </div>
                    }
                  >
                    {/* <div className="certificational"> */}
                    <Tab
                      eventKey="certification"
                      title={
                        <div className="d-flex">
                          <p>&nbsp;&nbsp;</p>
                          <p>Certification</p>
                        </div>
                      }
                    ></Tab>
                    {/* </div> */}
                    <Tab
                      eventKey="accreditation"
                      title={
                        <div className="d-flex">
                          <p>&nbsp;&nbsp;</p>

                          <p>Accreditation</p>
                        </div>
                      }
                    />
                  </Tab>
                </Tabs>
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
      </section>
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
                </SwiperSlide>
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
            <div className="col-md-6">
              <div className="image-box ">
                <Fade direction="left" delay={10} triggerOnce>
                  <img className="img-fluid" src={WHO_WE_ARE_IMG} alt="" />
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
                  <Heading
                    heading="The Enterprise Productivity Platform For Complex Data"
                    uppercase="text-uppercase"
                  />
                </div>
                <p>
                  Our journey started way back in the year 2012. It started as a
                  partnership firm initially under the name Saaksh8 Consulting
                  Services with smidgen capital, later in the years this small
                  consulting firm providing IT recruitment Services ran into the
                  idea of having an ERP offshore development. If not quite a
                  tale of rags to riches, the story of Sakshath Technologies’
                  rise to stardom certainly came closer.
                </p>
                <Fade direction="up">
                  <SlideAnimationButton
                    url="/about"
                    btnName="LEARN MORE ABOUT US"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* @@@@@@ SECTION - "Who we are" end @@@@@@ */}

      {/* @@@@@@ SECTION - Happy client counter starts @@@@@*/}
      <HappyClients />
      {/* @@@@@ SECTION- Happy client counter end @@@@@@ */}

      {/* @@@@@@@ SECTION - Our Principals @@@@@@@@@ */}
      <OurPrincipals />
      {/* @@@@@@@ SECTION - Our Principals @@@@@@@@@ */}

      {/* @@@@@@@ SECTION - planning banner starts @@@@@@ */}
      <section className="planning_banner">
        <div className="container">
          <div className="row planning_banner_content_box align-items-center">
            <div className="col-md-9 ipad_full_width">
              <div className="left_planning_banner_content">
                <Fade direction="up" triggerOnce>
                  <h3>
                    Full Truckload Planning Reimagined Experts in Security
                    Dynamic Load Planning & Dispatching
                  </h3>
                </Fade>
              </div>
            </div>
            <div className="col-md-3 button_box ipad_full_width">
              <div className="right_planning_banner_content text-md-end">
                <Fade direction="up" delay={300} triggerOnce>
                  <Link className="lets_meet_us_button">Let's meet us</Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*SECTION - planning banner ends*/}

      {/* SECTION - Client Logo Start*/}
      <ClientLogo />
      {/* @@@@@ SECTION - Client Logo End @@@@@*/}

      {/* @@@@@ SECTION - Popular service start @@@@@ */}
      <section className="popular_princial  text-white ">
        <div className="container ">
          <div className="row ">
            {/* Popuplar Princial Left Side Column Start */}
            <div className="col-md-5 mt-4 left_home_principle">
              <Fade direction="up" triggerOnce>
                <SubTitle SubTitle="Our Popular Services" />
              </Fade>
              <Fade direction="up" triggerOnce>
                <Heading
                  heading="Elevating Experiences, Empowering Success"
                  uppercase="text-uppercase"
                />
              </Fade>
              <Fade direction="up" triggerOnce>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat nihil aliquid, architecto assumenda alias vitae
                  dignissimos ab ea id tempora quibusdam maiores odit, soluta
                  doloremque accusamus distinctio aperiam sed quia!
                </p>
              </Fade>
              <Fade direction="up" triggerOnce>
                <div className="our_principal_btn">
                  <SlideAnimationButton btnName="Read More" />
                </div>
              </Fade>
            </div>
            {/*  SECTION - Popuplar Princial Left Side Column End @ */}

            {/*  SECTION - Popuplar Princial Right Side Column Start  */}
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
                          apps.Next-Gen Apps for Next-Level Performance.
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
                          Our automation solutions lead the way. Our automation
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
                          are transforming Data into actionable intelligence.
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
      </section>
      {/*  SECTION - Popuplar Princial End @ */}

      {/*  SECTION - Blogs Start  */}
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="top_blog_container text-center">
              <Fade direction="up" triggerOnce>
                <SubTitle SubTitle="Our Achivements" />
              </Fade>
              <Fade direction="up" delay={100} triggerOnce>
                <Heading
                  heading="Get every single update article & tips"
                  uppercase="text-uppercase"
                />
                GET EVERY SINGLE UPDATE ARTICLE & TIPES
              </Fade>
            </div>
          </div>
          <div className="bottom_blog_container mt-md-4">
            <div className="row blog_boxes">
              <div className="col-md-4  blog_box ipad_half_width">
                <div className="bottom_blog_img">
                  <Fade direction="up" triggerOnce>
                    <img src={ACHIVEMENT_IMG1} alt="" />
                  </Fade>
                </div>
                <Fade direction="up" triggerOnce>
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
                        Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath
                        Technologies.
                      </h5>
                      <p className="blog_sub_heading">
                        Sed ut perspiciatis unde omnsiste natus errors
                        voluptatem accusantium doloremque laudatium totae rem
                        aperiam eaque quae abillo
                      </p>
                      <SlideAnimationButton btnName="READ MORE" />
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-4  blog_box ipad_half_width">
                <div className="bottom_blog_img">
                  <Fade direction="up" triggerOnce>
                    <img src={ACHIVEMENT_IMG2} alt="" />
                  </Fade>
                </div>
                <Fade direction="up" delay={200} triggerOnce>
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
                        Build Launch Powerful Responsives Websites With Editor
                        Perfect
                      </h5>
                      <p className="blog_sub_heading">
                        Sed ut perspiciatis unde omnsiste natus errors
                        voluptatem accusantium doloremque laudatium totae rem
                        aperiam eaque quae abillo
                      </p>
                      <SlideAnimationButton btnName="READ MORE" />
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-md-4  blog_box ipad_half_width">
                <div className="bottom_blog_img">
                  <Fade direction="up" triggerOnce>
                    <img src={ACHIVEMENT_IMG3} alt="" />
                  </Fade>
                </div>
                <Fade direction="up" delay={400} triggerOnce>
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
                        Build Launch Powerful Responsives Websites With Editor
                        Perfect
                      </h5>
                      <p className="blog_sub_heading">
                        Sed ut perspiciatis unde omnsiste natus errors
                        voluptatem accusantium doloremque laudatium totae rem
                        aperiam eaque quae abillo
                      </p>

                      <SlideAnimationButton btnName="READ MORE" />
                    </div>
                  </div>
                </Fade>
              </div>
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
    </>
  );
};

export default Home;
