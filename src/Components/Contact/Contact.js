import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./style.scss";
import Heading from "../Utils/Heading";
import {
  FaUserPen,
  FaPhoneVolume,
  FaLocationDot,
  FaComments,
} from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";

function Contact() {
  const products = [
    { id: 1, name: "web Development" },
    { id: 2, name: "ERP" },
    { id: 3, name: "Dot Net" },
    { id: 4, name: " Application Development" },
    { id: 5, name: "  Rationalization / Migration " },
    { id: 6, name: " Automation" },
    { id: 7, name: "Cloud Native Development " },
    { id: 8, name: "RPA " },
    { id: 9, name: "  DevOps / Testing" },
    { id: 10, name: "Analytics " },
    { id: 11, name: " AI + Data Science" },
    { id: 12, name: " Power BI + Dashboard" },
    { id: 13, name: "  Data Integration" },
    { id: 14, name: " Syspro" },
    { id: 15, name: "Epicor " },
  ];
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <section className="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12" >
            <div className="form_container">
              <Heading heading="Contact Us"/>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FaUserPen />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                       Full Name
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FaPhoneVolume />
                      </InputGroup.Text>
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Phone Number
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Email Address
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  
               
                </Row>
                  <Row>

                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="description"
                    
                  >
                    <Form.Label>Comments</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FaComments/>
                      </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Enter your description here  (optional)"
                    />
                         </InputGroup>
                  </Form.Group>
                </Row>

                <Button type="submit" className="mt-4">Submit form</Button>
              </Form>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
