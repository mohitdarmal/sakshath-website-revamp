import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
// import { NEWSLETTER_POPUP } from "./Constant";
import { NEWSLETTER_POPUP } from "./Constant";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser, FaPhone } from "react-icons/fa";

import "./style.scss";
import axios from "axios";

const PopUp = (props) => {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    emailId: "",
    fullName: "",
    comments: " ",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = axios
        .post("http://172.20.12.189:8086/confApp/api/v1/popupcontacts", {
          fullName: formData.fullName,
          emailId: formData.emailId,
          contactNumber: formData.contactNumber,
          comments: formData.comments,
        })
        .then((data) => {
          // setShow(true);
          console.log(data, "show data");
        });
    } catch (err) {
      if (err.response == undefined) {
        // toast.error("Connection Timeout");
        console.log("connection timeout");
      } else if (err.response.data.status == 404) {
        // toast.error("Url Not found");
      } else {
        // toast.error("Error Found");
        console.log("err");
      }
      console.log(err.response);
    } finally {
      setFormData({
        fullName: "",
        emailId: "",
        contactNumber: "",
        comments: "",
      });
    }
  };

  const handleClose = () => setShowModal(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  // };

  useEffect(() => {
    // Open the modal after 20 seconds
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 20); // 20 seconds in milliseconds

    return () => clearTimeout(timeoutId);
  }, []);

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
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
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
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
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
                        placeholder="Email Address"
                  
                        // required
                        name="   emailId"
                        value={formData.emailId}
                        onChange={handleChange}
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
                        placeholder="Comments"
                        //   value={email}

                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
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
