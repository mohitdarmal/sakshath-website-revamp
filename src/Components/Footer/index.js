import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa6";
//import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneInbound } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FOOTER_LOGO, SUBSCRIPTION_OFFER } from "./Constant";
import "./style.scss";
import Heading from "../Utils/Heading";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Form, Button } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";
import { INSTAGRAM_ICON, LINKEDIN_ICON, YOUTUBE_ICON } from "../Header/Constant";
import BackToTop from "../BackToTop";



const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <>
      <section className="subscription_footer">
        <div className="container subscription_box">
          <div className="subscription_content_box">
            <div className="row subscription_content_box_area align-items-center">
              <div className="col-md-5 left_subscription_content_box">
                <div className="left_content">
                  <div className="left_content_icon">
                    <img
                      className="img-fluid"
                      src={SUBSCRIPTION_OFFER}
                      alt=""
                    />
                  </div>
                  <div className="left_content">
                    <Heading
                      heading="Get Special Rewards"
                      uppercase=""
                    ></Heading>
                  </div>
                </div>
              </div>
              <div className="col-md-7 right_subscription_content_box">
                <Form onSubmit={handleSubmit} className="subscription_form">
                  <Form.Group controlId="formEmail">
                  <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <MdOutlineEmail />
            </span>
          </div>
                  
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container ftr_top">
          <div className="row">
            {/*  */}
            <div className="col-md-3 ftr_col1">
              <Fade direction="up">
                {" "}
                <img className="pb-4" src={FOOTER_LOGO} alt="" />{" "}
              </Fade>
              <Fade direction="up" delay={50}>
                {" "}
                <h4 className="text-decoration-underline mt-md-3">
                  Don’t Hesitate to Conatct With Our Experites
                </h4>{" "}
              </Fade>
              <ul className=" font-medium ">
                <li className="contact_hover">
                  <Fade direction="up" delay={400}>
                    {" "}
                    <Link to="mailto:sakshath-technologies@gmail.com">
                      <FaRegEnvelope />
                      &nbsp; sakshath-technologies@gmail.com
                    </Link>
                  </Fade>
                </li>

                <Fade direction="up" delay={150}>
                  <li className="mt-3 ftr_addr ">
                    <p>
                      8, KV Jairam Rd, MCHS Layout, Jakkur,Bengaluru – 560 064
                    </p>
                  </li>{" "}
                </Fade>
                <Fade direction="up" delay={200}>
                  <li className="mt-3 contact_hover">
                    <Link to="tel:+91 80 67819878">
                      <BsTelephoneInbound />
                      &nbsp; +91 80 67819878
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
            <div className="col-md-3 footer_link ">
              <h5>Best Services</h5>
              <ul className="">
                <Fade direction="up" cascade damping={0.1}>
                  <li className="mt-4">
                    <Link to="/">Web & IT Consulting</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/">Cyber Security Solutions</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Software Development</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Product Enginering</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Project Management</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Security Solutions</Link>
                  </li>
                </Fade>
              </ul>
            </div>
            <div className="col-md-3 footer_link">
              <h5>IT Company</h5>
              <ul>
                <Fade direction="up" cascade damping={0.1}>
                  <li className="mt-4">
                    <Link to="">About Company</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Latest News & Blog</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Professional Members</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Our Achievment</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Company Journey</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Meet Out Teams</Link>
                  </li>
                </Fade>
              </ul>
            </div>
            <div className="col-md-3 footer_link">
              <h5>Our Support</h5>

              <ul className="font-medium">
                <Fade direction="up" cascade damping={0.1}>
                  <li className="mt-4">
                    <Link to="">Premium Support</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Need a Career ?</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Help & FAQ</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Pricing and plans</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Cookies Policy</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Privacy Policy</Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
        </div>

        <div className="container ftr_bottom">
          <div className="row ">
            <div className="col-md-8">
              <div>
                <Fade direction="up">
                  {" "}
                  <p>
                    Copyrights © 2023 Sakshath Technologies®. All rights
                    reserved.
                  </p>
                </Fade>
              </div>
            </div>

            <div className="col-md-4 social_media ">
              <Fade direction="up" cascade damping={0.1}>
                <Link to="">
                  {/* <RiInstagramFill />  */} <img src={LINKEDIN_ICON} />
                </Link>

                <Link to="">
                  {/* <TfiLinkedin />  */} <img src={INSTAGRAM_ICON} />
                </Link>

                <Link to="">
                  {/* <FaYoutube /> */} <img src={YOUTUBE_ICON} />
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    
    </>
  );
};

export default Footer;
