import { useEffect, useState } from "react";
import {
  Tab,
  Tabs,
  Col,
  Nav,
  Row,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import "./style.scss";
import { GrLocation } from "react-icons/gr";
//import SlideAnimationButton from '../../Components/Utils/SlideAnimationButton';
import { Link } from "react-router-dom";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

import {
  HEADQUATERS_ICON,
  REGISTERED_ICON,
  YOUTUBE_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON,
} from "./Constant";
import Contact from "../../Components/Contact/Contact";
import BreadCumb from "../../Components/Breadcumb";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import { FaPaperPlane } from "react-icons/fa";
import Heading from "../../Components/Utils/Heading";
import { Helmet } from "react-helmet";
import axios from "axios";

const Contactus = () => {
  const [key, setKey] = useState("home");
  // const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    contactNumber: "",
    description: "",
    comments: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // (e) => {
    //   setFormData({
    //     ...formData,
    //     fullName: e.target.value,
    //   });
    // };
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      emailId: "",
      contactNumber: "",
      description: "",
      comments: "",
    });
    // setIsLoading(true);
    // console.log(e.target.value, "amar");
    try {
      const res = await axios
        .post("http://172.20.12.189:8086/confApp/api/v1/contacts", {
          body: {
            fullName: formData.fullName,
            emailId: formData.emailId,
            description: formData.description,
            contactNumber: formData.contactNumber,
            comments: formData.comments,
          },
        })
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.log(err, "err");
    }
  };

  //   const handleSubmit = async (e)  => {
  //     e.preventDefault();
  // const res = await axios.post("http://172.20.12.189:8086/confApp/api/v1/contacts", {
  // body: {
  // fullName: formData.fullName,
  // emailId: formData.emailId,
  // description: formData.description,
  // contactNumber: formData.contactNumber,
  // comments: formData.comments,
  // },
  // })
  // .then((data) => {
  // console.log(data)
  // })
  // .catch((error) => {
  // console.error("Error  contact", error);
  // });

  // }
  // };
  console.log(formData);
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <BreadCumb imgUrl={ABOUT_BANNER} title="Contact Us" />

      <section className="contact_us_sec">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 offset-md-2">
              <Fade direction="up" triggerOnce>
                <Heading heading="Get In Touch With Us" />
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="text-center mb-5">
                  We are a firm who always support our customers through chat,
                  person and also through mails on all our customers feedback,
                  reveiws and our product enquiries. Kindly fill in the form and
                  wait for the message to be displayed sent before you leave the
                  form.
                </p>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1"> </div>
            <div className="col-md-5 position-relative">
              <div className="head_location">
                <img src={HEADQUATERS_ICON} />
                <h2>HeadQuater Office</h2>
                <ul>
                  <li className="address">
                    8, KV Jairam Rd, MCHS Layout, Jakkuru Layout, Jakkur,
                    Bengaluru, Karnataka 560064
                  </li>
                  <li className="email">
                    <Link to="mailto:info@sakshath-technologies.com">
                      info@sakshath-technologies.com
                    </Link>
                  </li>
                  <li className="phn">
                    <Link to="tel:+918067819878">+91 8067819878</Link>
                  </li>
                </ul>
                <Link
                  className="get_direction"
                  to="https://maps.app.goo.gl/UqW4zSNRHr8YN18D7"
                  target="_blank"
                >
                  <FaPaperPlane /> Get Direction
                </Link>
              </div>
            </div>

            <div className="col-md-5 position-relative">
              <div className="head_location">
                <img src={REGISTERED_ICON} />
                <h2>Corporate Office</h2>
                <ul>
                  <li className="address">
                    Level 7, Mfar Greenheart, Manyata Tech Park, Phase IV,
                    Hebbal ORR, Bengaluru – 560045.
                  </li>
                  <li className="email">
                    <Link to="mailto:info@sakshath-technologies.com">
                      info@sakshath-technologies.com
                    </Link>
                  </li>
                  <li className="phn">
                    <Link to="tel:+918067819878">+91 8067819878</Link>
                  </li>
                </ul>
                <Link
                  className="get_direction"
                  to="https://maps.app.goo.gl/MP3dg1KJYNCWxZJv5"
                  target="_blank"
                >
                  <FaPaperPlane /> Get Direction
                </Link>
              </div>
            </div>
            <div className="col-md-1"> </div>
          </div>

          <div className="contact_page_social_icon">
            <Link
              to="https://www.instagram.com/sakshath_technologies/"
              target="_blank"
            >
              <img src={INSTAGRAM_ICON} />
            </Link>
            <Link
              to="https://www.linkedin.com/company/sakshath-technologies/"
              target="_blank"
            >
              <img src={LINKEDIN_ICON} />
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=UHjZFuO8AYY"
              target="_blank"
            >
              <img src={YOUTUBE_ICON} />
            </Link>
          </div>
        </div>
      </section>

      {/* <section> 
  <div className='container'>
    <div className='row'>

    </div>
  </div>
</section> */}
      <section className="our_location_sec">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <Heading heading="Our Offices" uppercase="" />
            </div>
          </div>

          <div className="row our_location_tab">
            <div className="col-md-12">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                {/* Asia Start */}
                <Tab eventKey="home" title="Asia">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="bangalore"
                  >
                    <Row className="align-items-center map_sec">
                      <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="bangalore">Bangalore</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="mumbai">Mumbai</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="gurgram">Gurugram</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={10}>
                        <Tab.Content>
                          <Tab.Pane eventKey="bangalore">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.847152799348!2d77.6212673!3d13.045399399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176fbb02b8e9%3A0xefe5b09d3734be86!2sThe%20Executive%20Centre%20-%20Mfar%20Greenheart%2C%20Manyata%20Tech%20Park%20%7C%20Coworking%20Space%2C%20Serviced%20%26%20Virtual%20Offices%20and%20Workspace!5e0!3m2!1sen!2sin!4v1708024520218!5m2!1sen!2sin"
                              width="100%"
                              height="450"
                              loading="lazy"
                            ></iframe>
                          </Tab.Pane>
                          <Tab.Pane eventKey="mumbai">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.711118292886!2d72.92414307466623!3d19.12032505058061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c793b8d124c1%3A0xcc53f3fae0553e58!2sWeWork!5e0!3m2!1sen!2sin!4v1708267894341!5m2!1sen!2sin"
                              width="100%"
                              height="450"
                              loading="lazy"
                            ></iframe>
                          </Tab.Pane>
                          <Tab.Pane eventKey="gurgram">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1336757392246!2d77.08386887924894!3d28.505625627285976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d199e15c24a77%3A0xea26e07a91d25663!2sWeWork!5e0!3m2!1sen!2sin!4v1708267816859!5m2!1sen!2sin"
                              width="100%"
                              height="450"
                              loading="lazy"
                            ></iframe>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Tab>
                {/* Asia End */}

                {/* US Start */}
                <Tab eventKey="us" title="US">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="us">
                    <Row className="align-items-center map_sec">
                      <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="us">US</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={10}>
                        <Tab.Content>
                          <Tab.Pane eventKey="us">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.33984257064!2d-74.39321052451666!3d40.423473155229644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cf71aeeca893%3A0xe98bd56ad4bef885!2s1%20Auer%20Ct%2C%20East%20Brunswick%2C%20NJ%2008816%2C%20USA!5e0!3m2!1sen!2sin!4v1708267627433!5m2!1sen!2sin"
                              width="100%"
                              height="450"
                              loading="lazy"
                            ></iframe>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Tab>
                {/* US End */}
                <Tab eventKey="anz" title="ANZ">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="newzland"
                  >
                    <Row className="align-items-center map_sec">
                      <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="newzland">New Zealand</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={10}>
                        <Tab.Content>
                          <Tab.Pane eventKey="newzland">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.6913416436955!2d174.868978175601!3d-36.969427886256376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4c339b9096bb%3A0x2a16e1def76c6fd7!2s43%20Kimpton%20Road%2C%20Papatoetoe%2C%20Auckland%202025%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1708267432762!5m2!1sen!2sin"
                              width="100%"
                              height="450"
                              loading="lazy"
                            ></iframe>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Tab>
                {/* ANZ End */}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_page_form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="text-center mb-4">
                <Heading heading="Work with us" uppercase="" />
              </div>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="fullName"
                      label="Full Name"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="emailId"
                      label="Work Email"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        name="emailId"
                        value={formData.emailId}
                        onChange={handleChange}
                        placeholder="Email ID"
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="contactNumber"
                      label="Contact Number"
                      className="mb-3"
                    >
                      <Form.Control
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="description"
                      label="Select Reason"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      >
                        <option>Select Option</option>
                        <option value="businessInquiry">
                          Business Inquiry
                        </option>
                        <option value="careerEnquiry">Career Enquiry</option>
                        <option value="alliancePartnership">
                          Alliance & Partnership
                        </option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <FloatingLabel controlId="comments" label="Comments">
                      <Form.Control
                        as="textarea"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Leave a comment here"
                        style={{ height: "150px" }}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <div className="text-center mt-4">
                  <Button type="submit">SUBMIT</Button>
                  {/* <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submited'}
      </button> */}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* <section  className='contact_us'>

         <div className="container contact_us_box">
          <div className="row">
          
            <div className="col-md-8 ipad_full_width">
              <div className="address_wrapper">
                <div className="row address_wrapper_box">
                  <div className="col-md-6 address_col">
                    <div className="office_box">
                      <div className="icon">
                      <GrLocation />
                      </div>
                      
                      <div className="address">
                        <h5>Registered Office</h5>
                        <p>Level 7, Mfar Greenheart, Manyata Tech Park, Phase IV, Hebbal ORR, Bengaluru
                           </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 address_col">
                  <div className="office_box">
                      <div className="icon">
                      <GrLocation />
                      </div>
                      <div className="address">
                        <h5>Corporate Office</h5>
                        <p>8, KV Jairam Rd, MCHS Layout, 
                           Jakkur, Bengaluru
                           </p>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-6 address_col">
                  <div className="office_box">
                      <div className="icon">
                      <GrLocation />
                      </div>
                      <div className="address">
                        <h5>Mumbai</h5>
                        <p>WeWork- Sakshath Technologies
247 Park, Lal Bahadur Shastri Rd, Gandhi Nagar 13th Floor, Hindustan C,
Vikhroli West Mumbai, Maharashtra 400079
                           </p>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-6 address_col">
                  <div className="office_box">
                      <div className="icon">
                      <GrLocation />
                      </div>
                      <div className="address">
                        <h5>Gurugram</h5>
                        <p>WeWork- Sakshath Technologies®
Vi-John Tower 393, Phase 3, Udyog Vihar,
Gurugram, Haryana 122016
                           </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 contact_card ipad_full_width">
              <div className="information_wrapper">
                <div className="information_box">
                  <h3>Contact info</h3>
                  <p>We are a firm who always support our customers through chat, person and also through mails on all our customers feedback, reveiws and our product enquiries. Kindly fill in the form and wait for the message to be displayed sent before you leave the form.</p>
                  <ul >
              
                <li >
                 <Link to="mailto:sakshath-technologies@gmail.com" className='contact'>
                   <FaRegEnvelope />
                   &nbsp; sakshath-technologies@gmail.com
                    
                   
                  </Link>
                  
                </li>
               
                
                
                <li >
                  <Link to="tel:+91 80 67819878" className='contact'>
                  
                    <BsTelephoneInbound />
                    &nbsp; +91 8067819878
                  </Link>
                </li>
                </ul>
                </div>
                <div className="information_box_2">
                  <h3>Follow us on</h3>
                  <div className="contactus_social_media">
                  <Link to="">
                 <img src={LINKEDIN_ICON} />
              </Link>

              <Link to="">
                  <img src={INSTAGRAM_ICON} /> 
              </Link>

              <Link to="">
                <img src={YOUTUBE_ICON} /> 
              </Link>
                  </div>
                </div>
              </div>
            </div>
           
          
          </div>
          
         </div>



         

        
            
        </section>


        <section className='contact_us_map_form_section'>
        <div className="container mt-4">
          <div className="row">
    
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1QtXoNJa4bNr3llNKRLddH_rzCUNktWQ&ehbc=000F&noprof=1"
                width="100%"
                height="545"
              ></iframe>

            </div>

            <div className="col-md-6">
            
              <Contact />
              
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Contactus;
