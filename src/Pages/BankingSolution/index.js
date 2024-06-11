import React from "react";

import "./style.scss";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import BreadCumb from "../../Components/Breadcumb";
import { BANKING_BG_IMG, Who_we_r,BANKING_BREAD_CRUM} from "./Constant";
import Heading from "../../Components/Utils/Heading";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import{
  CLIENT_LOGO11,
  CLIENT_LOGO15,
  CLIENT_LOGO2,
  CLIENT_LOGO16,
  CLIENT_LOGO18,
  CLIENT_LOGO19,
  CLIENT_LOGO20,
  CLIENT_LOGO22,
  CLIENT_LOGO23,
  CLIENT_LOGO24,
  CLIENT_LOGO25,
  CLIENT_LOGO26,
  CLIENT_LOGO27,
  CLIENT_LOGO28,
  CLIENT_LOGO29,
  CLIENT_LOGO37,
  CLIENT_LOGO38,
  CLIENT_LOGO34,
  CLIENT_LOGO36

}from "../../Components/TrustedBy/Constant";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import Faq from "../../Components/Faq";
import { Helmet } from "react-helmet";
const BankingSolution = () => {
  return (
    <>
     <Helmet>
        <title>Sakshath- Banking Solution</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <BreadCumb imgUrl={BANKING_BREAD_CRUM}
      // title="Banking Solution"
      />

      <section className="banking_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banking_main_content">
                {/* <h3>
                Welcome to Sakshath Banking Solutions!
                                </h3> */}
                <Heading heading="Welcome to Sakshath Banking Solutions!" />

                <p>
                  At Sakshath, we specialize in providing cutting-edge IT
                  solutions tailored specifically for the banking sector. With
                  our expertise, we assist banks in managing and scaling their
                  services, integrating various banking functionalities
                  seamlessly, and offering comprehensive analytical solutions to
                  understand and serve customers better.
                </p>
                <SlideAnimationButton
                    btnName="Get Started Now"
                    url="/contact-us"
                  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="banking_img ipad_full_width">
                <img src={Who_we_r} alt="" className=" img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer_web_section">
        <div className="container">
          <div className="row">
            <div className="banking_upper_heading text-center">
              {/* <img src={BANKING_BG_IMG} alt="" /> */}
              <Heading heading="Project Spotlight" />
            </div>
          </div>
        </div>
      </section>





      

      <section className="customer_web_box_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="customer_web_box">
                {/* <div className="customer_web_content"> */}
                <h4>Customer Web Application</h4>

                <p>
                  {" "}
                  Empower your customers with our comprehensive online platform
                  designed to provide convenient access to loan details,
                  facilitate seamless communication, and efficiently manage
                  Re-KYC requirements. Our user-friendly portal acts as a
                  one-stop solution, allowing borrowers to stay informed,
                  address service-related issues, and update their KYC
                  hassle-free.
                </p>
                {/* </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="customer_web_box">
                {/* <div className="customer_web_content"> */}
                <h4> Stakeholder Web Application C360</h4>

                <p>
                  {" "}
                  Gain a holistic view of your business performance and
                  operational efficiency with our organization's stakeholder
                  platform. Our portal integrates essential features like
                  real-time business number overviews, visualization charts,
                  operations queues, and Power BI dashboards. It serves as a
                  centralized hub for insightful analysis and informed
                  decision-making across all levels of your organization.
                </p>
               
      
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* banking patners logo start */}
     <section className="partner_logo_section">
      
     
      <div className="container partner_logo_tab">
        <div className="text-center">
        <Heading
              heading="Trusted By"
            />
        </div>
        
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
           autoplay={{
           delay: 1500,
            disableOnInteraction: false,
           }}
          breakpoints={{
            320: {
              slidesPerView:2,
              spaceBetween:30
            },
            481: {
              slidesPerView:3,
              spaceBetween:30
            },
            768: {
              slidesPerView:3,
              spaceBetween:30
            },
            1024: {
              slidesPerView: 5,
              spaceBetween:30
            },
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper" 
          >
          <SwiperSlide>
            <img src={CLIENT_LOGO11} />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO15} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO16} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO18} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO19} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO20} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO22} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO23} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO24} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO25} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO26} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO27} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO28} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO29} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO37} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO38} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO34} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLIENT_LOGO36} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    {/* baking patenrs logo end */}

      <section className="key_feature_section">
        <div className="container-fluid">
          <div className="row">
            <div className="key_feature_heading text-center">
              <Heading heading="Key Features" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 key_feature_box">
              {/* <div className="key_feature_box"> */}
              <h4>Real-time Business Metrics</h4>
              <p>
                Access real-time business metrics and KPIs, including revenue,
                sales figures, customer acquisition rates, and product
                performance. Easily digestible formats allow stakeholders to
                assess overall business health and identify trends swiftly.
              </p>
              {/* </div> */}
            </div>
            <div className="col-md-3 key_feature_box">
              {/* <div className="key_feature_box"> */}
              <h4>Visualization Tools</h4>
              <p>
                Customize charts and graphs to focus on specific metrics or time
                periods, enabling deeper insights into business performance and
                market trends. Our portal offers a variety of visualization
                tools, including graphs, pie charts, and trend analysis charts.
              </p>
              {/* </div> */}
            </div>
            <div className="col-md-3 key_feature_box">
              {/* <div className="key_feature_box"> */}
              {/* <div className="bank_img">
    <img src={Who_we_r} alt=""/>
              </div> */}
          
              <h4>Operations Queue</h4>
              <p>
                Streamline daily operational tasks such as application logins,
                status updates, and pending approvals through our intuitive
                operations queue. Ensure efficient task assignment, tracking,
                and completion within designated timeframes.
              </p>
              {/* </div> */}
            </div>
            <div className="col-md-3 key_feature_box">
              {/* <div className=""> */}
              <h4>Power BI Dashboards Integration</h4>
              <p>
                Seamlessly migrate Power BI dashboards to our portal,
                consolidating all analytical tools into a single platform.
                Access dynamic reports and interactive visualizations generated
                by Power BI for advanced data analysis and exploration.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section>
      <div className="container">
        <div className="row"> 
        <div className="col-md-1"> </div>
        <div className="col-md-10">
              <Faq />
        </div>
        <div className="col-md-1"> </div>
        </div>
      </div>
     </section> */}
   

    </>
  );
};

export default BankingSolution;
