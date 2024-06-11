

import React, {useState} from "react";
import { Modal, Button, Form, InputGroup  } from "react-bootstrap";
// import { PiCertificateLight } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import "./style.scss";
import { IoCloseCircle } from "react-icons/io5";

const SeeCertificatePopup = (props) => {
//   console.log(props, "props");

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // const show = () => {
  //   setShowModal(true);
  // };
  // const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        {...props}
        size="md"
        // onHide={handleCloseModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="brouchure_popup"
      >
        <Modal.Header closeButton>
          <div className="brouchure_icon">
            <PiCertificateLight />
          </div>
        </Modal.Header>
        <Modal.Body>

        <div onClick={handleCloseModal} className="newsletter_close_btns">
              <IoCloseCircle />
            </div>
          <h4 style={{marginTop:'10px'}}>Subscribe to View Certificate</h4>

          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <MdMarkEmailUnread />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <Button variant="primary" type="submit">
          VIEW
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SeeCertificatePopup;



