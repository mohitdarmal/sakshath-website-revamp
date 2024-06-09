import React, { useEffect, useState } from "react";
import {
  BENIFTS_IMG,
  BONUS,
  CARRER_IMG,
  SAFE,
} from "../../Components/Breadcumb/Constant";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCumb from "../../Components/Breadcumb/index";
import "./style.scss";
//import BlueHeading from "../../Components/Utils/BlueHeading";
import SubTitle from "../../Components/Utils/Title_head";
import { CARRER_BENFIT_IMG, JOIN_OUR_TEAM_IMG,CAREERS_AT_SAKSHATH,EXPRESSIVE,MOTIVATED,ARTICULATE,NEW_CHALLENGES, bangalore_img1, bangalore_map, FULLFILLMENT_IMG, FULL_WELLNESS_IMG,mumbai_map,gurugram_map} from "./Constant";
import { BsEnvelope } from "react-icons/bs";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import axios from "axios";
import JobOpeningPopup from "../../../src/Components/JobOpeningPopup";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import { IoBagOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { REACT_LOGO } from "./Constant";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Heading from "../../Components/Utils/Heading";
import ImageGallery from "react-image-gallery";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import { Autoplay } from "swiper/modules";







const Career = () => {
  const [modalPopupData, setModalPopupData] = useState({});
  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  const jobOpening = [
    {
      id: 1,
      title: "Golang Developer",
      job_img:require("../../Assets/images/golang.png"),
      description: [
        {
          id: 1,
          content:
            "Strong Communication skills to interact with customers/ Users and team members for effective communication",
        },
        {
          id: 2,
          content:
            "5+ years of experience in Business Analytics tools developing Reporting and Dashboards",
        },
        {
          id:3,
          content:"Minimum 2-3 year of experience of working with –I. Tools: Python, Spark, Azure Data factory, AWS Redshift. Postgres SQL, MS SQL Oracle, Power BI API Integration,Power BI Shell Scripting. Azure analytics Services.II. Enterprise of working on data warehouse/ Data marts projects."
        },
        {
          id:4,
          content:"Experience working in Agile development environment with tools such as Jira and Bitbucket"
        },
        {
          id:4,
          content:"Good to having Knowledge of other BI Tools & Platforms: Qlik, Tableau, Looker, Talend, Alteryx, snowflake."
        },

      ],
      experince: "4-6 years",
      location:'Bengaluru',
      position:'2'
    },
    {
      id: 2,
      title: "Salesforce Lightning Web",
      job_img:require("../../Assets/images/Salesforce.png"),
      description: [
        {
          id: 1,
          content:
            "Strong Communication skills to interact with customers/ Users and team members for effective communication",
        },
        {
          id: 2,
          content:
            "5+ years of experience in Business Analytics tools developing Reporting and Dashboards",
        },
      ],
      experince: "5+ years",
      location:'Pune',
      position:'5'
    },
    {
      id: 3,
      title: "Business Analyst",
      job_img:require("../../Assets/images/analytic.png"),
      description: [
        {
          id: 1,
          content:
            "Strong Communication skills to interact with customers/ Users and team members for effective communication",
        },
        {
          id: 2,
          content:
            "5+ years of experience in Business Analytics tools developing Reporting and Dashboards",
        },
      ],
      experince: "6 years+",
      location:'Bangalore',
      position:'5'
    },
    {
      id: 4,
      title: "Sr. Talend Developer",
      job_img:require("../../Assets/images/talend.png"),
      description: [
        {
          id: 1,
          content:
            "Strong Communication skills to interact with customers/ Users and team members for effective communication",
        },
        {
          id: 2,
          content:
            "5+ years of experience in Business Analytics tools developing Reporting and Dashboards",
        },
      ],
      experince: "7-9 years",
      location:'Mumbai',
      position:'2'
    },
    {
      id: 5,
      title: "Sr. Power BI Developer",
      job_img:require("../../Assets/images/powerBi.png"),
      description: [
        {
          id: 1,
          content:
            "Strong Communication skills to interact with customers/ Users and team members for effective communication",
        },
        {
          id: 2,
          content:
            "5+ years of experience in Business Analytics tools developing Reporting and Dashboards",
        },
      ],
      experince: "8-10years",
      location:'Mumbai',
      position:'2'
    },
    {
      id: 6,
      title: "ASP.Net Developer",
      job_img:require("../../Assets/images/Microsoft_.NET_logo.png"),
      description: [
        {
          id: 1,
          content:
            "Strong Communication skills to interact with customers/ Users and team members for effective communication",
        },
        {
          id: 2,
          content:
            "5+ years of experience in Business Analytics tools developing Reporting and Dashboards",
        },
      ],
      experince: "4-6 years",
      location:'Bengaluru',
      position:'2'
    },
    {
      id: 7,
      title: "Sr. Java Developer",
      
      job_img:require("../../Assets/images/javalogo.png"),
      description: [
        {
          id: 1,
          content:
            "Strong Communication skills to interact with customers/ Users and team members for effective communication",
        },
        {
          id: 2,
          content:
            "5+ years of experience in Business Analytics tools developing Reporting and Dashboards",
        },
      ],
      experince: "3-5 Years",
      location:'Bangalore',
      position:'4'
    },
    {
      id: 7,
      title: "Sr. Java Developer",
      
      job_img:require("../../Assets/images/javalogo.png"),
      description: [
        {
          id: 1,
          content:
            "Strong Communication skills to interact with customers/ Users and team members for effective communication",
        },
        {
          id: 2,
          content:
            "5+ years of experience in Business Analytics tools developing Reporting and Dashboards",
        },
      ],
      experince: "3-5 Years",
      location:'Bangalore',
      position:'4'
    },
  ];

  const [jobOpeningData, setJobOpeningData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setJobOpeningData(jobOpening);
  }, []);

  const showPopeupModal = () => {
    console.log("working");
  };

  return (
    <>
      <Helmet>
        <title>Career - Sakshath</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <BreadCumb imgUrl={CARRER_IMG} title=" CAREERS" className="img-fluid" />

      <section className="join_our_team_section">
        <div className="container">
          <div className="row first_row_with_empty_block">
            <div className="col-md-5 empty_block">
             
             <div className="join_our_team_wrapper">
             <Fade direction="up" triggerOnce>
                
                <Heading heading ="Life At Sakshath" uppercase=""/>
                </Fade>
                <Fade direction="up" triggerOnce>
                <ul>
                  <li>
                  We are a collaborative firm where everyone helps each other in mutual growth and find a way to flourish. We don’t hire only smart people but also smart people who effectively work as a team.
                  </li>
                  <li>
                  We are a solid team of people who wish to grow and ensure success individually and jointly. This pragmatic and flexible approach to every team member helps in making the organization a success in every endeavor it ventures into.
                  </li>
                  {/* <li>We are a collaborative firm where everyone helps each other in mutual growth and find a way to flourish. We don’t hire only smart people but also smart people who effectively work as a team.</li> */}
                </ul>
                </Fade>
                
                
             </div>
              
            </div>
         
              
              <div className="col-md-7 join_our_team_img_wrapper">
                <div className="join_our_team_middle_img_wrapper">
                  <img src={JOIN_OUR_TEAM_IMG} alt=""  className="img-fluid"/>
                </div>
                {/* <div className="join_our_team_right_img_wrapper">
                  <img src={JOIN_OUR_TEAM_IMG2} alt="" className="img-fluid" />
                </div> */}
            </div>
              
            

          </div>
        </div>
      </section> 
    
       {/* @@@@@@@@@@@@@@ career at sakshath @@@@@@@@@@@@@@@@@@ */}

      {/* <section className="careers_at_sakshath">
        
        <img src={CAREERS_AT_SAKSHATH} className="w-100" />

          
      </section>


      <section classname="careers_at_sakshath_inside_box">
      <div className="container career_at_sakshath_container">
        <div className="careers_at_sakshath_content">
                 


           <div className="row">
          
           <div className="col-md-8 careers_at_sakshath_main_box offset-md-2">
           <Fade direction="up" triggerOnce>
           
           <Heading heading="Careers at sakshath" uppercase="" />
           </Fade>
           <Fade direction="up" triggerOnce>
           <ul>
            <li className="careers_at_sakshath_checkmark">
            Sakshath is a platform for the world’s most talented people to congregate, grow, and make an impact. We place our employees at the core of everything we do to accomplish all targets.
          
           
            </li>
            <li>
            
            We aim to deliver the best experience through absolute novelty and connectivity.

            </li>
            <li>
             We’re dedicated to having an environment where everyone can thrive by emphasizing intense diversity, employment, engagement, ethics, transparency, and deep-rooted learning.
            </li>
           </ul>
          </Fade>
           </div>
           
           </div>

          
        </div>
      </div>
        
      </section> */}

      <section className="careers_at_sakshath_section">
      <div className="container">
      <div className="careers_at_sakshath_heading_text">
      <h6>CAREERS AT SAKSHATH</h6>
      <div className="heading_careers_at_sakshath">
      <Heading heading="It's about building the future,"></Heading>
      <Heading heading="one line of code at a time."></Heading>
      </div>

      </div>
        <div className="careers_at_sakshath_column_box">
        <div className="container">
          <div className="row careers_column_box_1st_row">
            <div className="col-md-3">
              <div className="fullfillment_box">
              <h5>FULLFILLMENT</h5>
              <p>When your hard work and ingenuity are rewarded, it feels great. But you know what feels even better? Being part of something big, something meaningful.</p>

              </div>
            </div>
            <div className="col-md-6">
            <div className="careers_img_box">
              <img src={FULLFILLMENT_IMG} alt="" className="img-fluid"/>
            </div>  
            </div>
            <div className="col-md-3">
            <div className="fullfillment_box">
              <h5>NOT-SO-BASIC BASICS</h5>
              <p>A competitive remuneration package: industry-standard salary, health insurance, flexible benefits, learning & development opportunities, and performance-based incentives.</p>

              </div>
            </div>
          </div>

          <div className="row careers_column_box_2nd_row">
            <div className="col-md-6">
              <div className="fun_n_wellness_box">
              <h5>FUN & WELLNESS</h5>
              <p>We make sure we have enough playtime to get the creative juices going. Summer outings, movie nights, game weeks, sports fests, soirees these events are more than fun; they give us the chance to bond and get to know each other better.</p>

              </div>
            </div>
            <div className="col-md-6">
              <div className="fun_n_wellnes_img">
                <img src={FULL_WELLNESS_IMG} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="row careers_column_box_3rd_row">
            <div className="col-md-3">
              <div className="fullfillment_box box_height">
              <h5>A GREAT COMMUNITY</h5>
              <p>The Pointwest environment enables collaboration and creative thought. It's a normal office scene to huddle, brainstorm, and strategize.</p>

              </div>
            </div>
            <div className="col-md-6">
            <div className="careers_img_box">
              <img src={FULLFILLMENT_IMG} alt="" className="img-fluid"/>
            </div>  
            </div>
            <div className="col-md-3">
            <div className="fullfillment_box">
              <h5>EXCELLENCE & GROWTH</h5>
              <p>Our Learning & Development team holds Boot Camp training, Brown Bag and Special Interest Learning Sessions, and other coaching programs designed to enhance your skills and help build your career.</p>

              </div>
            </div>
          </div>
        </div>
          
        </div>

      </div>

      

      </section>

      <section className="careers_footprint_section">
      <div className="container">
        <div className="text-center mb-4 pb-md-1">
        <Fade direction="up" triggerOnce>
           <Heading heading= "Our Growing Global Footprint" uppercase="uppercase" />
           </Fade>
           <Fade direction="up" triggerOnce>
           <p>We have a diverse team of professionals working across offices in Bengaluru, Mumbai and Gurugram</p>
           </Fade>
           </div>
      
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 careers_footprint_tab"
      justify
    >
      <Tab eventKey="mumbai" title="Mumbai">

      <div className="careers_footprint_bangalore_section">
          <div className="career_footprint_left_section">
           <img src={mumbai_map} alt="" />
          {/* <div className="image_gallery_box">
          <ImageGallery items={images} />
          </div> */}
          

          </div>
          <div className="career_footprint_right-section">
          <Heading heading= "Mumbai" uppercase="uppercase" />
          <p>Our Mumbai office pulses with vibrant energy, home to our thriving domestic client team. They flourish in a cityscape surrounded by the city's mix of tall buildings and peaceful coastal views. Every day in this bustling metropolis brings new inspiration and opportunities.</p>
            

          </div>
        </div>
        <div className="career_footprint_gallery">
        {/* <Carousel responsive={responsive}>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" className="image-fluid"/></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
</Carousel> */}
<div className="container">
        <Swiper
        // cssMode={true}
        // navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // className="mySwiper"
        // slidesPerView={5}
        //       spaceBetween={30}
        //       breakpoints={{
        //         320: {
        //           slidesPerView: 2,
        //           spaceBetween: 30,
        //         },
        //         481: {
        //           slidesPerView: 3,
        //           spaceBetween: 30,
        //         },
        //         768: {
        //           slidesPerView: 4,
        //           spaceBetween: 30,
        //         },
        //         1024: {
        //           slidesPerView: 5,
        //           spaceBetween: 30,
        //         },
        //       }}
        //       autoplay={{
        //         delay: 1500,
        //         disableOnInteraction: false,
        //       }}
        //       loop={true}
        //       modules={[Autoplay]}
        //       className="mySwiper"
        
        slidesPerView={5}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
             
              centeredSlides={true}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              // className="mySwiper"
      >
      {/* <div className="container"></div> */}
      
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        </Swiper>

        </div>
        </div>


        
        
      </Tab>
      <Tab eventKey="bengaluru" title="Bengaluru">
        <div className="careers_footprint_bangalore_section">
          <div className="career_footprint_left_section">
           <img src={bangalore_map} alt="" />
          {/* <div className="image_gallery_box">
          <ImageGallery items={images} />
          </div> */}
          

          </div>
          <div className="career_footprint_right-section">
          <Heading heading= "Bengaluru" uppercase="uppercase" />
          <p>Our Head Office in Bengaluru is the heart of Sakshath Technologies, where our CEO and management team reside. Imagine stepping out into a world teeming with tech startups, bustling cafes, and serene parks. Here, the dynamic energy fuels creativity and collaboration, making every day an exciting adventure in the thriving business hub of Bangalore.
 </p>
            

          </div>
        </div>
        <div className="career_footprint_gallery">
        {/* <Carousel responsive={responsive}>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" className="image-fluid"/></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
</Carousel> */}

<div className="container">
        <Swiper
        // cssMode={true}
        // navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // className="mySwiper"
        // slidesPerView={5}
        //       spaceBetween={30}
        //       breakpoints={{
        //         320: {
        //           slidesPerView: 2,
        //           spaceBetween: 30,
        //         },
        //         481: {
        //           slidesPerView: 3,
        //           spaceBetween: 30,
        //         },
        //         768: {
        //           slidesPerView: 4,
        //           spaceBetween: 30,
        //         },
        //         1024: {
        //           slidesPerView: 5,
        //           spaceBetween: 30,
        //         },
        //       }}
        //       autoplay={{
        //         delay: 1500,
        //         disableOnInteraction: false,
        //       }}
        //       loop={true}
        //       modules={[Autoplay]}
        //       className="mySwiper"
        
        slidesPerView={5}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
             
              centeredSlides={true}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation,Autoplay]}
      >
      {/* <div className="container"></div> */}
      
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        </Swiper>

        </div>
        </div>
        
      </Tab>
      <Tab eventKey="gurugram" title="Gurugram">
      <div className="careers_footprint_bangalore_section">
          <div className="career_footprint_left_section">
           <img src={gurugram_map} alt="" />
          {/* <div className="image_gallery_box">
          <ImageGallery items={images} />
          </div> */}
          

          </div>
          <div className="career_footprint_right-section">
          <Heading heading= "Gurugram" uppercase="uppercase" />
          <p>Step into the vibrant office of Gurugram, where every corner has its own story to tell. In our cozy office nestled in this lively city, our data analysts are the storytellers. With each click and keystroke, they spin tales from the city's data, capturing its essence in every line of code.</p>
            

          </div>
        </div>
        <div className="career_footprint_gallery">
        {/* <Carousel responsive={responsive}>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" className="image-fluid"/></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
  <div className="career_footprint_company_images"><img src={bangalore_img1} alt="" /></div>
</Carousel> */}
<div className="container">
        <Swiper
        // cssMode={true}
        // navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // className="mySwiper"
        // slidesPerView={5}
        //       spaceBetween={30}
        //       breakpoints={{
        //         320: {
        //           slidesPerView: 2,
        //           spaceBetween: 30,
        //         },
        //         481: {
        //           slidesPerView: 3,
        //           spaceBetween: 30,
        //         },
        //         768: {
        //           slidesPerView: 4,
        //           spaceBetween: 30,
        //         },
        //         1024: {
        //           slidesPerView: 5,
        //           spaceBetween: 30,
        //         },
        //       }}
        //       autoplay={{
        //         delay: 1500,
        //         disableOnInteraction: false,
        //       }}
        //       loop={true}
        //       modules={[Autoplay]}
        //       className="mySwiper"
        
        slidesPerView={5}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
             
              centeredSlides={true}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation,Autoplay]}
      >
      {/* <div className="container"></div> */}
      <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bangalore_img1} alt="" className="img-fluid" />
        </SwiperSlide>
        </Swiper>

        </div>
        </div>

        
      </Tab>
      
    </Tabs>


     </div>
      
      </section>

      {/* <section className="join_our_team">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 our_team_container_box">
              <div className="our_team_container">
                
                <Fade direction="up" delay={150} triggerOnce>
                  <Heading heading="Join Our Team" uppercase="text-uppercase" />
                </Fade>
                <Fade direction="up" delay={300} triggerOnce>
                  <p className="text-start">
                    We are a collaborative firm where everyone helps each other
                    in mutual growth and find a way to flourish. We don’t hire
                    only smart people but also smart people who effectively work
                    as a team. <br />
                    <br />
                    We are a solid team of people who wish to grow and ensure
                    success individually and jointly. This pragmatic and
                    flexible approach to every team member helps in making the
                    organization a success in every endeavor it ventures into.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col-md-6 sakshath_career_box ">
              <div className="sakshath_career_container">
                <Fade direction="up" delay={150} triggerOnce>
                  <Heading
                    heading="Career Sakshath"
                    uppercase="text-uppercase"
                  />{" "}
                </Fade>
                <Fade direction="up" delay={300} triggerOnce>
                  <p className="text-start">
                  Sakshath Technologies® is a platform for the world’s most talented people
                    to congregate, grow, and make an impact. We place our
                    employees at the core of everything we do to accomplish all
                    targets. <br />
                    <br />
                    We aim to deliver the best experience through absolute
                    novelty and connectivity. We’re dedicated to having an
                    environment where everyone can thrive by emphasizing intense
                    diversity, employment, engagement, ethics, transparency, and
                    deep-rooted learning.
                  </p>
                </Fade>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sakshath_career_mail">
        <div className="container">
          <div className="row ">
            <div className="maillink text-center ">
              <Fade direction="up" delay={300} triggerOnce>
                <Link
                  to="mailto:sakshathinfo@gmail.com"
                  className="career_mail_link"
                >
                  careers@sakshath-technologies.com
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/*  benfits starts*/}
       <section className="benefits_container">
        <Container>
        <Fade direction="up" triggerOnce>
          <Row>
            <div className="benefits_heading text-center">
            <Fade direction="up" triggerOnce>
              <Heading heading="Benefits of working at sakshath" uppercase="" />{" "}
             </Fade>
            </div>
            

            <Col className="cols">
              <div className="benefit_icon">
              
                <div className="benefit_img">
                  {" "}
                  <img src={EXPRESSIVE} alt="" className="img-fluid" />
                </div>
                
                <Fade direction="up" triggerOnce>
                <p>Expressive</p>
                </Fade>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={MOTIVATED} alt="" className="img-fluid" />
                </div>
                <Fade direction="up" triggerOnce>
                <p>Motivated</p>
                </Fade>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={ARTICULATE} alt="" className="img-fluid" />
                </div>
                <Fade direction="up" triggerOnce>
                <p>Articulate & Talented</p>
                </Fade>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={NEW_CHALLENGES} alt="" className="img-fluid" />
                </div>
                <Fade direction="up" triggerOnce>
                <p>New Challenges</p>
               </Fade>
              </div>
            </Col>
            
          </Row>
          </Fade>
        </Container>
      </section> 
      {/*  benfits end*/}



        {/* testimonials  starts*/}
        <section className="careers_testimonials">
        
        <div className="heading_testimonials text-center mb-4">
        <Heading heading="What our Client says about us" uppercase="" />
        </div>
        <div className="container">
        <Swiper
        // cssMode={true}
        // navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // className="mySwiper"
        // slidesPerView={5}
        //       spaceBetween={30}
        //       breakpoints={{
        //         320: {
        //           slidesPerView: 2,
        //           spaceBetween: 30,
        //         },
        //         481: {
        //           slidesPerView: 3,
        //           spaceBetween: 30,
        //         },
        //         768: {
        //           slidesPerView: 4,
        //           spaceBetween: 30,
        //         },
        //         1024: {
        //           slidesPerView: 5,
        //           spaceBetween: 30,
        //         },
        //       }}
        //       autoplay={{
        //         delay: 1500,
        //         disableOnInteraction: false,
        //       }}
        //       loop={true}
        //       modules={[Autoplay]}
        //       className="mySwiper"
        
        slidesPerView={5}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 2,
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
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
             
              centeredSlides={true}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation,Autoplay]}
      >
      {/* <div className="container"></div> */}
      
        <SwiperSlide>
          
            
            
            <div className="testimonial_box ">
            <div className="testimonials_citation_symbol text-center"><RiDoubleQuotesL /></div>
              <p>Join us! You won’t be sorry! One of the things I enjoy most about working here is the teamwork. Even when it is a hard or hectic day -we support each other where & when needed! Making it-Being the Best you can Be!! </p>
              <h6><strong>Eshwari S M Talent Acquisition Specialist</strong></h6>
            </div>
            

            

           

            

            

            
           





        </SwiperSlide>
        
        <SwiperSlide>
       
            
            <div className="testimonial_box text-center">
            <div className="testimonials_citation_symbol"><RiDoubleQuotesL /></div>
              <p>"I've never seen or heard of an organisation that believes shaping your future, it is their responsibility. While every organisation claims to have an open-door policy, at Sakshath, you will truly experience it when the leadership shares lunch with you and discusses your goals and objectives."</p>
              <h6><strong>Aashish Dulal- Sr. RPA Developer</strong></h6>
            </div>
            

        </SwiperSlide>
        <SwiperSlide>
            
            <div className="testimonial_box text-center">
            <div className="testimonials_citation_symbol"><RiDoubleQuotesL /></div>
              <p>Service Delivery Manager at Sakshath Technologies for the past three years, supporting our esteemed client, ABInBev. The dynamic and forward-thinking culture at Sakshath Technologies fosters continuous improvement, making it a great place to work and grow professionally. I am honoured to be part of this exceptional company and to contribute to its ongoing success. </p>
              <h6><strong>Madhusudhan R – Service Delivery Manager </strong></h6>
            </div>
            </SwiperSlide>
        <SwiperSlide>
       
            
            <div className="testimonial_box text-center">
            <div className="testimonials_citation_symbol"><RiDoubleQuotesL /></div>
              <p>“Over the past 2.5 years, my Clix Capital role has been challenging and rewarding. I am proud of the improvements and efficiencies I have helped implement, and I am committed to continuing to deliver exceptional performance and value. Working with the talented team at Clix Capital has been a remarkable experience, and I look forward to furthering our collective success.” </p>
              <h6><strong>Pallavi Takkar- BI Developer</strong></h6>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
        
            
            <div className="testimonial_box text-center">
            <div className="testimonials_citation_symbol"><RiDoubleQuotesL /></div>
              <p>"Sakshath is the go-to place! As a fresher, I've experienced fast learning, great opportunities, and a flexible, professional environment. I feel valued, and appreciated, and continuously grow in my role. The approachable team and excellent work culture make Sakshath the best company I've ever worked for till date</p>
              <h6><strong>Kavya Priya.K- 
Jr.Software
 Developer</strong></h6>
            </div>
           
        </SwiperSlide>
        
            
      </Swiper>
      </div>
      
        

        
        </section>
        

        {/* testimonials ends */}




      {/* Apply Jobs */}
      
      {/* <section className="jobs">
        <div className="container">
          <div className="row">
            <div className="text-center what_we_r_hiring">
              <Heading
                heading="What Jobs We Are Hiring "
                uppercase="uppercase"
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            {jobOpeningData.map((data) => {
              return (
                <div className="col-md-3" key={data.id}>
                  <div className="hiring_box">
                    <h5>{data.title}</h5>
                    
                    {data.description[0].content}

                    <button
                      onClick={() => {
                        setShowModal(true);
                        setModalPopupData({
                          title: data.title,
                          des: data.description,
                          exp: data.experince,
                          pos:data.position,
                          loc:data.location
                        });
                      }}
                    >
                      Apply Now
                    </button>
                    
                  </div>
                </div>
              );
            })}

            <JobOpeningPopup
              show={showModal}
              onHide={handleCloseModal}
              title={modalPopupData.title}
              description={modalPopupData.des}
              experince={modalPopupData.exp}
              location={modalPopupData.loc}
              position={modalPopupData.pos}
            />
          </div>
        </div>
      </section>

      Apply Jobs Ends */}


    




      <section className="careers_apply_job_section">
        <div className="container">
        <div className="text-center mb-4 pb-md-1">
        <Fade direction="up" triggerOnce>
           <Heading heading= "Current Openings" uppercase="uppercase" />
           </Fade>
           <Fade direction="up" triggerOnce>
           <p>Beneath each of these categories, you can find its most popular</p>
           </Fade>
           </div>
           <Fade direction="up" triggerOnce>
          <div className="row">
          {jobOpeningData.map((data) => {
              return (
            <div className="col-md-6 position-relative careers_job_container" key={data.id}>
            <Fade direction="up" triggerOnce>
            <div className="">
              <div className="careers_jobs_box">
                
                   
                    <div className="careers_jobs_info_box_img_holder_box">
                      <img src={data.job_img} alt=""  />
                    </div>
                    <div className="careers_jobs_info_box_job_description_box">
                      <h5>{data.title}</h5>
                      <div className="description_box_withicon">
                         <div className="segment_box">
                         <span><IoBagOutline />Positions ({data.position})</span>
                         </div>
                        

                        
                        <div className="time_box">
                        <span><IoTimeOutline /> {data.experince}</span>
                        </div>

                        <div className="location_box">
                        <span><IoLocationOutline /> 
                        {data.location}</span>
                        </div>
                        

                      </div>
                      {/* <div className="description_box_job_status">
                        <div className="remote_box">
                        <span className="remote_job_status_style">Remote</span>
                        </div>
                        <div className="full_time_box">
                        <span className="full_job_status_style">Full Time</span>
                        </div>
                        <div className="part_time_box">
                        <span className="parttime_job_status_style">Part-Time</span>
                        </div>
                        
                      </div> */}
                      
                      <div className="apply_now_button">

                <button
                      onClick={() => {
                        setShowModal(true);
                        setModalPopupData({
                          title: data.title,
                          des: data.description,
                          exp: data.experince,
                          pos:data.position,
                          loc:data.location
                        });
                      }}
                    >
                      Apply Now  <HiMiniArrowLongRight />
                    </button>
                    

              </div>
                        
                    </div>
 
                
              </div>

              
              </div>
              </Fade> 
            </div>
            );
            })}
            
           
           <JobOpeningPopup
              show={showModal}
              onHide={handleCloseModal}
              title={modalPopupData.title}
              description={modalPopupData.des}
              experince={modalPopupData.exp}
              location={modalPopupData.loc}
              position={modalPopupData.pos}
            />
           
            
          </div>
          </Fade>
        </div>
      </section>

      
    </>
  );
};

export default Career;
