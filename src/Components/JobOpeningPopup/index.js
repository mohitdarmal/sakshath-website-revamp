import React from 'react'
import {Modal,Button} from 'react-bootstrap';
const JobOpeningPopup = (props) => {
    <Modal
     {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Job Opening
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae enim corrupti ipsa tempore ducimus quas nemo expedita possimus obcaecati, asperiores unde aspernatur quis, voluptas repellendus aut dolorem, iusto animi quos?
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button>Submit</Button>
      </Modal.Footer>
    </Modal>
}

export default JobOpeningPopup;