import React, { useState, useEffect } from "react";
import { Form,  Modal, Button  } from "react-bootstrap";
import { NEWSLETTER_POPUP } from "./Constants";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import "./styles.scss";

const OnLoadPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleClose = () => setShowModal(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };

  useEffect(() => {
    // Open the modal after 20 seconds
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 20); // 20 seconds in milliseconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Body className="newsletter_sec">
        <div onClick={handleClose} className="newsletter_close_btn">
          <IoCloseCircle />
        </div>
        <div className="text-center mt-md-4">
          <img className="img-fluid" src={NEWSLETTER_POPUP} />
        </div>

        <div>
            <h4 className="mb-4">Subscribe to our newsletter</h4>
            <Form onSubmit={handleSubmit} className="subscription_form newsletter_form">
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
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                  </Form.Group>
                  <div className="newsletter_submit mt-2">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  </div>
                </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OnLoadPopup;
