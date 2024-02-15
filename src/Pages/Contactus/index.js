import { useState } from 'react';
import {Tab, Tabs, Col, Nav, Row} from 'react-bootstrap';
import "./style.scss"
import { GrLocation } from "react-icons/gr";
//import SlideAnimationButton from '../../Components/Utils/SlideAnimationButton';
import {Link} from "react-router-dom";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";

import { INSTAGRAM_ICON, LINKEDIN_ICON, YOUTUBE_ICON, HEADQUATERS_ICON, REGISTERED_ICON } from "./Constant";
import Contact from "../../Components/Contact/Contact";
import BreadCumb from "../../Components/Breadcumb";
import { ABOUT_BANNER } from '../../Components/Breadcumb/Constant';
import { FaPaperPlane } from "react-icons/fa";
import Heading from '../../Components/Utils/Heading';
 
const Contactus = () => {
  const [key, setKey] = useState('home');
  return (
    <>
    <BreadCumb
        imgUrl={ABOUT_BANNER}
        title="Contact Us"
      />

<section className='contact_us_sec'>
    <div className='container'>
      <div className='row'>
      <div className='col-md-1'> </div>
        <div className='col-md-5 position-relative'>
           <div className='head_location'>
              <img src={HEADQUATERS_ICON} />
              <h2>HeadQuater Office</h2>
              <ul>
                <li className='address'>Address: 8, KV Jairam Rd, MCHS Layout, Jakkuru Layout, Jakkur, Bengaluru, Karnataka 560064</li>
                <li className='email'><Link to="mailto:info@sakshath-technologies.com">info@sakshath-technologies.com</Link></li>
                <li className='phn'><Link to="tel:+918067819878">+91 8067819878</Link></li>
              </ul>
              <Link className='get_direction' to="" target="_blank"><FaPaperPlane /> Get Direction</Link>
           </div>
        </div>

        <div className='col-md-5 position-relative'>
        <div className='head_location'>
              <img src={REGISTERED_ICON} />
              <h2>Registered Office</h2>
              <ul>
                <li className='address'>Address: 8, KV Jairam Rd, MCHS Layout, Jakkuru Layout, Jakkur, Bengaluru, Karnataka 560064</li>
                <li className='email'><Link to="mailto:info@sakshath-technologies.com">info@sakshath-technologies.com</Link></li>
                <li className='phn'><Link to="tel:+918067819878">+91 8067819878</Link></li>
              </ul>
              <Link className='get_direction' to="" target="_blank"><FaPaperPlane /> Get Direction</Link>
           </div>
        </div>
        <div className='col-md-1'> </div>
      </div>

<div className='row justify-content-center contact_social_icon'>
<img src={INSTAGRAM_ICON} /> <img src={LINKEDIN_ICON} />
</div>

    </div>
</section>



{/* <section> 
  <div className='container'>
    <div className='row'>

    </div>
  </div>
</section> */}
<section className='our_location_sec'>
  <div className="container">

<div className='row'>
  <div className='text-center'>
  <Heading heading="Our Location" uppercase="text-uppercase" />
  </div>
</div>

    <div className="row our_location_tab">
      <div className='col-md-12'>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
      {/* Asia Start */}
      <Tab eventKey="home" title="Asia">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
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
  )
}

export default Contactus;