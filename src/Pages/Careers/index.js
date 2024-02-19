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
import { CARRER_BENFIT_IMG, JOIN_OUR_TEAM_IMG,CAREERS_AT_SAKSHATH,EXPRESSIVE,MOTIVATED,ARTICULATE,NEW_CHALLENGES} from "./Constant";
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




const Career = () => {
  const [modalPopupData, setModalPopupData] = useState({});

  const jobOpening = [
    {
      id: 1,
      title: "Senior React Developer",
      job_img:require("../../Assets/images/physics.png"),
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
      experince: "4-8 years+",
      location:'Bangalore',
      position:'5'
    },
    {
      id: 2,
      title: "Junior React Developer",
      job_img:require("../../Assets/images/physics.png"),
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
      experince: "2.5 years+",
      location:'Gurugram',
      position:'3'
    },
    {
      id: 3,
      title: "Sales",
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
      title: "Senior MIS Developer",
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
      experince: "2.5 years+",
      location:'Bangalore'
    },
    {
      id: 5,
      title: "Sr. QA",
      job_img:require("../../Assets/images/QAlogo.png"),
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
      experince: "3.5 - 4 years+",
      location:'Mumbai',
      position:'6'
    },
    {
      id: 6,
      title: "Dot Net Developer",
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
      experince: "2.5 years+",
      location:'Mumbai',
      position:'2'
    },
    {
      id: 7,
      title: "Java Developer",
      
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
      experince: "2.5-4 years+",
      location:'Hybird',
      position:'5'
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
        <title>About - Sakshath</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <BreadCumb imgUrl={CARRER_IMG} title=" CAREERS" className="img-fluid" />

      <section className="join_our_team_section">
        <div className="container">
          <div className="row first_row_with_empty_block">
            <div className="col-md-5 empty_block">
             
             <div className="join_our_team_wrapper">
                
                <Heading heading ="join our team" uppercase="text-uppercase"/>

                <ul>
                  <li>
                  We are a collaborative firm where everyone helps each other in mutual growth and find a way to flourish. We don’t hire only smart people but also smart people who effectively work as a team.
                  </li>
                  <li>
                  We are a solid team of people who wish to grow and ensure success individually and jointly. This pragmatic and flexible approach to every team member helps in making the organization a success in every endeavor it ventures into.
                  </li>
                  {/* <li>We are a collaborative firm where everyone helps each other in mutual growth and find a way to flourish. We don’t hire only smart people but also smart people who effectively work as a team.</li> */}
                </ul>
                
                
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

      <section className="careers_at_sakshath">
        
        <img src={CAREERS_AT_SAKSHATH} className="w-100" />

          
      </section>


      <section classname="careers_at_sakshath_inside_box">
      <div className="container career_at_sakshath_container">
        <div className="careers_at_sakshath_content">

           {/* <Heading heading="careers at sakshath" uppercase="text-uppercase" />
           <p>Sakshath is a platform for the world’s most talented people to congregate, grow, and make an impact. We place our employees at the core of everything we do to accomplish all targets.</p>
           <p>We aim to deliver the best experience through absolute novelty and connectivity.</p>
           <p>We’re dedicated to having an environment where everyone can thrive by emphasizing intense diversity, employment, engagement, ethics, transparency, and deep-rooted learning.</p> */}
           <div className="row">
           {/* <div className="col-md-2"></div> */}
           <div className="col-md-8 careers_at_sakshath_main_box offset-md-2">
           
           <Heading heading="careers at sakshath" uppercase="text-uppercase" />
           
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
           </div>
           {/* <div className="col-md-2"></div> */}
           </div>

          
        </div>
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
          <Row>
            <div className="benefits_heading text-center">
              <Heading heading="Benefits of Working At Sakshath" uppercase="uppercase" />{" "}
            </div>
            

            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={EXPRESSIVE} alt="" className="img-fluid" />
                </div>

                <p>Expressive</p>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={MOTIVATED} alt="" className="img-fluid" />
                </div>

                <p>Motivated</p>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={ARTICULATE} alt="" className="img-fluid" />
                </div>

                <p>Articulate & Talented</p>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={NEW_CHALLENGES} alt="" className="img-fluid" />
                </div>

                <p>New Challenges</p>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section> 
      {/*  benfits end*/}

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
           <Heading heading= "Most Popular Jobs" uppercase="text-uppercase" />
           <p>Beneath each of these categories, you can find its most popular</p>
           </div>
          <div className="row">
          {jobOpeningData.map((data) => {
              return (
            <div className="col-md-6 position-relative careers_job_container" key={data.id}>
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
    </>
  );
};

export default Career;
