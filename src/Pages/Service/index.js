import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./style.scss";
import { SERVICE_HAPPY_CUSTOMER } from "./Constant";
import { Link } from "react-router-dom";
import {
  IT_BENEFITS_LEFT_TOP_IMG,
  IT_BENEFITS_LEFT_BOTTOM_IMG,
  IT_BENEFITS_RIGHT_IMG,
} from "./Constant";
import Heading from "../../Components/Utils/Heading";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  TRAEGER,
  GE_HEALTHCARE,
  UNIVISION,
  NBC_UNIVESAL,
  RWI,
  DHL,
} from "./Constant";
import BreadCumb from "../../Components/Breadcumb";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "./ApplicationDevelopment/Constant";
import OurPrincipals from "../../Components/OurPrincipals";
import TrustedBy from "../../Components/TrustedBy";
import Faq from "../../Components/Faq";
import ServiceStickyPopup from "../../Components/ServiceStickyPopup";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import environment from "../../Environment";

const Service = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [serviceSeoData, setServiceSeoData] = React.useState({});

  const [seoData, setSeoData] = useState({});

  // const seoTag = async () => {
  //   try {
  //     await axios.get("http://172.20.12.189:3000/confApp/api/v1/seo").then((data) => {
  //      console.log(data);
  //       // if (data.status === 200) {
  //       //   setServiceSeoData();
  //       //   console.log(data);
  //       // }
  //     });
  //   } catch (err) {
  //     console.log(err, "err");
  //   }
  // };

  // useEffect(() =>
  // {

  // axios.get("http://172.20.12.189:3000/confApp/api/v1/seo").then ((data) => {
  //  console.log(data);
  //  if (data.status === 200) {
  //    setServiceSeoData(data.data.posts[0]);
  //    console.log(data);  http://172.20.12.189:3000/confApp/api/v1/seo
  //    }

  // });
  //.get("https://dummy.restapiexample.com/api/v1/employee/1", {

  // use this for api

  // useEffect(() => {
  //   axios.get("http://172.20.12.189:8086/confApp/api/v1/seo", {
  //       // mode: "no-cors",
  //       //headers: {
  //       //  "Content-Type": "application/json",
  //       //  "Access-Control-Allow-Origin": "*"
  //       //},
  //     })
  //     .then((data) => {
  //       setSeoData(data.data);
  //       data.data.map((data) => {
  //         if (data.pageName == "page name") {
  //           setSeoData(data);
  //         }
  //       });
  //       console.log("My data is :", data);

  //     });
  //     catch (err) {
  //       console.log(err, "err");
  //     }

  // }, []);

  // .get(environment.SEO_DATA, {})
  
  useEffect(() => {
    axios
      .get("http://172.20.12.189:8086/confApp/api/v1/seo", {})
      .then((data) => {
        setSeoData(data.data);
        data.data.map((data) => {
          if (data.pageName === "service") {
            setSeoData(data);
          }
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  console.log(seoData);

  // useEffect(() => {
  //   try {
  //     const res = fetch("http://172.20.12.79:8080/confApp/api/v1/seo", {
  // //       method: "GET",
  // //       mode: "no-cors",
  // //       headers: {
  // //         "Content-Type": "application/json",
  // //         // "Access-Control-Allow-Origin": "*",
  // //       },
  //      });
  //      const data= res.json();
  //      console.log(data, "result");
  //    } catch (err) {
  //      console.log(err, "err");
  //    }
  //  });

  // seoTag();
  // }, []);

  // console.log(serviceSeoData.title, "hello");
  // console.log(serviceSeoData.body, "des")

  return (
    <>
      <Helmet>
        <title>{seoData.pageTitle}</title>
        <meta name="description" content={seoData.seoDescription} />
       
        {/* {serviceSeoData ? (
            <title>{serviceSeoData.title }</title>
        ) : (
          <title>Loading...</title>
        )} */}
      </Helmet>

<ToastContainer
style={{ width: '350px' }}
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
//  transition: Bounce,
/>


      <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Services"
      />

      {/* @@@@@@@ Experience section starts @@@@@@@@@ */}
      <ServiceStickyPopup />
      {/* <div className="fixedpopup">
<Button variant="primary" onClick={() => setModalShow(true)}>
       Service Sticky Popup
      </Button>

      <ServiceStickyPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
</div> */}

      <section className="experience_section">
        <div className="container experience_section_box">
          <div className="row experience_section_container">
            <div className="col-md-7 experience_section_textarea ipad_full_width">
              <div className="experience_text">
                <div className="upper_textbox">
                  <div className="upper_left_textbox mb-45">12</div>
                  <div className="upper_right_textbox mb-45">
                    <span>Years Of Experience</span>
                    <h2>We have a Strategy for Serving Things Right.</h2>
                    <blockquote>
                      <p>
                        We are a firm that helps customers and organizations
                        harness the power of growth through cutting-edge
                        technologies.
                      </p>
                    </blockquote>
                  </div>
                </div>
                <div className="counter_wrapper">
                  <div className="row counter_row">
                    <div className="col-md-4">
                      <div className="counter-item">
                        <div className="happy_customer_number text-black">
                          <h1>
                            <CountUp
                              start={0}
                              end={200}
                              duration={3}
                              separator=""
                              decimal=","
                              suffix=" +"
                              enableScrollSpy={true}
                              useEasing={true}
                              scrollSpyOnce={true}
                            ></CountUp>
                          </h1>
                          <p>Experienced Professionals</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="counter-item">
                        <div className="happy_customer_number text-black happy_c">
                          <h1>
                            <CountUp
                              start={0}
                              end={50}
                              duration={3}
                              separator=""
                              decimal=","
                              suffix=" +"
                              enableScrollSpy={true}
                              useEasing={true}
                              scrollSpyOnce={true}
                            ></CountUp>
                          </h1>
                          <p>Happy Customer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="counter-item">
                        <div className="happy_customer_number text-black">
                          <h1>
                            <CountUp
                              start={0}
                              end={250}
                              duration={3}
                              separator=""
                              decimal=","
                              suffix=" +"
                              enableScrollSpy={true}
                              useEasing={true}
                              scrollSpyOnce={true}
                            ></CountUp>
                          </h1>
                          <p>Project Completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ipad_full_width">
              <div className="img_happy_customer ">
                <img
                  src={SERVICE_HAPPY_CUSTOMER}
                  alt=""
                  className="img-fluid ipad_full_width"
                />
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
      <section className="ready_to_get_our_professional_services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 heading_box">
              <div className="text_box">
                <h3>Let’s Create Big Stories Together</h3>
                <ul className="buttons_box">
                  <li>
                    <Link to="/contact-us" className="meet_button">
                      meet the team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* @@@@@@@@  Ready_to_get_our_professional_services ends  @@@@@@@@ */}

      {/* @@@@@@@@  It benefits starts @@@@@@@@ */}

      <section className="it_benefits">
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
                  {/* <span className="it_benefit_title">IT BENEFITS</span> */}
                  <div className="heading_content">
                    <Heading
                      heading="Digitise your business by managing multiple process in a single platform."
                      uppercase=""
                    />
                  </div>
                </div>
                <p>
                  We offers the complete spectrum of Software Development,
                  Strategic Staffing, IT Consulting in the areas of SYSPRO,
                  Epicor, Talend, QA , RPA, Java and BI to its clients to help
                  them focus on their core processes and meet their evolving
                  business objectives.
                </p>
                <div className="container technology_list">
                  <div className="left_side_technology">
                    <ul className="">
                      <li>Application Development</li>
                      <li>Automation</li>
                      <li>Analytics</li>
                    </ul>
                  </div>
                  <div className="right_side_technology">
                    <ul className="">
                      <li>Managed Services</li>
                      <li>Integration</li>
                      <li>ERP</li>
                    </ul>
                  </div>
                </div>
                <div className="it_benefits_button_box">
                  <SlideAnimationButton
                    url="/about"
                    btnName="Learn more about us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* @@@@@@@@  It benefits ends @@@@@@@@ */}

      {/* @@@@@@@ partner logo section starts @@@@@@@ */}
      <TrustedBy />

      {/* <section className='partner_logo_section'>
      <div className="container partner_logo_tab">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={TRAEGER} /> </SwiperSlide>
        <SwiperSlide><img src={GE_HEALTHCARE} /></SwiperSlide>
        <SwiperSlide><img src={UNIVISION} /></SwiperSlide>
        <SwiperSlide><img src={NBC_UNIVESAL} /></SwiperSlide>
        <SwiperSlide><img src={RWI} /></SwiperSlide>
        <SwiperSlide><img src={DHL} /></SwiperSlide>
      </Swiper>
      </div>
    </section> */}

      {/* @@@@@@@ partner logo section ends @@@@@@@ */}

      {/* FAQ Starts */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-1"> </div>
            <div className="col-md-10">
              <Faq />
            </div>
            <div className="col-md-1"> </div>
          </div>
        </div>
      </section>
      {/* FAQ ENDS */}
    </>
  );
};

export default Service;
