import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { Form, Modal, Button } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./style.scss";
// import { NGO } from "./Constant";

function ServiceStickyPopup() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fName: "",
    lName: "",
    phoneNo: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="stickyScrollpopup">
        <div className="fixedpopup">
          <Button variant="primary" onClick={handleShow}>
            {/* <img src={NGO} alt="" /> */}
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
                    // value={phoneNo}
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
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default ServiceStickyPopup;
