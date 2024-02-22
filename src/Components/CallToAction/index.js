import React from "react";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import "./style.scss";

const CallToAction = (props) => {

  return (
    <>
      {/* call to action starts */}
      <section className="call_to_action_section">
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
      </section>
      {/* call to action ends */}
    </>
  );
};

export default CallToAction;
