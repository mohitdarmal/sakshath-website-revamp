// import React, { useState, useEffect } from "react";
// import { Form, Modal, Button } from "react-bootstrap";
// import { IoCloseCircle } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaRegUser, FaPhone } from "react-icons/fa";

// import "./style.scss";

// const SeeCertificatePopup = (props) => {
//     console.log("see here", props)
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     fName: "",
//     lName: "",
//     phoneNo: "",
//   });
 

//   const handleClose = () => setShowModal(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//   };



//   return (
//     <Modal  centered  {...props}>
//       <Modal.Header closeButton>
//         <div className="newsletter_close_btn">  </div>
//       </Modal.Header>
//       <Modal.Body className="newsletter_sec">
//         <div className="text-center mt-md-4">
          
//         </div>

//         <div>
//           <h4 className="mb-4">{props.popUpHeading}</h4>
//           <Form
//             onSubmit={handleSubmit}
//             className="subscription_form newsletter_form"
//           >
       

//             <div className="form1" style={{display:'flex', justifyContent:'space-between', gap:'20px', marginBottom:'20px'}}>
//             <Form.Group controlId="formEmail">
//               <div className="input-group">
//                 <div className="input-group-prepend">
//                   <span className="input-group-text">
//                     <MdOutlineEmail />
//                   </span>
//                 </div>

//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   //   value={email}
//                   required
//                   onChange={(e) => setFormData(e.target.value)}
//                 />
//               </div>
//             </Form.Group>

//             <Form.Group controlId="formEmail">
//               <div className="input-group">
//                 <div className="input-group-prepend">
//                   <span className="input-group-text">
//                     <FaPhone />
//                   </span>
//                 </div>

//                 <Form.Control
//                   type="tel"
//                   placeholder="Enter Mobile Number"
               
//                   required
//                   onChange={(e) => setFormData(e.target.value)}
//                 />
//               </div>
//             </Form.Group>
//             </div>

//             <div className="newsletter_submit mt-2">
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </div>
//           </Form>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default SeeCertificatePopup;

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

  console.log(props.onHide, "handleCloseModal")
 
  
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="brouchure_popup"
      >
        <Modal.Header>
          <div className="brouchure_icon">
            <PiCertificateLight />
          </div>
        </Modal.Header>
        <Modal.Body>
        <div onClick={props.onHide} className="newsletter_close_btns">
              <IoCloseCircle />
            </div>
          <h4>Subscribe to View Certificate</h4>

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



