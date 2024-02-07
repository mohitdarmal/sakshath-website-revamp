import React, {useState} from "react";
import { Modal, Button, Form, InputGroup  } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import "./styles.scss";

const BrouchurePopup = (props) => {
  console.log(props, "props");

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="brouchure_popup"
      >
        <Modal.Header closeButton>
          <div className="brouchure_icon">
            <FaFilePdf />
          </div>
        </Modal.Header>
        <Modal.Body>
          <h4>Subscribe to Download</h4>

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
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BrouchurePopup;
