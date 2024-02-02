import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './style.scss'

const JobOpeningPopup = (props) => {
   console.log(props, "props")

  const handleSubmit=(e)=>{
    e.preventDefault();

  }
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
          <div className="col-md-4 pb-4">
          <div className="box">

       
          <h6>Year of Experience</h6>
          <p>{props.experince}</p>   </div>
          </div>
          <div className="col-md-4 pb-4">
          <div className="box">
        <h6>Number Of Position</h6>
            {props.position}
          </div></div>
          <div className="col-md-4 pb-4">
          <div className="box">
          <h6>Location</h6>
            {props.location}
          </div>
          </div>
    
        </div>
        
          <h4>Job Description</h4>

          {props.description ? props.description.map((para) => {
            return (
              <ul key={para.id}>
                <li>{para.content}</li>
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
          </Form> */}

          <div className="apply_now text-center mt-4 mb-4">
          <h4>Apply Now</h4>
          </div>
          
          <Form onSubmit={props.handleSubmit}>
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
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
      
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default JobOpeningPopup;
