import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsEnvelope, BsTelephoneInbound } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { INSTAGRAM_ICON, LINKEDIN_ICON, LOGO, YOUTUBE_ICON } from "./Constant";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";

const Header = () => {
  const [scrollClass, setScrollClass] = useState("");
  const toggleClass = "sticky-top";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        setScrollClass(toggleClass);
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Header */}
      <section className="top_header ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link className="top_header_location">
                <MdOutlineLocationOn /> Bengaluru &nbsp;&nbsp; | &nbsp;&nbsp;
              </Link>
              <Link to="mailto:info@sakshath-technologies.com">
                <BsEnvelope /> &nbsp;info@sakshath-technologies.com &nbsp;
              </Link>
            </div>
            <div className="col-md-6 text-md-end">
                {/* <div className="dropdown"> */}
                  {/* <span className="header_translator">
                    <HiOutlineGlobeAlt /> English
                  </span> */}
                {/* </div> */}

                {/* <span>
                <HiOutlineGlobeAlt /> English &nbsp; | &nbsp;
                </span> */}
              
              <Link to="tel:+918067819998">
                <BsTelephoneInbound /> &nbsp;+91 80 67819878 &nbsp; | &nbsp;
                &nbsp;
              </Link>


              <span className="header_social_icons">
                Follow us &nbsp; &nbsp;
                <Link
                  to="https://www.linkedin.com/company/sakshath-technologies/"
                  target={"_blank"}
                >
                  &nbsp;
                  {/* <TfiLinkedin /> */} <img src={LINKEDIN_ICON} />
                </Link>{" "}
                &nbsp;
                <Link
                  to="https://www.instagram.com/sakshath_technologies/"
                  target={"_blank"}
                  rel="noopener"
                >
                  {/* <RiInstagramFill /> */} <img src={INSTAGRAM_ICON} />
                </Link>{" "}
                &nbsp;
                <Link
                  to="https://www.youtube.com/watch?v=UHjZFuO8AYY"
                  target="_blank"
                >
                  {/* <FaYoutube /> */} <img src={YOUTUBE_ICON} />
                </Link>{" "}
                &nbsp;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header starts */}
      <nav
        className={`navbar navbar-expand-md bsb-navbar bsb-navbar-hover bsb-navbar-caret ${scrollClass}`}
      >
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
                {/* about */}
                <li className="nav-item dropdown">
                  <NavLink
                    to="/about"
                    className="nav-link dropdown-toggle"
                    id="teamDropdown"
                    role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </NavLink>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <NavLink to="/our-team" className="dropdown-item">
                        Our Team
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/company-journey" className="dropdown-item">
                        Company Jounery
                      </NavLink>
                    </li> */}

                    <li>
                      <NavLink to="/our-achievements" className="dropdown-item">
                        Our Achievements
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us" className="dropdown-item">
                        Contact us
                      </NavLink>
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
                    aria-expanded="false"
                  >
                    Services
                  </NavLink>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="accountDropdown"
                  >
                    <li>
                      <NavLink to="/erp" className="dropdown-item">
                        ERP
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/application-development"
                        className="dropdown-item"
                      >
                        Application Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/analytics" className="dropdown-item">
                        Analytics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/automation" className="dropdown-item">
                        Automation
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/managed-services" className="dropdown-item">
                        Managed Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/integration" className="dropdown-item">
                        Integration
                      </NavLink>
                    </li>

                   
                    {/* <li>
                      <NavLink to="/talent-solution" className="dropdown-item">
                       Talent Solution
                      </NavLink>
                    </li> */}
                  </ul>
                </li>

                {/* <li>
                  <NavLink to="/banking-solution" className="nav-link">
                    Banking Solution
                  </NavLink>
                </li> */}
                <li className="nav-item dropdown">
                <NavLink
                     to="javascript:void(0)"
                    className="nav-link dropdown-toggle"
                    id="account1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Solutions
                  </NavLink>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="account1Dropdown"
                  >
                  <li>
                      <NavLink to="/mobility" className="dropdown-item">
                      Enterprise Mobility
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/application-readiness" className="dropdown-item">
                     Application Readiness
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/banking-solution" className="dropdown-item">
                        Banking Solution
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/talent-solution" className="dropdown-item">
                        Talent Solution
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/staffing" className="dropdown-item">
                        Staffing
                      </NavLink>
                    </li>
                    
                  </ul>
                </li>
                <li>
                  <NavLink to="/career" className="nav-link">
                    Careers
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/blogs" className="nav-link">
                    Blogs
                  </NavLink>
                </li>

                {/* <li>
                  <NavLink to="/contact-us" className="nav-link">
                    Contact Us
                  </NavLink>
                </li> */}
              </ul>

              <div className="d-flex align-items-center header_right">
                <div className="dropdown">
                  <span className="header_translator">
                    <HiOutlineGlobeAlt /> English
                  </span>
                  <SlideAnimationButton btnName="Contact us"/>
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
