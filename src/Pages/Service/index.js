import React from 'react';
import CountUp from "react-countup";
import "./style.scss";
import { SERVICE_HAPPY_CUSTOMER } from './Constant';
import { Link } from 'react-router-dom';
import{IT_BENEFITS_LEFT_TOP_IMG,IT_BENEFITS_LEFT_BOTTOM_IMG,IT_BENEFITS_RIGHT_IMG } from "./Constant";
import Heading from '../../Components/Utils/Heading';


const Service = () => {
  return (
    <>
      <>
    <section className='experience_section'>
        <div className="container experience_section_box">
            <div className="row experience_section_container">
                <div className="col-md-7 experience_section_textarea">
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
                            <div className="row">
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
                <div className="col-md-5">
                  <div className="img_happy_customer">
                    <img src={SERVICE_HAPPY_CUSTOMER} alt="" />
                  </div>
                </div>
            </div>
        </div>
    </section>


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


    <section className='it_benefits'>
      <div className="container">
        <div className="row it_benefits_box">
          <div className="col-md-6 it_benefits_box_area">
            <div className="img_holder_box">
              <div className="row">
                <div className="col-md-6">
                  <div className="img_holder_left_top_img">
                    <img src={IT_BENEFITS_LEFT_TOP_IMG} alt="" />
                  </div>
                  <div className="img_holder_left_bottom_img">
                    <img src={IT_BENEFITS_LEFT_BOTTOM_IMG} alt="" />
                  </div>




                </div>
                <div className="col-md-6">
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
                <span>IT BENEFITS</span>
                <Heading heading="We Provide How Can Growth Your IT Business" uppercase="text-uppercase"></Heading>
              </div>
              <p>
              On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded by desire that they cannot foresee
              </p>
              <ul className='technology_list'>
                <li>
                Software Solutions


                </li>
                <li>
                  Product Engineering
                </li>
                <li>Mobile Strategy</li>
                <li>IT Consultancy</li>
                <li>Business Growth</li>
                <li>Database Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
    </>
  )
}

export default Service;