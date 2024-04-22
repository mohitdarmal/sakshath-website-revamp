import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsTelephoneInbound } from "react-icons/bs";
import CookieConsent from "react-cookie-consent";
import { FOOTER_LOGO, SUBSCRIPTION_OFFER } from "./Constant";
import "./style.scss";
import Heading from "../Utils/Heading";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Form, Button } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";
import { INSTAGRAM_ICON, LINKEDIN_ICON, YOUTUBE_ICON } from "../Header/Constant";
import BackToTop from "../BackToTop";
import FloatingActionButton from "../FloatingActionButton";
// import OnLoadPopup from "../NewsLetterPopup";



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
                      className="img-fluid shake"
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
                <img className="pb-4 img-fluid" src={FOOTER_LOGO} alt=""   />{" "}
              </Fade>
              <Fade direction="up" delay={50}>
                {" "}
                <h4 className="text-decoration-underline mt-md-3">
                  Don’t Hesitate to Contact With Our Experites
                </h4>{" "}
              </Fade>
              <ul className=" font-medium ">
                <li className="contact_hover">
                  <Fade direction="up" delay={400}>
                    {" "}
                    <Link to="mailto:sakshath-technologies@gmail.com">
                      <FaRegEnvelope />
                      &nbsp;  info@sakshath-technologies.com
                    </Link>
                  </Fade>
                </li>

                <Fade direction="up" delay={150}>
                  <li className="mt-3 ftr_addr ">
                    <p>
                    Level 7, Mfar Greenheart, Manyata Tech Park, Phase IV, Hebbal ORR,   &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; Bengaluru – 560045.
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
                    <Link to="/">Home</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">About us</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/our-team">Teams</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/our-achievements">Achievements</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/career">Careers</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                </Fade>
              </ul>
            </div>
            <div className="col-md-3 footer_link">
              <h5>IT Company</h5>
              <ul>
                <Fade direction="up" cascade damping={0.1}>
                  <li className="mt-4">
                    <Link to="/application-development">Application Development</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">RPA</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Devops/testing</Link>
                  </li>
                  <li className="mt-3">
                    <a href="/analytics#Bi+dashboard">BI + Dashboard</a>
                  </li>
                  <li className="mt-3">
                    <Link to="/erp">ERP</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/banking-solution">Banking Solution</Link>
                  </li>
                </Fade>
              </ul>
            </div>
            <div className="col-md-3 footer_link">
              <h5>Our Support</h5>

              <ul className="font-medium">
                <Fade direction="up" cascade damping={0.1}>
                  <li className="mt-4">
                    <Link to="/talent-solution">Talent Solution</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/career">Hire</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/staffing">Staffing</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/managed-services">Managed Services</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">Cookies</Link>
                  </li>
                  
                  <li className="mt-3">
                    <Link to="/privacy">Privacy Policy</Link>
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
                    Copyrights © 2023 Sakshath Technologies. All rights
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
      <FloatingActionButton />
{/* <OnLoadPopup /> */}
      
<CookieConsent
  location="bottom"
  // enableDeclineButton 
  flipButtons
  buttonText="I Accept"
  // declineButtonText="Decline"
  cookieName="Sakshath_Cookies"
  style={{ background: "#24688fed" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={365}
>
  Please accept the cookies. This website uses cookies to enhance the user experience.
</CookieConsent>
    
    </>
  );
};

export default Footer;
