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
import Heading from "../../Components/Utils/Heading";
import SubTitle from "../../Components/Utils/Title_head";
import { CARRER_BENFIT_IMG } from "./Constant";
import { BsEnvelope } from "react-icons/bs";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import axios from "axios";
import JobOpeningPopup from "../../Components/JobOpeningPopup";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";

const Career = () => {

  const [modalPopupData, setModalPopupData] = useState({});

  const jobOpening = [
      {
        id: 1,
        title: "Senior React Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 2,
        title: "Junior React Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur.",
    },
    {
      id: 3,
      title: "Sales",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur",
    },
    {
      id: 4,
      title: "Senior MIS Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur",
    },
    {
      id: 5,
      title: "Sr. QA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur",
    },
    {
      id: 6,
      title: "Dot Net Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur",
    },
    {
      id: 7,
      title: "Java Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,sint consequatur",
    },
  ];

  const [jobOpeningData, setJobOpeningData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const handleShowModal = (jobOpening) => {
  //   setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setJobOpeningData(jobOpening);
  }, []);

  const showPopeupModal = () => {
    console.log("working")
  }

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(response => {
  //     if (response.status === 200) {
  //       setJobOpeningData(response.data)
  //     } else {
  //       console.log("not get data");
  //     }
  //   })
  //   .catch(error => {
  //     console.log("error")
  //   });
  // }, [])

  return (
    <>
      <Helmet>
        <title>About - Sakshath</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <BreadCumb imgUrl={CARRER_IMG} title=" CAREERS" className="img-fluid" />
      <section className="join_our_team">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 our_team_container_box">
              <div className="our_team_container">
                {/* <h1 className="text-center">Join Our Team</h1> */}
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
                    Sakshath is a platform for the world’s most talented people
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
                {/* <br /> */}
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



      {/* core values */}

      {/* <section>
        <div className="container">
          <div className="row">
          <div className="our_values">
            <Heading heading=""/>
          </div>
            <div className="col-md-4">
              <div className="honesty">
              <img src={SAFE} alt="" />

              <SubTitle SubTitle="Honesty" />
              <p>LA culture of honesty results in more than “happy” workplaces, and a deep-seated respect and expectation for honesty makes companies more successful and more profitable.</p>
              </div>
            </div>
            <div className="col-md-4">cdsc</div>
            <div className="col-md-4">cdcsd</div>
          </div>
        </div>
      </section> */}

      {/*  benfits starts*/}
      <section className="benefits_container">
        <Container>
          <Row>
            <div className="benefits_heading text-center text-decoration-underline">
              <Heading heading="Benfits You Recived" uppercase="uppercase" />{" "}
            </div>
            <p className="benefit_para text-center mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              incidunt laborum distinctio aspernatur.
            </p>

            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={SAFE} alt="" />
                </div>

                <p>Job Sercuity</p>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={SAFE} alt="" />
                </div>

                <p>Job Sercuity</p>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={SAFE} alt="" />
                </div>

                <p>Job Sercuity</p>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={SAFE} alt="" />
                </div>

                <p>Job Sercuity</p>
              </div>
            </Col>
            <Col className="cols">
              <div className="benefit_icon">
                <div className="benefit_img">
                  {" "}
                  <img src={SAFE} alt="" />
                </div>

                <p>Job Sercuity</p>
              </div>
            </Col>
        
          </Row>
        </Container>
      </section>
      {/*  benfits end*/}

      {/* Apply Jobs */}
      <section className="jobs">
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

                    <p>{`${data.description.substring(0, 100)}`} </p>
                    <button
                      onClick={ () => {
                        setShowModal(true);
                        setModalPopupData({title:data.title, des: data.description})
                        }}
                      >
                      Apply Now
                    </button>
                    {/* <SlideAnimationButton url="/" btnName="Apply Now" /> */}

                   
                  </div>
                </div>
              );
            })}

            <JobOpeningPopup
                      show={showModal}
                      onHide={handleCloseModal}
                      title={modalPopupData.title}
                      description={modalPopupData.des}
                    />
          </div>
        </div>
      </section>

      {/* Apply Jobs Ends */}
    </>
  );
};

export default Career;
