import React from "react";
// import { Modal, Button, Form } from "react-bootstrap";
import './style.scss';
import { BsFillPeopleFill } from "react-icons/bs";

import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
//import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import "./style.scss";
import { useState } from "react";
import { Container, Row, Col, Form, FloatingLabel, Button, Modal } from 'react-bootstrap';





const JobOpeningPopup = (props) => {
   console.log(props, "props")

 

  const [jobformData, setJobformData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    services: '',
    //comments: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobformData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the formData to your backend or perform any other action
    console.log(jobformData, "Formadata"); // For demonstration, logging the formData to the console
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

        

        
        
          
        <div className="row">
          <div className="col-md-3 pb-4">
          <div className="box">

       
          <h6><div><IoLocationOutline /></div>
          Year of Experience
          </h6>
          <p>{props.experince}</p>   </div>
          </div>
          <div className="col-md-3 pb-4">
          <div className="box">
        <h6><div><IoPersonOutline /></div>
        Number Of Position</h6>
           <p>{props.position}</p>
          </div></div>
          <div className="col-md-3 pb-4">
          <div className="box">
          <h6><div><IoLocationOutline /></div>
          Location</h6>
            <p>{props.location}</p>
          </div>
          </div>
          <div className="col-md-3 pb-4">
          <div className="box">
          <h6><div><IoLocationOutline /></div>
          work</h6>
          <p>{props.location}</p> 
          </div>
          </div>
    
        </div>
        
          <h4 className="job_description_heading">Job Description</h4>

          {props.description ? props.description.map((para) => {
            return (
              <ul key={para.id}>
                <li className="job_description_checkmark">{para.content}</li>
              </ul>
            )
          }) : ""} 
           {/* <Form onSubmit={props.handleSubmit}> 
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>  */}

          <div className="apply_now text-center mt-4 mb-4">
          <h4>Apply Now</h4>
          </div>
          

           <Container className='careers_contact_form'>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FloatingLabel controlId="Name" label="Name" className="mb-3">
              <Form.Control
                type="text"
                name="name"
                value={jobformData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="email" label="Email address" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={jobformData.email}
                onChange={handleChange}
                placeholder="Email ID"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FloatingLabel controlId="phoneNumber" label="Phone Number" className="mb-3">
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={jobformData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="services" label="Services">
              <Form.Select
                aria-label="Floating label select example"
                name="services"
                value={jobformData.services}
                onChange={handleChange}
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12}>
            <FloatingLabel controlId="comments" label="Comments">
              <Form.Control
                as="textarea"
                name="comments"
                value={applyformData.comments}
                onChange={handleChange}
                placeholder="Leave a comment here"
                style={{ height: '150px' }}
              />
            </FloatingLabel>
          </Col>
        </Row> */}
        <Button type="submit">Submit form</Button>
      </Form>
    </Container> 
           {/* <Form onSubmit={props.handleSubmit}>
          <div className="row">

          
            <div className="col-md-6">
            
            <Form.Control variant="filled" type="text" name="name" placeholder="Full Name" required  /> <br />
            <Form.Control type="tel" name="name" placeholder="Contact Number" required /> <br />
         
            </div>
            <div className="col-md-6">
            <Form.Control type="email" name="name" placeholder="Email Id" required /> <br />
            <Form.Control type="file" name="name" placeholder="upload CV/Resume" required /> <br />
            </div>
            <div className="submit_form w-20 d-flex justify-content-center">
            <button type='submit'>Submit</button>
            </div>
          
            </div>
          </Form> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
      
        </Modal.Footer> */}
      </Modal>
    </>
  );
};


export default JobOpeningPopup;
