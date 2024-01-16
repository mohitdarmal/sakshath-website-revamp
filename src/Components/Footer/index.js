import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { WLOGO } from "./Constant";

import { TfiLocationPin } from "react-icons/tfi";
import { BsEnvelope, BsTelephoneInbound } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <section></section>
      <footer className="main_footer ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-4">
              <div className="logo">
                <img src={WLOGO} alt="LOGO" />
              </div>
              <br />
              <h2 className="text-decoration-underline ">
                Don't Hesite to contact us
              </h2>
              <ul className=" footer_icons list-unstyled text-blackfont-medium ">
                <li className="mt-4 ">
                  <BsEnvelope />
                  &nbsp;{" "}
                  <Link
                    to="mailto:sakshath@gmail.com"
                    className="social text-white text-decoration-none"
                  >
                    sakshath-technologies@gmail.com
                  </Link>
                </li>
                <li className="mt-4">
                  <TfiLocationPin /> &nbsp;
                  <Link
                    to="/"
                    className=" text-decoration-none font-size-medium"
                  >
                    Jakkur Main Road
                  </Link>
                </li>
                <li className="mt-4">
                  <BsTelephoneInbound /> &nbsp;
                  <Link
                    to="tel:+91 897979780"
                    className=" text-decoration-none font-size-larger"
                  >
                    8977978780
                  </Link>
                </li>
              </ul>

              {/* </div> */}
            </div>

            <div className="col-md-3  mt-4 footer_links">
              <h3 className="text-decoration-underline">Quick Links</h3>
              <ul className="text-black ">
                <li className="mt-4">
                  <Link to="/">Home </Link>{" "}
                </li>
                <li className="mt-3 justify-content-center ">
                  {" "}
                  <Link to="/">About-Us</Link>
                </li>
                <li className="mt-4 ">
                  <Link to="/">Service</Link>
                </li>
                <li className="mt-4 ">
                  <Link to="/">Blogs</Link>
                </li>
                <li className="mt-4 ">
                  <Link to="/">Careers</Link>
                </li>
                <li className="mt-4 ">
                  <Link to="/">Banking Solution</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3  mt-4">
              <p>ggger</p>
            </div>
            <div className="col-md-3  mt-4">
              <p>ggger</p>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
        </div>

        <div className="container footer_rights">
          <div className="row">
            <div className="col-md-6">
              Copyright © 2024 Sakshath-technologies. All Right Reserved
            </div>
            <div className="col-md-6 footer_socail_link ">
              <Link to="">
                <GrLinkedin />
              </Link>

              <Link to="">
                <AiOutlineInstagram />
              </Link>

              <Link to="">
                <FiYoutube />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
