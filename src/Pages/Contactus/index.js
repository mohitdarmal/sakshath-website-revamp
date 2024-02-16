import { useState } from "react";
import { Tab, Tabs, Col, Nav, Row } from "react-bootstrap";
import "./style.scss";
import { GrLocation } from "react-icons/gr";
//import SlideAnimationButton from '../../Components/Utils/SlideAnimationButton';
import { Link } from "react-router-dom";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";

import {
  HEADQUATERS_ICON,
  REGISTERED_ICON,
  YOUTUBE_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON
} from "./Constant";
import Contact from "../../Components/Contact/Contact";
import BreadCumb from "../../Components/Breadcumb";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import { FaPaperPlane } from "react-icons/fa";
import Heading from "../../Components/Utils/Heading";

const Contactus = () => {
  const [key, setKey] = useState("home");
  return (
    <>
      <BreadCumb imgUrl={ABOUT_BANNER} title="Contact Us" />

      <section className="contact_us_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-1"> </div>
            <div className="col-md-5 position-relative">
              <div className="head_location">
                <img src={HEADQUATERS_ICON} />
                <h2>HeadQuater Office</h2>
                <ul>
                  <li className="address">
                    Address: 8, KV Jairam Rd, MCHS Layout, Jakkuru Layout,
                    Jakkur, Bengaluru, Karnataka 560064
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
                <h2>Registered Office</h2>
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
        <Link to="https://www.instagram.com/sakshath_technologies/" target="_blank">
          <img src={INSTAGRAM_ICON} />
        </Link>
        <Link to="https://www.linkedin.com/company/sakshath-technologies/" target="_blank">
          <img src={LINKEDIN_ICON} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=UHjZFuO8AYY" target="_blank">
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
              <Heading heading="Our Location" uppercase="text-uppercase" />
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
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.847152799348!2d77.6212673!3d13.045399399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176fbb02b8e9%3A0xefe5b09d3734be86!2sThe%20Executive%20Centre%20-%20Mfar%20Greenheart%2C%20Manyata%20Tech%20Park%20%7C%20Coworking%20Space%2C%20Serviced%20%26%20Virtual%20Offices%20and%20Workspace!5e0!3m2!1sen!2sin!4v1708024520218!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                          </Tab.Pane>
                          <Tab.Pane eventKey="mumbai">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.847152799348!2d77.6212673!3d13.045399399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176fbb02b8e9%3A0xefe5b09d3734be86!2sThe%20Executive%20Centre%20-%20Mfar%20Greenheart%2C%20Manyata%20Tech%20Park%20%7C%20Coworking%20Space%2C%20Serviced%20%26%20Virtual%20Offices%20and%20Workspace!5e0!3m2!1sen!2sin!4v1708024520218!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                          </Tab.Pane>
                          <Tab.Pane eventKey="gurgram">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.847152799348!2d77.6212673!3d13.045399399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176fbb02b8e9%3A0xefe5b09d3734be86!2sThe%20Executive%20Centre%20-%20Mfar%20Greenheart%2C%20Manyata%20Tech%20Park%20%7C%20Coworking%20Space%2C%20Serviced%20%26%20Virtual%20Offices%20and%20Workspace!5e0!3m2!1sen!2sin!4v1708024520218!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Tab>
                {/* Asia End */}

                <Tab eventKey="us" title="US">
                  US
                </Tab>
                <Tab eventKey="anz" title="ANZ">
                  ANZ
                </Tab>
                <Tab eventKey="aftrica" title="Africa">
                  Africa
                </Tab>
                <Tab eventKey="middleeast" title="Middle East">
                  Middle East
                </Tab>
                <Tab eventKey="euorpe" title="Europe">
                  Europe
                </Tab>
              </Tabs>
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
