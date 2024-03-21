import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
// import { NEWSLETTER_POPUP } from "./Constant";
import { NEWSLETTER_POPUP } from "./Constant";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser, FaPhone } from "react-icons/fa";

import "./style.scss";

const PopUp = (props) => {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    fName: "",
    lName: "",
    phoneNo: "",
  });
  //   const [fName, setFname] = useState("");
  //   const [lName, setLname] = useState("");
  //   const [phoneNo, setPhoneNo] = useState("");
  //   const [companyName,companyName]=useState("");

  const handleClose = () => setShowModal(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Email submitted:", email);
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
    <Modal show={showModal} onHide={handleClose} centered size="lg">
      <Modal.Body className="newsletter_sec">
        <div onClick={handleClose} className="newsletter_close_btn">
          <IoCloseCircle />
        </div>
        <div className="text-center mt-md-4">
          {/* <img className="img-fluid" src={NEWSLETTER_POPUP} /> */}
        </div>

        <div>
          <h3 className="mb-4">{props.popUpHeading}</h3>
          <h6>{props.popUpPara}</h6>

          <div className="row">
            <div className="col-md-8">
              <Form
                onSubmit={handleSubmit}
                className="subscription_form newsletter_form"
              >
                <div
                  className="form1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Form.Group
                    controlId="formEmail"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FaRegUser />
                        </span>
                      </div>

                      <Form.Control
                        type="text"
                        placeholder=" Full Name"
                        //   value={fName}
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
                        
                        placeholder=" Mobile Number"
                        className="form-control-outline"
                        onChange={(e) => setFormData(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </div>
                <div
                  className="form1"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Form.Group controlId="formEmail">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <MdOutlineEmail />
                        </span>
                      </div>

                      <Form.Control
                        type="email"
                        placeholder=" Email Address"
                        //   value={email}
                        required
                        onChange={(e) => setFormData(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <MdOutlineEmail />
                        </span>
                      </div>

                      <Form.Control
                        type="text"
                        placeholder=" Comments"
                        //   value={email}

                        onChange={(e) => setFormData(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </div>

                <div className="newsletter_submit mt-2">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
            <div className="col-md-4">
              <img className="img-fluid" src={NEWSLETTER_POPUP} />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;
