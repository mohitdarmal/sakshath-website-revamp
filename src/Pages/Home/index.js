import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  WHO_WE_ARE_IMG,
  POPULARANALYTICS,
  POPULARBANK,
  POPULARWEB,
  POPULAUTOMATION,
  SERVICE_IMG,
  IT_IMG,
  TEAM_IMG,
  P_IMG,
  BANNER1,
  ICON_1,
  ICON_2,
  ICON_3,
  ICON_4,
  HAPPYCCUSTMOER,
  HAPPYICON,
  BLOGIMG1,
  BLOGCPROFILE,
} from "./Constant";
//icons starts for blogs
import { SlCalender } from "react-icons/sl";
import { PiChatsCircleLight } from "react-icons/pi";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

import {Tabs,Tab} from 'react-bootstrap';

import CountUp from "react-countup";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import Heading from "../../Components/Utils/Heading";
import Maintitle from "../../Components/Utils/Title_head";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Button } from "bootstrap";

export const Home = () => {
  return (
    <>
      {/* <div>
        <img src={BANNER1} alt="" className="img-fluid" />
      </div> */}
      <section className="banner_sec">
        <Swiper
          cssMode={true}
          // autoplay={true}
          autoplay={{
            delay: 3000, // Delay between slides in milliseconds (adjust as needed)
            disableOnInteraction: false, // Allow autoplay to continue after user interaction
          }}
          navigation={true}
          mousewheel={true}
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
                  <h6>Profesional IT Solution</h6>
                  <h3>Transforming Ideas into Intelligent Solutions </h3>
                  <div>
                    <Link to="/">Get Started Now</Link>{" "}
                    <Link to="/">Explore More</Link>
                  </div>
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
                  <h6>Profesional IT Solution</h6>
                  <h3>Elevating Experiences, One Line at a Time</h3>
                  <div>
                    <Link to="/">Get Started Now</Link>{" "}
                    <Link to="/">Explore More</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="overflow-hidden">
        <div className="specilation_feature">
          <div className="container">
            <div className="row ">
              <div className="top_content text-center mt-4">
                <h6>GREAT JOURNEY FOR IT SOLUTIONS</h6>
                {/* <input onChange={onChangeValue} /> */}
                <h3>SPECIALIZES IN BUILDING SERVICES</h3>
              </div>
            </div>
            <div className="row mt-4 pt-2">
              <div className="col-md-4">
                <div className="d-flex ">
                  <div className="icon">
                    <img src={P_IMG} alt="" />
                  </div>
                  <div className="content">
                    <h3 className="text">Professional Service</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit vitae exercitationem aliquid dolore reiciendis! Nihil
                      at eos dolorum expedita repellat debitis molestias
                      adipisci illum quae. Esse fugiat totam itaque in.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 d-flex ">
                <div className="d-flex ">
                  <div className="icon">
                    <img src={TEAM_IMG} alt="" />
                  </div>
                  <div className="content">
                    <h3 className="">Experience Team</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis vel maxime velit alias, libero corporis
                      temporibus veritatis dolorum. Placeat quisquam qui modi ab
                      delectus beatae doloribus dignissimos sequi dolor nulla?
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 d-flex ">
                <div className="d-flex ">
                  <div className="icon">
                    <img src={IT_IMG} alt="" />
                  </div>
                  <div className="content">
                    <h3>Best IT Solutions</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, ea blanditiis quisquam ipsam nihil eum eligendi
                      inventore voluptatibus cum aspernatur maiores debitis non
                      sapiente numquam soluta mollitia expedita cupiditate
                      laboriosam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - "WHO WE ARE" */}
      <section className="who_we_are">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-box ">
                <img className="img-fluid" src={WHO_WE_ARE_IMG} alt="" />
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="text_wrapper">
                <div className="title_area">
                  <span className="title">Who we are</span>
                  <h2 className="subtitle">
                    The Enterprise Productivity Platform For Complex Data
                  </h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis iste natus voluptate accusantiuy
                  doloremque laudantium totam rem aperiam eaque quae ainvtore
                  veritatis quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed quia consequuntur magni dolores eos ratione
                  volupta seque nesciunt porro quisquam doloremdolor site
                </p>
                <SlideAnimationButton btnName="LEARN MORE ABOUT US" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* @@@@@@@ WHAT WE DO @@@@@@@@@ */}

      <section className="what_we_do">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center">
              <div className="title">
                <Maintitle mainTitle="what we do " />
                <Heading
                  heading="SOLUTIONS CUSTOMERS HAVE BUILT WITH INSTABASE"
                  uppercase="text-uppercase"
                ></Heading>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-md-3 d-flex ">
              <div className="what_we_do_box">
                <div className="icon_box">
                  <img src={ICON_1} alt="" />
                </div>
                <div className="text">
                  <h3 className="text-underline">UNLOCK TRAPPED INFORMATION</h3>
                  <p>
                    Sedut perspicias unomnis natus error sit voluptatemc
                    accusanti remqua
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="what_we_do_box">
                <div className=" what_ we_do_icon_box">
                  <img src={ICON_2} alt="" />
                </div>
                <div className="text">
                  <h3 className="text-underline">UNLOCK TRAPPED INFORMATION</h3>
                  <p>
                    Sedut perspicias unomnis natus error sit voluptatemc
                    accusanti remqua
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex ">
              <div className="what_we_do_box">
                <div className="icon_box">
                  <img src={ICON_3} alt="" />
                </div>
                <div className="text">
                  <h3 className="text-underline">
                    ACCELERATE AT ENTERPRISE SCALE
                  </h3>
                  <p>
                    Sedut perspicias unomnis natus error sit voluptatemc
                    accusanti remqua
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex ">
              <div className="what_we_do_box">
                <div className="icon_box">
                  <img src={ICON_4} alt="" />
                </div>
                <div className="text">
                  <h3 className="text-underline">
                    PRODUCT & DESIGN ENGINERING
                  </h3>
                  <p>
                    Sedut perspicias unomnis natus error sit voluptatemc
                    accusanti remqua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* popular service start */}
      <section className="popular_princial  text-white ">
        <div className="container ">
          <div className="row ">
            {/* Popuplar Princial Left Side Column Start */}
            <div className="col-md-5 mt-4 left_home_principle">
              <span>Our Popular Principle</span>
              <h4> Best Professional IT Solutiuons</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat nihil aliquid, architecto assumenda alias vitae
                dignissimos ab ea id tempora quibusdam maiores odit, soluta
                doloremque accusamus distinctio aperiam sed quia!
              </p>
              <SlideAnimationButton btnName="Read More" />
            </div>
            {/* Popuplar Princial Left Side Column End */}

            {/* Popuplar Princial Right Side Column Start */}

            <div className="col-md-7 right_home_principle">
              <div className="row">
                <div className="col-md-6 right_home_principle_left_content_box">
                  <div className="d-flex">
                    <div className="right_home_principle_img">
                      <img src={POPULARWEB} alt="" /> &nbsp;
                    </div>

                    <div className="right_home_principle_heading">
                      <h5 className="right_home_subheading">
                        APPLICATION DEVELOPMENT
                      </h5>
                      <p className="justify-content-end  right_para ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo magni numquam saepe aperiam.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="right_home_principle_img">
                      <img src={POPULARANALYTICS} alt="" /> &nbsp;
                    </div>

                    <div className="right_home_principle_heading pe-md-0">
                      <h4 className="right_home_subheading">ANALYTICS</h4>
                      <p className=" right_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo magni numquam saepe aperiam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 right_home_principle_right_content_box">
                  <div className="d-flex">
                    <div className="right_home_principle_img">
                      <img src={POPULAUTOMATION} alt="" /> &nbsp;
                    </div>

                    <div className="right_home_principle_heading">
                      <h5 className="right_home_subheading">AUTOMATION</h5>
                      <p className="justify-content-end right_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo magni numquam saepe aperiam.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="right_home_principle_img">
                      <img src={POPULARBANK} alt="" /> &nbsp;
                    </div>

                    <div className="right_home_principle_heading">
                      <h4 className="right_home_subheading text-decoration-underline">
                        BANKING SOLUTION
                      </h4>
                      <p className=" right_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo magni numquam saepe aperiam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popuplar Princial End */}

      {/* Happy client counter starts */}
      <section className="happy_client mt-5 mb-5">
        <div className="container">
          <div className="row">
            {/* <div className="happy_client_img"> */}

            <div className="col-md-3">
              <div className="conter_up_item">
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
                      // decimals={4}
                      decimal=","
                      //  prefix="+ "
                      suffix=" +"
                      // onEnd={() => console.log('Ended! 👏')}
                      // onStart={() => console.log('Started! 💨')}
                    ></CountUp>
                  </h2>
                  <h5>Happy Client</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
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
                      // decimals={4}
                      decimal=","
                      //  prefix="+ "
                      suffix=" +"
                      // onEnd={() => console.log('Ended! 👏')}
                      // onStart={() => console.log('Started! 💨')}
                    ></CountUp>
                  </h2>
                  <h5>Professional work</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
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
                      // decimals={4}
                      decimal=","
                      //  prefix="+ "
                      suffix=" +"
                      // onEnd={() => console.log('Ended! 👏')}
                      // onStart={() => console.log('Started! 💨')}
                    ></CountUp>
                  </h2>
                  <h5>Active Countries</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
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
                      // decimals={4}
                      decimal=","
                      //  prefix="+ "
                      suffix=" +"
                      // onEnd={() => console.log('Ended! 👏')}
                      // onStart={() => console.log('Started! 💨')}
                    ></CountUp>
                  </h2>
                  <h5>Projects</h5>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3">ce</div>
            <div className="col-md-3">ce</div>
            <div className="col-md-3">ce</div> */}
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* Happy client counter end */}

      {/* Blogs Start */}

      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="top_blog_container text-center">
              <h4 className="text-decoration-underline top_blog_heading">
                Latest News and Blogs
              </h4>
              <span>GET EVERY SINGLE UPDATE ARTICLE & TIPES</span>
            </div>
            <div className="bottom_blog_container mt-5">
              <div className="row">
                <div className="blog_boxes d-flex">
                  <div className="col-md-4  blog_box">
                    <div className="bottom_blog_img">
                      <img src={BLOGIMG1} alt="" />
                    </div>
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
                  </div>
                  <div className="col-md-4  blog_box">
                    <div className="bottom_blog_img">
                      <img src={BLOGIMG1} alt="" />
                    </div>
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
                  </div>
                  <div className="col-md-4  blog_box">
                    <div className="bottom_blog_img">
                      <img src={BLOGIMG1} alt="" />
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Blogs end */}

      {/* planning banner starts */}
      <section className="planning_banner">
        <div className="container">
          <div className="row planning_banner_content_box">
              <div className="col-md-9">
                <div className="left_planning_banner_content">
                  <h3>Full Truckload Planning Reimagined Experts in Security Dynamic Load Planning & Dispatching</h3>
                </div>
              </div>
              <div className="col-md-3 button_box">
                <div className="right_planning_banner_content">
                  <Link className="lets_meet_us_button">Let's meet us </Link>
                </div>
              </div>
          </div>

          
        </div>
      </section>

      {/* planning banner ends */}


      

      {/* Happy Clients Starts */}
      <section className="happy_client_container">
        <div className="container">
          <div className="row">
            <div className="happy_client_bg_img">
              <img src="" alt="" />
            </div>

            <div className="happy_client_content text-center">
            <div className="happy_client_top_heading">
              <h5 className="client_heading">
                Popular Partners
              </h5>
              <p className="sub_heading">WE HAVE  <CountUp
                      start={0}
                      end={2345}
                      duration={3}
                      separator=""
                      // decimals={4}
                      decimal=","
                      //  prefix="+ "
                      suffix=" +"
                      
                    ></CountUp>  WORLD WIDE CLIENTS </p>
            </div>

            <div className="happy_client_bottom_heading">
            <div className="row">
           
    <Tabs
     defaultActiveKey="Domestic"
     id="uncontrolled-tab-example"
      className="mb-3 client_tabs"
      
    >
    {/* <div className="international"> */}
      <Tab   eventKey="home" title={ <span className="d-flex"> <p style={{fontSize:'25px'}}><GiCommercialAirplane/> </p>&nbsp; &nbsp;<p style={{fontSize:'22px', marginTop:'3px'}}>International </p> </span>}>
        Tab content for Home
      </Tab>
      {/* </div> */}
      <Tab eventKey="profile" title={<span className="d-flex"> <p style={{fontSize:'25px'}}><FaHome/> </p>&nbsp; <p style={{fontSize:'22px',marginTop:'3px'}}>Domestic </p></span>}>
        Tab content for Profile
      </Tab>
      <Tab   eventKey="other" title={ <span className="d-flex"> <p style={{fontSize:'25px'}}><GiCommercialAirplane/> </p>&nbsp; &nbsp;<p style={{fontSize:'22px', marginTop:'3px'}}>Business </p> </span>}>
        Tab content for someother
      </Tab>
   
    </Tabs>


            </div>

            </div>

            </div>
          </div>
        </div>
      </section>

      {/* Happy client end */}
    </>
  );
};

export default Home;
