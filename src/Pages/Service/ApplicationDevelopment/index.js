import React from "react";
import BreadCumb from "../../../Components/Breadcumb";
import {
  APPLICATION_DEVLOPMENT_BREADCUMB_IMG,
  APP_DEV_IMG,
  COST_EFFECTIVE_SERVICES,
  DAILY_REPORT,
  DEDICATED_SUPPORT,
  EXPERIENCED_APP_DEVELOPERS,
  NO_OVERHEADS,
  PEACE_OF_MIND,
  QUALITY_ASSURANCE,
  SMOOTH_COMMUNICATION,
} from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import "./styles.scss";
import HappyClients from "../../../Components/HappyClients";

const ApplicationDevelopment = () => {
  return (
    <>
      <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Application Development"
      />

{/* @@@@@ SECTION- App Development Start @@@@@@ */}
      <section className="why_choose_app_dev_sec">
        <div className="container">
          {/* Heading start */}
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center app_dev_heading">
              <Heading
                heading="Why choose Sakshath for app development?"
                uppercase="text-uppercase"
              />
            </div>
          </div>
          {/* Heading end */}

          {/* App devlopment details start */}
          <div className="row mt-md-5 align-items-center why_choose_app_dev_content">
            <div className="col-md-6 ipad_full_width">
              <div className="row why_choose_app_dev_icon_content">
                <div className="col-md-6">
                  {/* Start */}
                  <div className="app_dev_icon_with_text">
                    <div>
                      <img src={EXPERIENCED_APP_DEVELOPERS} />
                    </div>
                    <div>
                      <h5>
                        Experienced <br />
                        App Developers{" "}
                      </h5>
                    </div>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="app_dev_icon_with_text">
                    <div>
                      <img src={COST_EFFECTIVE_SERVICES} />
                    </div>
                    <div>
                      <h5>
                        Cost-Effective <br />
                        Services{" "}
                      </h5>
                    </div>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="app_dev_icon_with_text">
                    <div>
                      <img src={DEDICATED_SUPPORT} />
                    </div>
                    <div>
                      <h5>
                        24*7 <br />
                        Dedicated Support{" "}
                      </h5>
                    </div>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="app_dev_icon_with_text">
                    <div>
                      <img src={QUALITY_ASSURANCE} />
                    </div>
                    <div>
                      <h5>
                        100% <br />
                        Quality Assurance{" "}
                      </h5>
                    </div>
                  </div>
                  {/* End */}
                </div>

                <div className="col-md-6 ">
                  {/* Start */}
                  <div className="app_dev_icon_with_text">
                    <div>
                      <img src={PEACE_OF_MIND} />
                    </div>
                    <div>
                      <h5>
                        Complete <br />
                        Peace of Mind{" "}
                      </h5>
                    </div>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="app_dev_icon_with_text">
                    <div>
                      <img src={DAILY_REPORT} />
                    </div>
                    <div>
                      <h5>
                        Daily/Weekly/Monthly <br />
                        Reporting{" "}
                      </h5>
                    </div>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="app_dev_icon_with_text">
                    <div>
                      <img src={SMOOTH_COMMUNICATION} />
                    </div>
                    <div>
                      <h5>
                        Transparent & <br />
                        Smooth Communication{" "}
                      </h5>
                    </div>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="app_dev_icon_with_text">
                    <div>
                      <img src={NO_OVERHEADS} />
                    </div>
                    <div>
                      <h5>
                        No Hidden Costs, <br />
                        No Overheads{" "}
                      </h5>
                    </div>
                  </div>
                  {/* End */}
                </div>
              </div>
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-5 ipad_full_width">
              <img className="w-100" src={APP_DEV_IMG} />
            </div>
          </div>
          {/* App devlopment details end */}
        </div>
      </section>
    {/* @@@@@ SECTION- App Development end @@@@@@ */}

      {/* @@@@@@ SECTION - Happy client counter starts @@@@@*/}
      <HappyClients />
      {/* @@@@@ SECTION- Happy client counter end @@@@@@ */}
    </>
  );
};

export default ApplicationDevelopment;
