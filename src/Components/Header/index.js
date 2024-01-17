import React from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsEnvelope, BsTelephoneInbound } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { LOGO } from "./Constant";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <section className="top_header ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link className="top_header_location">
                <MdOutlineLocationOn /> Jakkur Main Road &nbsp;&nbsp; |
                &nbsp;&nbsp;
              </Link>
              <Link to="mailto:sakshath@gmail.com">
                <BsEnvelope /> &nbsp;sakshath-technologies@gmail.com &nbsp;
              </Link>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to="tel: +91806781987">
                <BsTelephoneInbound /> &nbsp;+91 80 6781987 &nbsp; | &nbsp;
                &nbsp;
              </Link>

              <span className="header_social_icons">
                Follow us &nbsp; &nbsp;
                <Link
                  to="https://www.linkedin.com/company/sakshath-technologies/"
                  target={"_blank"}
                >
                  &nbsp;
                  <TfiLinkedin />
                </Link>{" "}
                &nbsp;
                <Link
                  to="https://www.instagram.com/sakshath_technologies/"
                  target={"_blank"}
                  rel="noopener"
                >
                  <RiInstagramFill />
                </Link>{" "}
                &nbsp;
                <Link
                  to="https://www.youtube.com/watch?v=UHjZFuO8AYY"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>{" "}
                &nbsp;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header starts */}
      <nav className="navbar navbar-expand-md bsb-navbar bsb-navbar-hover bsb-navbar-caret sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={LOGO} alt="" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body header_menu">
              <ul className="navbar-nav justify-content-center flex-grow-1">
                {/* home */}
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>

                {/* about */}
                <li className="nav-item dropdown">
                  <Link
                    to="/about"
                    className="nav-link dropdown-toggle"
                    id="teamDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <Link to="/" className="dropdown-item">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        Company Jounery
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        Our Achievements
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* services */}

                <li className="nav-item dropdown">
                  <NavLink
                    to="/service"
                    className="nav-link dropdown-toggle"
                    id="accountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Digital Service
                  </NavLink>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="accountDropdown"
                  >
                    <li>
                      <NavLink to="/web-developement" className="dropdown-item">
                        Application Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/web-developement" className="dropdown-item">
                        web-developement
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/web-developement" className="dropdown-item">
                        Analytics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/web-developement" className="dropdown-item">
                        Automation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/ERP" className="dropdown-item">
                        ERP
                      </NavLink>
                    </li>
                    {/* <li>
                <hr className="dropdown-divider" />
              </li> */}
                    <li>
                      <NavLink to="/automation" className="dropdown-item">
                        Automation
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link " aria-current="page">
                    Banking Solution
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Careers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="d-flex header_right">
                <div className="dropdown">
                  <span className="header_translator">
                    <HiOutlineGlobeAlt /> English
                  </span>
                  <Link className="cta_button">Get Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default Header;
