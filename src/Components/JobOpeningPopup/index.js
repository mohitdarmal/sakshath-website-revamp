import React from "react";
import { Modal, Button } from "react-bootstrap";

// import { Modal, Button, Form, FormGroup, Label, Input } from "react-bootstrap";

const JobOpeningPopup = (props) => {
    // console.log(props, "props")
    return(
        <>
  <Modal
      {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <h4>Year of Experience</h4>
    <p>
        {props.experince}
    </p>
      <h4>Job Description</h4>

      <p>
        {props.description}
      </p>
      {/* <Form>
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input type="text" id="name" placeholder="Enter name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input type="email" id="email" placeholder="Enter email" />
            </FormGroup>
            </Form> */}
  
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
      {/* <Button type="submit">Submit</Button> */}
    </Modal.Footer>
  </Modal>
  </>)
};

export default JobOpeningPopup;
