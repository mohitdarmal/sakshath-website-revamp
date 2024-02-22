import React from "react";
import "./style.scss";
import BreadCumb from "../../../Components/Breadcumb";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../ApplicationDevelopment/Constant";
import Heading from "../../../Components/Utils/Heading";
import {
  INTEGRATION_SECTION_ONE_IMG,
  SECTION_THREE_ICON_ONE,
  SECTION_THREE_ICON_TWO,
  SECTION_THREE_ICON_THREE,
  SOFTWARE_LOGO_1,
  SOFTWARE_LOGO_2,
  SOFTWARE_LOGO_3,
  SOFTWARE_LOGO_4,
  SOFTWARE_LOGO_5,
  SOFTWARE_LOGO_6,
  SOFTWARE_LOGO_7,
  SOFTWARE_LOGO_8,
  SOFTWARE_LOGO_9,
  SOFTWARE_LOGO_10,
  SOFTWARE_LOGO_11,
  SECTION_VECTOR,
} from "./Constant";
import Faq from "../../../Components/Faq";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ServiceStickMenu from "../../../Components/ServiceStickMenu";
import {
  CLIENT_LOGO1,
  CLIENT_LOGO2,
  CLIENT_LOGO3,
  CLIENT_LOGO4,
  CLIENT_LOGO5,
} from "../../../Components/ClientLogo/Constant";
import ScrollSpy from "react-ui-scrollspy";
import { Element, scroller } from "react-scroll";
export const Analytics = () => {
  const menu = [
    {
      id: "AI+datascience",
      title: "AI + data science",
    },
    {
      id: "Bi+dashboard",
      title: "Bi + dashboard",
    },
    {
      id: "Dataintegration",
      title: "Data integration",
    },
    {
      id: "Bigdata",
      title: "Big data",
    },
  ];
  return (
    <>
      <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Analytics"
      />
      {/* @@@@@@@@@@  overview for Analytics starts @@@@@@@@@@@@@@@@@ */}
      <section className="overview_analytics_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="overview_sec_left_analytics">
                {/* <h1 className="overview_sec_managed_services_heading">Overview</h1> */}
                <Heading heading="Overview" uppercase="text-uppercase" />
                <p className="overview_sec_managed_services_para">
                  Unlock growth potential with Advanced Data Analytics Services.
                  Sakshath specializes in leveraging AI + data science to
                  provide you with actionable insights that drive growth. Our
                  data integration solutions ensure that your data flows
                  seamlessly across your organization, breaking down silos and
                  unlocking hidden opportunities. With our BI + Dashboard tools,
                  you can visualize your success and make informed decisions
                  faster than ever before.
                </p>
                <SlideAnimationButton btnName="GET STARTED" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="overview_sec_right_analytics_img">
                <img
                  className="img-fluid analytics_img"
                  src={INTEGRATION_SECTION_ONE_IMG}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* @@@@@@@@@@@@@@@@  partner logo section @@@@@@@@@ */}
      <section className="partner_logo_section">
        <div className="container partner_logo_tab">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={CLIENT_LOGO1} />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* @@@@@@@@@@@@@@@@@@  */}
      <ServiceStickMenu pageName="Analytics" menuName={menu} />
      <ScrollSpy>
        <div id="AI+datascience">
          <Element name="AI+datascience">
            <section className="AI_datascience_sec">
              <div className="container">
                <div className="row align-items-center">
                  {/* <div className="body_sec_three_parent"> */}
                  <div className="col-md-6 ai_data_science_left ipad_full_width">
                    <Heading
                      heading="AI + Data Science"
                      uppercase="text-uppercase"
                    />

                    <p>
                      Transform your data into actionable insights with
                      cutting-edge AI algorithms. Say goodbye to guesswork and
                      hello to data-driven strategies.
                      
                      
                    </p>
                    <p>Artificial Intelligence and Data Science is an
                      interdisciplinary branch of science, engineering, and
                      technology that is creating a complete ecosystem and a
                      paradigm shift in virtually every sector of the technology
                      industry, including academia and research.</p>
                    <ul className="ai_datascience_list">
                      <li>System engineering</li>
                      <li>Product delivery</li>
                      <li>Product ruggedization</li>
                      <li>Machine learning</li>
                    </ul>
                  </div>
                  <div className="col-md-6 ai_data_science_right ipad_full_width">
                    <img
                      className="img-fluid ai_img"
                      src={INTEGRATION_SECTION_ONE_IMG}
                    />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </section>
          </Element>
        </div>

        <div id="Bi+dashboard">
          <Element name="Bi+dashboard">
            <section className="bi_dashboard_sec">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 ipad_full_width">
                    <div className="bi_dashboard_left">
                      <img
                        className="img-fluid bi_dashboard_img"
                        src={INTEGRATION_SECTION_ONE_IMG}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ipad_full_width">
                    <div className="bi_dashboard_right">
                      <Heading
                        heading="Bi + dashboard"
                        uppercase="text-uppercase"
                      />
                      <h4>Your Gateway to Business Intelligence</h4>
                      <h4>*Visualize Success, Drive Results*</h4>

                      <p>
                        Effortlessly monitor key metrics and trends with
                        intuitive BI dashboards. Gain clarity and make informed
                        decisions, boosting productivity and profitability.
                      </p>

                      <p>
                        Engaging Sakshath BI (business intelligence) and
                        AI-enabled dynamic dashboards enables clients direct
                        access to the latest insights and better decisions.
                      </p>

                      
                          {/* <div className="intergration_list"> */}
                            <ul className="ai_datascience_list">
                              <li>Intelligent Live dashboard 
  

</li>
                              <li>Customized Reporting solution 
 </li>
                              <li>Big data visualization 
 </li>
                              <li>
                              Solution for data integration

                              </li>
                              <li>Experience with bi platforms</li>
                            </ul>
                          {/* </div> */}
                        </div>
                        {/* <div className="col-md-6 ipad_full_width">
                          <div className="intergration_list">
                            <ul>
                              <li>Social Integration</li>
                              <li>Pluggable Adapters</li>
                              <li>Enterprise Service Bus Integration</li>
                            </ul>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                
              
            </section>
          </Element>
        </div>

        {/* <div id="Dataintegration">
          <Element name="Dataintegration"> */}
            {/* <section className="software_logo_section">
              <div className="container software_logo_tab">
                <div className="Migration_Services ">
                  <Heading
                    heading="Migration Technologies"
                    uppercase="text-uppercase"
                  />
                </div>
                <p className="text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam culpa provident asperiores{" "}
                </p>
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
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_1} />{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_3} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_4} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_5} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_6} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_7} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_8} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_9} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_10} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SOFTWARE_LOGO_11} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </Element>
        </div> */}



        {/* section software logo end */}

        

        {/* managed service start */}
        <div id="Dataintegration">
          <Element name="Dataintegration">
            <section className="data_integration_sec">
              <div className="container">
                <div className="row align-items-center">
                  {/* <div className="body_sec_three_parent"> */}
                  <div className="col-md-6 ai_data_science_left ipad_full_width">
                    <Heading
                      heading="Data Integration"
                      uppercase="text-uppercase"
                    />
                    <p>
                    Start optimizing your data AI-ready. You may use dynamic data sources to feed machine learning models by automating the data cleansing and synchronization processes.

                    </p>
                    <ul className="ai_datascience_list">
                      <li>
                      Data synchronization

                      </li>
                      <li>
                      Extract, Transform and load

                      </li>
                      <li>
                      Master data management 
 
                      </li>
                      <li>
                      Data quality and accuracy
 
                      </li>
                      <li>
                       Common data model
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 ai_data_science_right ipad_full_width">
                    <img
                      className="img-fluid ai_img"
                      src={INTEGRATION_SECTION_ONE_IMG}
                    />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </section>
          </Element>
        </div>

        <div id="Bigdata">
          <Element name="Bigdata">
            <section className="bigdata_sec">
              <div className="container">
                <div className="row align-items-center">
                  {/* <div className="body_sec_three_parent"> */}
                  
                  <div className="col-md-6 bi_dashboard_left ipad_full_width">
                    <img
                      className="img-fluid bi_dashboard_img"
                      src={INTEGRATION_SECTION_ONE_IMG}
                    />
                  </div>
                  <div className="col-md-6 bi_dashboard_right ipad_full_width">
                    <Heading
                      heading="Big Data"
                      uppercase="text-uppercase"
                    />
                    <p>
                    Take full advantage of your data. Employ science, the most up-to-date technologies, and approaches, and get one of your most valuable resources, data, to its fullest potential.

                    </p>
                    <ul className="ai_datascience_list">
                      <li>
                      Data integration
 


                      </li>
                      <li>
                      Big Data Warehouse 

                      </li>
                      <li>
                      3. Big Data analytics
 
 
                      </li>
                      <li>
                       BI with data visualization

 
                      </li>
                      <li>
                       Software service
                      </li>
                    </ul>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </section>
          </Element>
        </div>

        {/* Faq start */}
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
        {/* Faq end */}
      </ScrollSpy>
    </>
  );
};

export default Analytics;
