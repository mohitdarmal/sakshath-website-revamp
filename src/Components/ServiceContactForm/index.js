import React, { useState } from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import "./styles.scss";

const ServiceContactForm = () => {
  // Initialize form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    services: '',
    comments: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the formData to your backend or perform any other action
    console.log(formData, "Formadata"); // For demonstration, logging the formData to the console
  };

  return (
    <Container className='applynow_contact_form'>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FloatingLabel controlId="firstName" label="First Name" className="mb-3">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name"
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="email" label="Email address" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
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
                value={formData.phoneNumber}
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
                value={formData.services}
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
        <Row>
          <Col md={12}>
            <FloatingLabel controlId="comments" label="Comments">
              <Form.Control
                as="textarea"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Leave a comment here"
                style={{ height: '150px' }}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default ServiceContactForm;