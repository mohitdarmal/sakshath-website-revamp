import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa6";
//import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FOOTER_LOGO } from "./Constant";
import "./style.scss";

const Footer = () => {
  return (
    <>
      {/* <section className="container">
        <div className="row">
          <div className="col-md-4">dfcgvh</div>
          <div className="col-md-8">dfcgvh</div>
        </div>
      </section> */}

      <footer className="footer_section">
        <div className="container ftr_top">
          <div className="row">
            {/*  */}
            <div className="col-md-3 ftr_col1">
              <img className="pb-4" src={FOOTER_LOGO} alt="" />
              <h4 className="text-decoration-underline mt-md-3">
                Don’t Hesitate to Conatct With Our Experites
              </h4>
              <ul className=" font-medium ">
                <li className="contact_hover">
                  <Link to="mailto:sakshath-technologies@gmail.com">
                    <FaRegEnvelope />
                    &nbsp; sakshath-technologies@gmail.com
                  </Link>
                </li>
                <li className="mt-3 ftr_addr ">
                  <p>
                    8, KV Jairam Rd, MCHS Layout, Jakkur,Bengaluru – 560 064
                  </p>
                </li>
                <li className="mt-3 contact_hover">
                  <Link to="tel:+91 80 67819878">
                    <FaPhone /> +91 80 67819878
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer_link ">
              <h5>Best Services</h5>
              <ul className="">
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
              </ul>
            </div>
            <div className="col-md-3 footer_link">
              <h5>IT Company</h5>
              <ul>
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
              </ul>
            </div>
            <div className="col-md-3 footer_link">
              <h5>Our Support</h5>

              <ul className="font-medium">
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
              </ul>
            </div>
          </div>
        </div>

        <div className="container ftr_bottom">
          <div className="row ">
            <div className="col-md-8">
              <div>
                <p>
                  Copyrights © 2023 Sakshath Technologies®. All rights reserved.
                </p>
              </div>
            </div>

            <div className="col-md-4 social_media ">
              <Link to="">
                <FaFacebookF />
              </Link>

              <Link to="">
                <FaTwitter />
              </Link>

              <Link to="">
                <FaLinkedin />
              </Link>

              <Link to="">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
