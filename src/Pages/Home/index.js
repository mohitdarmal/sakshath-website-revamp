import React from "react";
import { Link } from "react-router-dom";
import {
  WHO_WE_ARE_IMG,
  POPULARANALYTICS,
  POPULARBANK,
  POPULARWEB,
  POPULAUTOMATION,
  IT_IMG,
  TEAM_IMG,
  P_IMG,
  BANNER1,
  ICON_1,
  ICON_2,
  ICON_3,
  ICON_4,
  HAPPYICON,
  BLOGIMG1,
  BLOGCPROFILE,
  ISO_27001,
  GREAT_PLACE_WORK,
  ISO_9001,
  PROFESSIONAL_TEAM,
  SPECIALIZATION,
  EXPERIENCE,
  RELIABILTY,
} from "./Constant";
//icons starts for blogs
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

export const Home = () => {
  return (
    <>
       {/* @@@@@@@ SECTION - Banner Section Start @@@@@@@ */}
      <section className="banner_sec">
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
                  <h6><Fade direction="up" delay={150}>Profesional IT Solution </Fade></h6>
                  <h3><Fade direction="up" delay={300}>Transforming Ideas into Intelligent Solutions </Fade></h3>
                  <Fade direction="up" delay={500}>
                  <div>
                    <Link to="/">Get Started Now</Link>{" "}
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
                  <h6><Fade direction="up" delay={1000}>Profesional IT Solution </Fade></h6>
                  <h3><Fade direction="up" delay={1200}>Elevating Experiences, One Line at a Time </Fade></h3>
                  <Fade direction="up" delay={800}>
                  <div>
                    <Link to="/">Get Started Now</Link>{" "}
                    <Link to="/">Explore More</Link>
                  </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
       {/* @@@@@@@ SECTION - Banner Section end @@@@@@@ */}

    


       {/* @@@@@@ SECTION - ISO certifcates start @@@@@@ */}
          <section className="iso_certificate_sec">
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
              <Fade direction="up" delay={100} triggerOnce >
                <p className="mb-4 pb-md-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.  Lorem Ipsum is simply typesetting.  
                </p>
              </Fade>
              </div>
              </div>

              <div className="row iso_certificate_logo">
              <Swiper
              breakpoints={{
                320: {
                  slidesPerView:3,
                  spaceBetween:30
                },
                481: {
                  slidesPerView:3,
                  spaceBetween:30
                },
                768: {
                  slidesPerView:4,
                  spaceBetween:30
                },
                1024: {
                  slidesPerView:4,
                  spaceBetween:30
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
                <SwiperSlide> <img src={ISO_27001} /> </SwiperSlide>
                <SwiperSlide> <img src={GREAT_PLACE_WORK} /></SwiperSlide>
                <SwiperSlide> <img src={ISO_9001} /></SwiperSlide>
                <SwiperSlide> <img src={GREAT_PLACE_WORK} /></SwiperSlide>
            </Swiper>
              </div>

            </div>
            </div>
          </section>

       {/* @@@@@@ SECTION - ISO certifcates start @@@@@@ */}

      {/* <section className="iso_certificate_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 offset-md-3 text-center">
              <Fade direction="up" triggerOnce>
                {" "}
                <Heading
                  heading="iso certificates"
                  uppercase="text-uppercase"
                />{" "}
              </Fade>
              <Fade direction="up" delay={100} triggerOnce>
                {" "}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy{" "}
                </p>{" "}
              </Fade>
            </div>
          </div>

          <div className="row">

            <div className="col">
              <div className="row text-center iso_logo">
                <div className="col mb-4">
                  <Fade direction="up" triggerOnce>
                    {" "}
                    <div>
                      <img src={ISO_27001} style={{ width: 150 }} />
                    </div>
                  </Fade>
                </div>
                <div className="col">
                  <Fade direction="up" triggerOnce delay={100}>
                    {" "}
                    <div>
                      <img src={GREAT_PLACE_WORK} style={{ width: 150 }} />
                    </div>
                  </Fade>
                </div>
                <div className="col">
                  <Fade direction="up" triggerOnce delay={100}>
                    {" "}
                    <div>
                      <img src={ISO_27001} style={{ width: 150 }} />
                    </div>
                  </Fade>
                </div>
                <div className="col">
                  <Fade direction="up" triggerOnce delay={100}>
                    {" "}
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
                  />{" "}
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
                    {" "}
                    <SubTitle SubTitle="Who we are" />
                  </Fade>
                  <Heading
                    heading="The Enterprise Productivity Platform For Complex Data"
                    uppercase="text-uppercase"
                  />
                </div>
                <p>
                Our journey started way back in the year 2012. It started as a partnership firm initially under the name Saaksh8 Consulting Services with smidgen capital, later in the years this small consulting firm providing IT recruitment Services ran into the idea of having an ERP offshore development. If not quite a tale of rags to riches, the story of Sakshath Technologies’ rise to stardom certainly came closer.

                </p>
                <Fade direction="up">
                  {" "}
                  <SlideAnimationButton url="/about" btnName="LEARN MORE ABOUT US" />{" "}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* @@@@@@ SECTION - "Who we are" end @@@@@@ */}

      {/* @@@@@@ SECTION - Happy client counter starts @@@@@*/}
      <section className="happy_client">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <div className="conter_up_item">
                <Fade direction="up" triggerOnce>
                  <div className="happy_client_icon">
                    <img src={HAPPYICON} alt="" />
                  </div>
                  <div className="happy_client_number text-white">
                    <h2>
                      <CountUp
                        start={0}
                        end={500}
                        duration={3}
                        separator=""
                        decimal=","
                        suffix=" +"
                        enableScrollSpy={true}
                        useEasing={true}
                        scrollSpyOnce={true}
                      ></CountUp>
                    </h2>
                    <h5>Happy Client</h5>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
                <Fade direction="up" delay={100} triggerOnce>
                  <div className="happy_client_icon">
                    <img src={HAPPYICON} alt="" />
                  </div>
                  <div className="happy_client_number text-white">
                    <h2>
                      <CountUp
                        start={0}
                        end={400}
                        duration={3}
                        separator=""
                        decimal=","
                        suffix=" +"
                        enableScrollSpy={true}
                        useEasing={true}
                        scrollSpyOnce={true}
                      ></CountUp>
                    </h2>
                    <h5>Professional work</h5>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
                <Fade direction="up" delay={300} triggerOnce>
                  <div className="happy_client_icon">
                    <img src={HAPPYICON} alt="" />
                  </div>
                  <div className="happy_client_number text-white">
                    <h2>
                      <CountUp
                        start={0}
                        end={600}
                        duration={3}
                        separator=""
                        decimal=","
                        suffix=" +"
                        enableScrollSpy={true}
                        useEasing={true}
                        scrollSpyOnce={true}
                      ></CountUp>
                    </h2>
                    <h5>Active Countries</h5>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
                <Fade direction="up" delay={500} triggerOnce>
                  <div className="happy_client_icon">
                    <img src={HAPPYICON} alt="" />
                  </div>
                  <div className="happy_client_number text-white">
                    <h2>
                      <CountUp
                        start={0}
                        end={1000}
                        duration={3}
                        separator=""
                        decimal=","
                        suffix=" +"
                        enableScrollSpy={true}
                        useEasing={true}
                        scrollSpyOnce={true}
                      ></CountUp>
                    </h2>
                    <h5>Projects</h5>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* @@@@@ SECTION- Happy client counter end @@@@@@ */}

      {/* @@@@@@@ SECTION - What we do start @@@@@@@@@ */}
      <section className="what_we_do">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 what_we_do_heading">
              <div className="text-center">
                <div className="title">
                  <Fade direction="up" triggerOnce>
                    {" "}
                    <SubTitle SubTitle="Our Principal " />{" "}
                  </Fade>
                  <Fade direction="up" delay={100} triggerOnce>
                    {" "}
                    <Heading
                      heading="SOLUTIONS CUSTOMERS HAVE BUILT WITH INSTABASE"
                      uppercase="text-uppercase"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 pt-md-3">
            <div className="col-md-3 d-flex ">
              <div className="what_we_do_box">
                <Fade direction="up" triggerOnce>
                  <div className="icon_box">
                    <img src={RELIABILTY} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      RELIABILTY
                    </h3>
                    <p>
                      Sedut perspicias unomnis natus error sit voluptatemc
                      accusanti remqua
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="col-md-3 d-flex ">
              <div className="what_we_do_box">
                <Fade direction="up" delay={200} triggerOnce>
                  <div className="icon_box">
                    <img src={EXPERIENCE} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      EXPERIENCE
                    </h3>
                    <p>
                      Sedut perspicias unomnis natus error sit voluptatemc
                      accusanti remqua
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="col-md-3 d-flex ">
              <div className="what_we_do_box">
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="icon_box">
                    <img src={SPECIALIZATION} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      SPECIALIZATION
                    </h3>
                    <p>
                      Sedut perspicias unomnis natus error sit voluptatemc
                      accusanti remqua
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="col-md-3 d-flex ">
              <div className="what_we_do_box">
                <Fade direction="up" delay={600} triggerOnce>
                  <div className="icon_box">
                    <img src={PROFESSIONAL_TEAM} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      PROFESSIONAL TEAM
                    </h3>
                    <p>
                      Sedut perspicias unomnis natus error sit voluptatemc
                      accusanti remqua
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* @@@@@@@ SECTION - What we do end @@@@@@@@@ */}

      {/* @@@@@@@ SECTION - planning banner starts @@@@@@ */}
      <section className="planning_banner">
        <div className="container">
          <div className="row planning_banner_content_box align-items-center">
            <div className="col-md-9 ipad_full_width">
              <div className="left_planning_banner_content">
                <Fade direction="up" triggerOnce>
                  {" "}
                  <h3>
                    Full Truckload Planning Reimagined Experts in Security
                    Dynamic Load Planning & Dispatching
                  </h3>{" "}
                </Fade>
              </div>
            </div>
            <div className="col-md-3 button_box ipad_full_width">
              <div className="right_planning_banner_content text-md-end">
                <Fade direction="up" delay={300} triggerOnce>
                  {" "}
                  <Link className="lets_meet_us_button">
                    Let's meet us{" "}
                  </Link>{" "}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* @@@@@@ SECTION - planning banner ends @@@@@@ */}

      {/* @@@@@@@ SECTION - Client Logo Start @@@@@@ */}
      <ClientLogo />
      {/* @@@@@ SECTION - Client Logo End @@@@@*/}

      {/* @@@@@ SECTION - Popular service start @@@@@ */}
      <section className="popular_princial  text-white ">
        <div className="container ">
          <div className="row ">
            {/* Popuplar Princial Left Side Column Start */}
            <div className="col-md-5 mt-4 left_home_principle">
              <Fade direction="up" triggerOnce>
                <SubTitle SubTitle="Our Popular Principle" />{" "}
              </Fade>
              <Fade direction="up" triggerOnce>
                {" "}
                <Heading
                  heading="Best Professional IT Solutiuons"
                  uppercase="text-uppercase"
                />{" "}
              </Fade>
              <Fade direction="up" triggerOnce>
                {" "}
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat nihil aliquid, architecto assumenda alias vitae
                  dignissimos ab ea id tempora quibusdam maiores odit, soluta
                  doloremque accusamus distinctio aperiam sed quia!
                </p>{" "}
              </Fade>
              <Fade direction="up" triggerOnce>
                {" "}
                <div className="our_principal_btn">
                  {" "}
                  <SlideAnimationButton btnName="Read More" />{" "}
                </div>
              </Fade>
            </div>
            {/* @@@@@ SECTION - Popuplar Princial Left Side Column End @@@@@@ */}

            {/* @@@@@ SECTION - Popuplar Princial Right Side Column Start @@@@@ */}
            <div className="col-md-7 right_home_principle">
              <div className="row">
                <div className="col-md-6 right_home_principle_left_content_box">
                  <div className="d-flex">
                    <Fade direction="up" triggerOnce>
                      <div className="right_home_principle_img">
                        <img src={POPULARWEB} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h5 className="right_home_subheading">
                          APPLICATION DEVELOPMENT
                        </h5>
                        <p className="justify-content-end  right_para ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo magni numquam saepe aperiam.
                        </p>
                      </div>
                    </Fade>
                  </div>

                  <div className="d-flex">
                    <Fade direction="up" triggerOnce>
                      <div className="right_home_principle_img">
                        <img src={POPULARANALYTICS} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading pe-md-0">
                        <h4 className="right_home_subheading">ANALYTICS</h4>
                        <p className=" right_para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo magni numquam saepe aperiam.
                        </p>
                      </div>
                    </Fade>
                  </div>
                </div>

                <div className="col-md-6 right_home_principle_right_content_box">
                  <div className="d-flex">
                    <Fade direction="up" delay={100} triggerOnce>
                      <div className="right_home_principle_img">
                        <img src={POPULAUTOMATION} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h5 className="right_home_subheading">AUTOMATION</h5>
                        <p className="justify-content-end right_para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo magni numquam saepe aperiam.
                        </p>
                      </div>
                    </Fade>
                  </div>

                  <div className="d-flex">
                    <Fade direction="up" delay={100} triggerOnce>
                      <div className="right_home_principle_img">
                        <img src={POPULARBANK} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h4 className="right_home_subheading text-decoration-underline">
                          BANKING SOLUTION
                        </h4>
                        <p className=" right_para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo magni numquam saepe aperiam.
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
      {/* @@@@@ SECTION - Popuplar Princial End @@@@@@ */}

      {/* @@@@@ SECTION - Blogs Start @@@@@ */}
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="top_blog_container text-center">
              <Fade direction="up" triggerOnce>
                {" "}
                <SubTitle SubTitle="Latest News and Blogs" />
              </Fade>
              <Fade direction="up" delay={100} triggerOnce>
                {" "}
                <Heading
                  heading="Get every single update article & tips"
                  uppercase="text-uppercase"
                />{" "}
                GET EVERY SINGLE UPDATE ARTICLE & TIPES{" "}
              </Fade>
            </div>
          </div>
          <div className="bottom_blog_container mt-md-4">
            <div className="row blog_boxes">
              <div className="col-md-4  blog_box ipad_half_width">
                <div className="bottom_blog_img">
                  <Fade direction="up" triggerOnce>
                    {" "}
                    <img src={BLOGIMG1} alt="" />
                  </Fade>
                </div>
                <Fade direction="up" triggerOnce>
                  <div className="blog_content">
                    <div className="cust_profile">
                      <div className="blog_cutomer_profile d-flex justify-content-end ">
                        <div className="customer_img ">
                          <img
                            src={BLOGCPROFILE}
                            alt=""
                            className="cust rounded-circle"
                          />
                        </div>{" "}
                        &nbsp; &nbsp;
                        <p>Mohit Darmal</p>
                      </div>
                    </div>

                    <div className="socail_icon">
                      <ul className="d-flex justify-content-between list-unstyled">
                        <li>
                          <div className="icon">
                            <SlCalender /> &nbsp; 18 JAN 2024
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <PiChatsCircleLight /> &nbsp; comments(05)
                          </div>
                        </li>
                      </ul>
                      <h5 className="blog_heading">
                        Build Launch Powerful Responsives Websites With Editor
                        Perfect
                      </h5>
                      <p className="blog_sub_heading">
                        {" "}
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
                    {" "}
                    <img src={BLOGIMG1} alt="" />
                  </Fade>
                </div>
                <Fade direction="up" delay={200} triggerOnce>
                  <div className="blog_content">
                    <div className="cust_profile">
                      <div className="blog_cutomer_profile d-flex justify-content-end ">
                        <div className="customer_img ">
                          <img
                            src={BLOGCPROFILE}
                            alt=""
                            className="cust rounded-circle"
                          />
                        </div>
                        &nbsp; &nbsp;
                        <p>Amar Singh</p>
                      </div>
                    </div>

                    <div className="socail_icon">
                      <ul className="d-flex justify-content-between list-unstyled">
                        <li>
                          <div className="icon">
                            <SlCalender /> &nbsp; 18 JAN 2024
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <PiChatsCircleLight /> &nbsp; comments(05)
                          </div>
                        </li>
                      </ul>
                      <h5 className="blog_heading">
                        Build Launch Powerful Responsives Websites With Editor
                        Perfect
                      </h5>
                      <p className="blog_sub_heading">
                        {" "}
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
                    {" "}
                    <img src={BLOGIMG1} alt="" />{" "}
                  </Fade>
                </div>
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="blog_content">
                    <div className="cust_profile">
                      <div className="blog_cutomer_profile d-flex justify-content-end ">
                        <div className="customer_img ">
                          <Fade direction="up" triggerOnce>
                            {" "}
                            <img
                              src={BLOGCPROFILE}
                              alt=""
                              className="cust rounded-circle"
                            />{" "}
                          </Fade>
                        </div>{" "}
                        &nbsp; &nbsp;
                        <p>Senthil Palanisamy</p>
                      </div>
                    </div>
                    <div className="socail_icon">
                      <ul className="d-flex justify-content-between list-unstyled">
                        <li>
                          <div className="icon">
                            <SlCalender /> &nbsp; 18 JAN 2024
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <PiChatsCircleLight /> &nbsp; comments(05)
                          </div>
                        </li>
                      </ul>
                      <h5 className="blog_heading">
                        Build Launch Powerful Responsives Websites With Editor
                        Perfect
                      </h5>
                      <p className="blog_sub_heading">
                        {" "}
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
      {/* @@@@@ SECTION - Blogs END @@@@@ */}

      {/* @@@@@@ SECTION -FAQ section start @@@@@ */}
        <Faq />
      {/* @@@@@@ SECTION -FAQ section end @@@@@ */}
    </>
  );
};

export default Home;
