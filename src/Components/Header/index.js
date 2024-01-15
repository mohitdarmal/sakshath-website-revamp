import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { TfiLocationPin } from "react-icons/tfi";
import { BsEnvelope, BsTelephoneInbound } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { LOGO } from "./Constant";
import { CiGlobe } from "react-icons/ci";


const Header = () => {
  return (
    <>
      <section className="top_header ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <a className="text-white text-decoration-none ">
                <TfiLocationPin /> Jakkur Main Road &nbsp;&nbsp; | &nbsp;&nbsp;
              </a>
              <Link
                to="mailto:sakshtah@gmail.com"
                className="text-white text-decoration-none"
              >
                <BsEnvelope /> sakshath-technologies@gmail.com &nbsp;
              </Link>
            </div>
            <div className="col-md-6 text-md-end">
              <Link
                to="tel: +91806781987"
                className=" text-white text-decoration-none"
              >
                <BsTelephoneInbound /> &nbsp; +91 80 6781987 &nbsp; | &nbsp;
                &nbsp;
              </Link>

              <span className="header_social_icons text-white ">
                Follow us &nbsp; &nbsp;
                <Link
                  to="https://www.linkedin.com/company/sakshath-technologies/"
                  target={"_blank"}
                  className="text-white"
                >
                  <GrLinkedin />
                </Link>{" "}
                &nbsp;
                <Link
                  to="https://www.instagram.com/sakshath_technologies/"
                  target={"_blank"}
                  rel="noopener"
                  className="text-white"
                >
                  <AiOutlineInstagram />
                </Link>{" "}
                &nbsp;
                <Link
                  to="https://www.youtube.com/watch?v=UHjZFuO8AYY"
                  target="_blank"
                  className="text-white"
                >
                  <FiYoutube />
                </Link>{" "}
                &nbsp;
              </span>
            </div>
          </div>
        </div>
      </section>

 
<nav className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="index.html">
    <img src={LOGO} alt="" />
    </a>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
            <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
              <li><a className="dropdown-item" href="#!">Log in</a></li>
              <li><a className="dropdown-item" href="#!">Lost Password?</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#!">Sign up</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
            <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="servicesDropdown">
              <li><a className="dropdown-item" href="#!">Writing</a></li>
              <li><a className="dropdown-item" href="#!">SEO</a></li>
              <li><a className="dropdown-item" href="#!">Web Design</a></li>
              <li><a className="dropdown-item" href="#!">App Development</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">Contact</a>
          </li>
        </ul>

        <div className="d-flex">
                <div className="dropdown">
                  <span> <CiGlobe/> English   </span>
                  <Link className="cta_button">
                    Get Free Quote
                  </Link>
                 
                </div>
              </div>

      </div>
    </div>
  </div>
</nav>


   

      {/* <section className="main_header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                <img src={LOGO} alt="" />
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu_link" >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                   Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Carrers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                  About-Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Company-Updates
                  </Link>
                </li>
              </ul>
             
              <div className="d-flex">
                <div className="dropdown">
                  <span> <CiGlobe/> English   </span>
                  <Link className="cta_button">
                    Get Free Quote
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section> */}
    </>
  );
};

export default Header;
