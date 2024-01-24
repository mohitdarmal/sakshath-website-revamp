import React from 'react';
import "./style.scss"
import { GrLocation } from "react-icons/gr";
import SlideAnimationButton from '../../Components/Utils/SlideAnimationButton';
import {Link} from "react-router-dom";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

const Contact = () => {
  return (
    <>
        <section  className='contact_us'>
         <div className="conatiner contact_us_box">
          <div className="row">
          
            <div className="col-md-8">
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
                        <p>WeWork- Sakshath Technologies
Vi-John Tower 393, Phase 3, Udyog Vihar,
Gurugram, Haryana 122016
                           </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 contact_card">
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
                <RiInstagramFill />
              </Link>

              <Link to="">
                <TfiLinkedin />
              </Link>

              <Link to="">
                <FaYoutube />
              </Link>
                  </div>
                </div>
              </div>
            </div>
           
          
          </div>
          
         </div>
            
        </section>
    </>
  )
}

export default Contact;