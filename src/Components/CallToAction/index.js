import React from "react";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import "./style.scss";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const CallToAction = (props) => {

  return (
    <>
      {/* call to action starts */}
      {/* <section className="call_to_action_section">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="call_to_action_erp">
                <h3>
                {props.ctaContent}
                </h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="call_to_action_button_sysypro">
                <SlideAnimationButton btnName="Contact us" url="/contact-us" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="planning_banner">
        <div className="container">
          <div className="row planning_banner_content_box align-items-center">
            <div className="col-md-9 ipad_full_width">
              <div className="left_planning_banner_content">
                <Fade direction="up" triggerOnce>
                  <h3>
                  {props.ctaContent}
                  </h3>
                </Fade>
              </div>
            </div>
            <div className="col-md-3 button_box ipad_full_width">
              <div className="right_planning_banner_content text-md-end">
                <Fade direction="up" delay={300} triggerOnce>
                  <Link to='/contact-us' className="lets_meet_us_button">

                  <h5>{props.ctaTitle}</h5>
                  </Link>
                 
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action ends */}
    </>
  );
};

export default CallToAction;


