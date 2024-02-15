import React from "react";
import { Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import Heading from "../Utils/Heading";


const ServiceStickMenu=(props)=>
{
    return(
        <>
{/* <div className="sticky_menu sticky-top">
<div className="container-fluid"> */}
{/* <Navbar collapseOnSelect expand="lg" className="service_sticky_menu"  sticky="top" > */}
{/* <Navbar collapseOnSelect expand="lg" className="service_sticky_menu  sticky-top " >
<Container fluid className="service_sticky_menu_container">
  <Navbar.Brand href="#home" className="integration_heading">Integration </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <NavLink to={`#${props.intergrationCore}`}>Integration COE</NavLink>
      <NavLink to="#pricing">Integration Consulting </NavLink>
      <NavLink to="#features">Migration Services</NavLink>
      <NavLink to="#pricing">Managed Services </NavLink>
       
    </Nav>
 
  </Navbar.Collapse>
</Container>
</Navbar>
</div>
</div> */}



{/* Main Header starts */}
<section className="sticky_menu sticky-top">
<div className="">
<nav
        className={`navbar navbar-expand-md bsb-navbar bsb-navbar-hover bsb-navbar-caret stick_menu_bar`}
      >
        <div className="container-fluid" id="service_stickmenu_list">
          <h5 className="integration_heading"> Integration</h5>
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
              <ul className="navbar-nav justify-content-center flex-grow-1 service_stickmenu_list">
           
              
                
                <li>
                  <NavLink to="#" className="nav-link ">
                  Integration COE
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="#" className="nav-link ">
                  Integration Consulting
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="nav-link ">
                  Migration Services
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#" className="nav-link ">
                  Managed Services
                  </NavLink>
                </li>
                


              </ul>

               
            </div>
          </div>
        </div>
      </nav>
      </div>
      </section>
</>
    )
};
export default ServiceStickMenu;
