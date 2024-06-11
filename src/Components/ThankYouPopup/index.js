import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { STAR } from "./Constant";
import './style.scss';

const ThankYouPopup = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="contact_success_popup">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          className="contact_submit_popup"
        >
          <Modal.Body>
            <div onClick={handleClose} className="newsletter_close_btn">
              <IoCloseCircle />
            </div>
            <div>
              <div className="star_img">
                <img
                  src={STAR}
                  alt=""
                  style={{
                    width: "100px",
                    marginLeft: "175px",
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                />
              </div>

              <h3>Thank You for contacting us</h3>
              <p>
                Your details as been recived. <br /> Our team will you contact
                soon.
              </p>
            </div>
            <div className="button_popup">
              <Link to="/">
                <button>Back</button>
              </Link>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ThankYouPopup;
