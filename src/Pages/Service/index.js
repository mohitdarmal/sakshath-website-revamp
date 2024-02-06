import React from 'react';
import CountUp from "react-countup";
import "./style.scss";
import { SERVICE_HAPPY_CUSTOMER } from './Constant';
import { Link } from 'react-router-dom';
import{IT_BENEFITS_LEFT_TOP_IMG,IT_BENEFITS_LEFT_BOTTOM_IMG,IT_BENEFITS_RIGHT_IMG } from "./Constant";
import Heading from '../../Components/Utils/Heading';
import SlideAnimationButton from '../../Components/Utils/SlideAnimationButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { CLIENT_LOGO1, CLIENT_LOGO2, CLIENT_LOGO3, CLIENT_LOGO4, CLIENT_LOGO5 } from "./Constant";
import BreadCumb from "../../Components/Breadcumb";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from './ApplicationDevelopment/Constant';
import OurPrincipals from '../../Components/OurPrincipals';

const Service = () => {
  return (
    <>

<BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Services"
      />
    
      {/* @@@@@@@ Experience section starts @@@@@@@@@ */}

    <section className='experience_section'>
        <div className="container experience_section_box">
            <div className="row experience_section_container">
                <div className="col-md-7 experience_section_textarea ipad_full_width">
                    <div className="experience_text">
                        <div className="upper_textbox">
                            <div className="upper_left_textbox mb-45">13</div>
                            <div className="upper_right_textbox mb-45">
                                <span>Years Of Experience</span>
                                <h2>Professional IT Solutions for Business Success</h2>
                                <blockquote>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem accustium dolorem que laudantium totam rem eaque</p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="counter_wrapper">
                            <div className="row counter_row">
                               <div className="col-md-4">
                               <div className="counter-item">
                                <div className="happy_customer_number text-black">
                                <h2>
                                   <CountUp
                                    start={0}
                                    end={25630}
                                    duration={3}
                                    separator=""
                                    decimal=","
                                    suffix=" +"
                                    enableScrollSpy={true}
                                    useEasing={true}
                                    scrollSpyOnce={true}
                                  ></CountUp>
                                </h2>
                                <p>Happy Customer</p>

                                </div>
                               </div>

                               

                               </div>
                               <div className="col-md-4">
                               <div className="counter-item">
                                <div className="happy_customer_number text-black">
                                <h2>
                                   <CountUp
                                    start={0}
                                    end={75646}
                                    duration={3}
                                    separator=""
                                    decimal=","
                                    suffix=" +"
                                    enableScrollSpy={true}
                                    useEasing={true}
                                    scrollSpyOnce={true}
                                  ></CountUp>
                                </h2>
                                <p>Star Work Reviews</p>

                                </div>
                               </div>
                               </div>
                               <div className="col-md-4">
                               <div className="counter-item">
                                <div className="happy_customer_number text-black">
                                <h2>
                                   <CountUp
                                    start={0}
                                    end={89634}
                                    duration={3}
                                    separator=""
                                    decimal=","
                                    suffix=" +"
                                    enableScrollSpy={true}
                                    useEasing={true}
                                    scrollSpyOnce={true}
                                  ></CountUp>
                                </h2>
                                <p>Project Complate</p>

                                </div>
                               </div>
                               </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 ipad_full_width">
                  <div className="img_happy_customer ">
                    <img src={SERVICE_HAPPY_CUSTOMER} alt=""  className='img-fluid'/>
                  </div>
                </div>
            </div>
        </div>
    </section>

    {/* @@@@@@@ Experience section ends @@@@@@@@@ */}

{/* @@@@@@@ Our Principals start @@@@@@@@@ */}
    <OurPrincipals />
       {/* @@@@@@@ Our Principals ends @@@@@@@@@ */}

     {/* @@@@@@@@  Ready_to_get_our_professional_services starts  @@@@@@@@ */}
    <section className='ready_to_get_our_professional_services'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 heading_box">
            <div className="text_box">
              <h3>Ready To Get Our Professional IT Services ?</h3>
              <ul className='buttons_box'>
                <li>
                  <Link className="meet_button">meet the team</Link>
                </li>
                <li>
                  <Link className="our_services_button">our services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* @@@@@@@@  Ready_to_get_our_professional_services ends  @@@@@@@@ */}


    {/* @@@@@@@@  It benefits starts @@@@@@@@ */}

    <section className='it_benefits'>
      <div className="container">
        <div className="row it_benefits_box">
          <div className="col-md-6 it_benefits_box_area">
            <div className="img_holder_box">
              <div className="row">
                <div className="col-md-6 left_side ipad_full_width">
                  <div className="img_holder_left_top_img ">
                    <img src={IT_BENEFITS_LEFT_TOP_IMG} alt="" />
                  </div>
                  <div className="img_holder_left_bottom_img">
                    <img src={IT_BENEFITS_LEFT_BOTTOM_IMG} alt="" />
                  </div>




                </div>
                <div className="col-md-6 ipad_full_width">
                  <div className="img_holder_right_img">
                    <img src={IT_BENEFITS_RIGHT_IMG} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 right_box">
            <div className="it_benefits_text_wrapper">
              <div className="it_benefits_heading_section">
                <span className='it_benefit_title'>IT BENEFITS</span>
                <div className="heading_content">
                <Heading heading="We Provide How Can Growth Your IT Business" uppercase="text-uppercase" />
                </div>
              </div>
              <p>
              On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded by desire that they cannot foresee
              </p>
              <div className="container technology_list">
              <div className="left_side_technology">
              <ul className=''>
                <li>
                Software Solutions


                </li>
                <li>
                  Product Engineering
                </li>
                <li>Mobile Strategy</li>
                </ul>
                </div>
                <div className="right_side_technology">
                <ul className=''>
                <li>IT Consultancy</li>
                <li>Business Growth</li>
                <li>Database Security</li>
                </ul>
                </div>
                </div>
              <div className="it_benefits_button_box">
               <SlideAnimationButton btnName ="Learn more about us" /> 
               </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* @@@@@@@@  It benefits ends @@@@@@@@ */}

    {/* @@@@@@@ partner logo section starts @@@@@@@ */}

    <section className='partner_logo_section'>
      <div className="container partner_logo_tab">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={CLIENT_LOGO1} /> </SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO2} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO3} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO4} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO5} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO2} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO3} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO4} /></SwiperSlide>
      </Swiper>
      </div>
    </section>

    {/* @@@@@@@ partner logo section ends @@@@@@@ */}
      
    </>
  )
}

export default Service;