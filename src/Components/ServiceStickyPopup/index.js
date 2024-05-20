import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { Form, Modal, Button, } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailUnread, MdOutlineEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "./style.scss";
import { PiCertificateLight } from "react-icons/pi";
 import { Modal, Button, Form, InputGroup  } from "react-bootstrap";
// import { NGO } from "./Constant";

function ServiceStickyPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    fName: "",
    lName: "",
    phoneNo: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <>
      <div className="stickyScrollpopup">
        <div className="fixedpopup">
          <Button variant="primary" onClick={handleShow}>
         
            Popup
          </Button>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
        <Modal.Header closeButton>
          <div className="top_icon">
            <PiCertificateLight />
          </div>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center" style={{fontFamily:"rajdhani",fontWeight:'bold'}}>Contact Us</h4>

          <Form onSubmit={handleSubmit} className="stickyPopupService">
          <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaUserCircle />
              </InputGroup.Text>
              <Form.Control
                type="type"
                placeholder=" Full Name"
                // value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3"> 
              <InputGroup.Text>
                <MdMarkEmailUnread />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder=" Email Address"
                // value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <div className="submit-button text-center w-100">
            <Button variant="primary" type="submit">
       Submit
            </Button>
            </div>
           
          </Form>
        </Modal.Body>
          {/* <Modal.Header closeButton>
            <Modal.Title>Get Touch soon with us.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <Form.Group controlId="formEmail">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <MdOutlineEmail />
                    </span>
                  </div>

                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setFormData(e.target.value)}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FaPhone />
                    </span>
                  </div>

                  <Form.Control
                    type="tel"
                    placeholder="Enter Mobile Number"
                    
                    required
                    onChange={(e) => setFormData(e.target.value)}
                  />
                </div>
              </Form.Group>
              <div className="newsletter_submit mt-2">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Modal.Body> */}
        </Modal>
      </div>
    </>
  );
}

export default ServiceStickyPopup;
