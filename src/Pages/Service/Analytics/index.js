import React from "react";
import "./style.scss";
import BreadCumb from "../../../Components/Breadcumb";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../ApplicationDevelopment/Constant";
import Heading from "../../../Components/Utils/Heading";
import {
    ANALYTICS_OVERVIEW_IMG,
    ANALYTICS_AI_IMG,
    ANALYTICS_BI,
    ANALYTICS_DATA_INTEGRATION,
    ANALYTICS_BIG_DATA,
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
  analytics_logo_01,
  analytics_logo_02,
  analytics_logo_03,
  analytics_logo_04,
  analytics_logo_05


} from "./Constant";
import { RPA_DELIVERY } from "../Automation/Constant";
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
      title: "AI + Data Science",
    },
    {
      id: "Bi+dashboard",
      title: "BI + Dashboard",
    },
    {
      id: "Dataintegration",
      title: "Data Integration",
    },
    {
      id: "Bigdata",
      title: "Big Data",
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
                <Heading heading="Unlock growth potential with Advanced Data Analytics Services." uppercase="text-uppercase" />
                <p className="overview_sec_analytics_para">
                  
                  Sakshath Technologies specializes in leveraging AI + data science to
                  provide you with actionable insights that drive growth. Our
                  data integration solutions ensure that your data flows
                  seamlessly across your organization, breaking down silos and
                  unlocking hidden opportunities, with our BI + Dashboard tools,
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
                  src={ANALYTICS_OVERVIEW_IMG}
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
              <div className="container ai_datascience_container">
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
                    {/* <ul className="ai_datascience_list">
                      <li>System Engineering</li>
                      <li>Product Delivery</li>
                      <li>Product Ruggedization</li>
                      <li>Machine Learning</li>
                    </ul> */}
                  </div>
                  <div className="col-md-6 ai_data_science_right ipad_full_width">
                    <img
                      className="img-fluid ai_img"
                      src={ANALYTICS_AI_IMG}
                    />
                  </div>


                  {/* </div> */}
                </div>
                {/* <section className="ai_datascience_content_box_sec">
                    <div className="container">
                      

                    </div>
                </section> */}
                <div className="ai_datascience_content_box">
                    <div className="ai_datascience_content">
                        <div className="row">
                            <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box ai_box1_height">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_01} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Systems Engineering</h5>
                                <ul className="ai_datascience_content_para_list">
                                    <li>Product feasibility studies</li>
                                    <li>Reliable,effective and cost-effective solutions</li>
                                    <li>Highly reliable system design with reusability in mind</li>
                                </ul>
                    
                             </div>
                              
                             

                                
                            </div>
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                               <div className="ai_datascience_content_col_box ai_box2_height">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_02} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">

                             <h5>Machine Learning</h5>
                                <ul className="ai_datascience_content_para_list">
                                    <li>Big Data Sciences with Machine learning for ease of humans and the world economy</li>
                                    
                                </ul>
                                
                    
                             </div>
                              </div>
                             

                                
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                               <div className="ai_datascience_content_col_box">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_03} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Product Ruggedization</h5>
                                <ul className="ai_datascience_content_para_list">
                                    <li>Reduces risks and harm in certain hazardous outages by identifying potential breakdowns/incidents in advance</li>
                                    <li>Provision of product ruggedization for all-weather environment</li>
                                    <li>Ease of use for commercial setups</li>
                                </ul>
                    
                             
                              </div>
                             

                                
                            </div>
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box ai_box4_height">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_04} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                             <h5>Product Delivery</h5>
                                <ul className="ai_datascience_content_para_list">
                                    <li>Effectual Product Delivery</li>
                                    <li>Utilizing reusable solutions to increase products reliability and delivery</li>
                                    <li>Usage of IP Cores of our and partners, for effective cost, time and reliability</li>
                                </ul>
                    
                             
                              </div>
                             

                                
                            </div>

                            
                        </div>
                    </div>
                </div>
              </div>
              </div>
            </section>
          </Element>
        </div>

        <div id="Bi+dashboard">
          <Element name="Bi+dashboard">
            <section className="bi_dashboard_sec">
              <div className="container bi_dashboard_container">
                <div className="row align-items-center">
                  <div className="col-md-6 ipad_full_width">
                    
                    <div className="bi_dashboard_left">
                      <Heading
                        heading="Bi + dashboard"
                        uppercase="text-uppercase"
                      />
                      <h4>Your Gateway to Business Intelligence</h4>
                      {/* <h4>*Visualize Success, Drive Results*</h4> */}

                      <p>
                        Effortlessly monitor key metrics and trends with
                        intuitive BI dashboards. Gain clarity and make informed
                        decisions, boosting productivity and profitability.
                      </p>

                      <p>
                        Engaging Sakshath Technologies BI (Business Intelligence) and
                        AI-enabled dynamic dashboards enables clients direct
                        access to the latest insights and better decisions.
                      </p>

                      
                          {/* <div className="intergration_list"> */}
                            {/* <ul className="ai_datascience_list">
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
                            </ul> */}
                          {/* </div> */}
                        </div>
                  </div>
                  <div className="col-md-6 ipad_full_width">
                  <div className="bi_dashboard_right">
                      <img
                        className="img-fluid bi_dashboard_img"
                        src={ANALYTICS_BI}
                      />
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


                    <div className="ai_datascience_content_box">
                    <div className="ai_datascience_content">
                        <div className="row">
                            <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box bi_dashboard_box1_height">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_01} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Intelligent Live Dashboards</h5>
                                
                                <p>Intelligent dashboards presenting information with incredible clarity help you grasp fresh ideas immediately. Data can be quickly sliced and diced with dynamic control mechanisms, refined executive-ready insights can be shared, and teams can be equipped with top-notch Customizable tools.</p>
                    
                             </div>
                              
                             

                                
                            </div>
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                               <div className="ai_datascience_content_col_box">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_02} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Customized Reporting Solutions</h5>
                                <p>Choose from a host of business reporting services with individuals proficient in all industry’s best BI technologies featured in the Gartner Magic Quadrant TM, including Microsoft, SAP, IBM Watson, Oracle, Tableau, Micro strategy, Qlikview, and so more.</p>
                    
                             </div>
                              </div>
                             

                                
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                               <div className="ai_datascience_content_col_box bi_box3">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_03} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Big Data Visualization</h5>
                                <p>Through great visualization, we can understand a growing stream of data with precision. Whether the data is structured or unstructured, powered by businesses or the Internet-Of-things, the value lies in clarity and comprehension.</p>
                    
                             
                              </div>
                             

                                
                            </div>
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_04} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Solutions for Data Integration</h5>
                                <p>Make the data AI-ready, regardless of how diversified and dynamic it is. Even though it originates from various unrelated sources, data harmonization enables intricate and inaccurate data to be compatible and comparative.</p>
                                
                    
                             
                              </div>
                             

                                
                            </div>

                            
                        </div>

                        

                        <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box bi_box5">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_05} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Experience with BI Platforms</h5>
                                <p>At Sakshath, our teams have the expertise and background of using almost every BI solution, tool, and available platform. Hence, we can swiftly build and deliver client reports on their selected BI platform. Feeling challenged without a specific tool? Let us assist in selecting and implementing the best platform for you. </p>
                                
                    
                             
                              </div>
                             

                                
                            </div>

                            
                        </div>


                    </div>
                </div>
              </div>


              <div className="bi_feature_sec">
               <div className="bi_key_feature_heading_box">
                  <Heading heading="BI Key Features" uppercase="text-uppercase" />
                </div>
              
                <div className="bi_feature_content">
                    
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="bi_feature_box bi_feature_box1">
                                    <div className="bi_feature_icon">
                                        <img src={ RPA_DELIVERY } alt="" />

                                    </div>
                                    <h3 className="bi_feature_title">Solutions at a Low Cost</h3>
                                    <p className="bi_feature_description">When it concerns cost and quality, Sakshath power BI Services is an excellent method to maintain high standards while focusing onservices targeted to your individual needs.</p>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="bi_feature_box bi_feature_box2 bi_feature_box2_bgcolor">
                                    <div className="bi_feature_icon">
                                        <img src={ RPA_DELIVERY } alt="" />

                                    </div>
                                    <h3 className="bi_feature_title">Professionals with Certification</h3>
                                    <p className="bi_feature_description">At Sakshath, our famous and capable teams of seasoned Microsoft Power BI service professionals assist businesses in the process of integrating and optimizing to a more efficient one.</p>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="bi_feature_box bi_feature_box3 bi_feature_box3_bgcolor">
                                    <div className="bi_feature_icon">
                                        <img src={ RPA_DELIVERY } alt="" />

                                    </div>
                                    <h3 className="bi_feature_title">Flexible Engagement Models</h3>
                                    <p className="bi_feature_description">Outsource the entire or part of the project, get dedicated resources on premises, whatever suits your needs, you have our back.</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="bi_feature_box bi_feature_box4 bi_feature_box4_bgcolor">
                                    <div className="bi_feature_icon">
                                        <img src={ RPA_DELIVERY } alt="" />

                                    </div>
                                    <h3 className="bi_feature_title">Best Practices Integrated</h3>
                                    <p className="bi_feature_description">Optimization of your company’s potential is our top goal. We adhere to the best industry practices by customizing the power BI solutions and incorporating it with your organization’s workflow and operations.</p>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="bi_feature_box bi_feature_box5 bi_feature_box5_bgcolor">
                                    <div className="bi_feature_icon">
                                        <img src={ RPA_DELIVERY } alt="" />

                                    </div>
                                    <h3 className="bi_feature_title">Training and Post-Implementation Support</h3>
                                    <p className="bi_feature_description">At Sakshath, our power BI consultants, also industry specialists, offer training and post-implementation support. We want to make sure that you get the most from your.</p>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="bi_feature_box bi_feature_box6 bi_feature_box6_bgcolor">
                                    <div className="bi_feature_icon">
                                        <img src={ RPA_DELIVERY } alt="" />

                                    </div>
                                    <h3 className="bi_feature_title">Portfolio Diversification</h3>
                                    <p className="bi_feature_description">Sakshath assists organization by offering Multi-Layered Solutions with diversified portfolios in a variety of verticals such as manufacturing, automotive, banking, hotel, and travel.</p>
                                </div>
                            </div>
                        </div>
                    
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
              <div className="container data_integration_container">
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
                    {/* <ul className="ai_datascience_list">
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
                    </ul> */}
                  </div>
                  <div className="col-md-6 ai_data_science_right ipad_full_width">
                    <img
                      className="img-fluid ai_img"
                      src={ANALYTICS_DATA_INTEGRATION}
                    />
                  </div>
                  {/* </div> */}
                </div>

                <div className="ai_datascience_content_box">
                    <div className="ai_datascience_content">
                        <div className="row">
                            <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box data_integration_box1">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_01} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Data Synchronization</h5>
                                
                                <p>Data synchronization results in data suitability and consistency, even though it originates from varied sources. Ascertain that your data is prepared for supervised learning, unsupervised learning, and technical analysis.</p>
                    
                             </div>
                              
                             

                                
                            </div>
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                               <div className="ai_datascience_content_col_box data_integration_box1"> 
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_02} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Extract, Transform and Load (ETL)</h5>
                                <p>Our bespoke ETL/ELT services combine system and technology expertise to create high-quality data assets. Identify the most appropriate data extraction methods for your work model, data formats, and structure matching your business objectives.</p>
                    
                             </div>
                              </div>
                             

                                
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                               <div className="ai_datascience_content_col_box">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_03} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Master Data Management</h5>
                                <p>Our master data management solution refers to the standards, policies, governance, and tools addressed to build and maintain critical data. We provide a centralized location for data within an organization.</p>
                    
                             
                              </div>
                             

                                
                            </div>
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box data_integration_box4">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_04} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Data Quality and Accuracy</h5>
                                <p>Data must be thorough, uniform, meaningful, and precise before it can be applied to drive actions. With better data quality and accuracy, you can experience more precise AI models, more reliable analytics, and more dependable judgments.</p>
                                
                    
                             
                              </div>
                             

                                
                            </div>

                            
                        </div>

                        

                        <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box data_integration_box4">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_05} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Common Data Model (CDM)</h5>
                                <p>Generate a one-stop source of information for your business by grouping the data into a consistent structure. Data from many databases are translated into a standardized format and then methodically evaluated. </p>
                                
                    
                             
                              </div>
                             

                                
                            </div>

                            
                        </div>


                    </div>
                </div>
              </div>
              </div>
            </section>
          </Element>
        </div>

        <div id="Bigdata">
          <Element name="Bigdata">
            <section className="bigdata_sec">
              <div className="container bigdata_container">
                <div className="row align-items-center">
                  {/* <div className="body_sec_three_parent"> */}
                  <div className="col-md-6 bi_dashboard_left ipad_full_width">
                    <Heading
                      heading="Big Data"
                      uppercase="text-uppercase"
                    />
                    <p>
                    Take full advantage of your data. Employ science, the most up-to-date technologies, and approaches, and get one of your most valuable resources, data, to its fullest potential.

                    </p>
                    {/* <ul className="ai_datascience_list">
                      <li>
                      Data integration
 


                      </li>
                      <li>
                      Big Data Warehouse 

                      </li>
                      <li>
                       Big Data analytics
 
 
                      </li>
                      <li>
                       BI with data visualization

 
                      </li>
                      <li>
                       Software service
                      </li>
                    </ul> */}
                  </div>
                  
                  <div className="col-md-6 bi_dashboard_right ipad_full_width">
                    <img
                      className="img-fluid bi_dashboard_img"
                      src={ANALYTICS_BIG_DATA}
                    />
                  </div>
                  
                  {/* </div> */}
                </div>

                <div className="ai_datascience_content_box">
                    <div className="ai_datascience_content">
                        <div className="row">
                            <div className="col-md-6 ai_datascience_content_col ">
                              <div className="ai_datascience_content_col_box bigdata_box1">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_01} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Data Integration</h5>
                                
                                <p>Analytics and AI are augmented when a variety of data sources are combined. A big data delivery system is provided to clients with large-scale datasets to supply data that is continuously AI and analytics ready in real-time.</p>
                    
                             </div>
                              
                             

                                
                            </div>
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                               <div className="ai_datascience_content_col_box bigdata_box2">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_02} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Big Data Warehouse</h5>
                                <p>A Big Data ecosystem includes two major components: data warehouses and data lakes. A data warehouse with innovative architecture can grow to accommodate your demands today and in the near future.</p>
                    
                             </div>
                              </div>
                             

                                
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                               <div className="ai_datascience_content_col_box bigdata_box3">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_03} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Big Data Analytics</h5>
                                <p>Now quickly extract insights from changing data Using big data analytics. Use cutting-edge methodologies like Hidden Markov Models, Naive Bayes, Self-learning model, Supervised and Unsupervised Learning, Gradient Boosted Models, and others with our expert assistance.</p>
                    
                             
                              </div>
                             

                                
                            </div>
                            </div>

                            <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box bigdata_box4">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_04} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>BI with Data Visualization</h5>
                                <p>The explosion of data presents a unique challenge: how else to make perfect sense of it all? Data visualization converts un-interpreted data into understandable meaning. Business Intelligence (BI) further transforms it into business terms.</p>
                                
                    
                             
                              </div>
                             

                                
                            </div>

                            
                        </div>

                        

                        <div className="col-md-6 ai_datascience_content_col">
                              <div className="ai_datascience_content_col_box bigdata_box5">
                              <div className="ai_datascience_content_img">
                                <img src={analytics_logo_05} alt=""  />
                             </div>
                             <div className="ai_datascience_content_para">
                                <h5>Common Data Model (CDM)</h5>
                                <p>Generate a one-stop source of information for your business by grouping the data into a consistent structure. Data from many databases are translated into a standardized format and then methodically evaluated. </p>
                                
                    
                             
                              </div>
                             

                                
                            </div>

                            
                        </div>


                    </div>
                </div>
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
