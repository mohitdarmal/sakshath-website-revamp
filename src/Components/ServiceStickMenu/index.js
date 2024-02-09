import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styles.scss";
import { NavLink } from "react-router-dom";

const ServiceStickMenu=()=>
{
    return(
        <>
        <div className="sticky_menu">
<div className="container">
<Navbar collapseOnSelect expand="lg" className="service_sticky_menu"  sticky="top" >
<Container fluid className="service_sticky_menu_container">
  <Navbar.Brand href="#home">Integration </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <NavLink href="#features">Integration COE</NavLink>
      <NavLink href="#pricing">Integration Consulting </NavLink>
      <NavLink href="#features">Migration Services</NavLink>
      <NavLink href="#pricing">Managed Services </NavLink>
       
    </Nav>
 
  </Navbar.Collapse>
</Container>
</Navbar>
</div>
</div>
</>
    )
};
export default ServiceStickMenu;
