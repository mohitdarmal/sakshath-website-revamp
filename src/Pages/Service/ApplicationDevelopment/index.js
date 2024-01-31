import React from "react";
import BreadCumb from "../../../Components/Breadcumb"
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG, COST_EFFECTIVE_SERVICES, DAILY_REPORT, DEDICATED_SUPPORT, EXPERIENCED_APP_DEVELOPERS, NO_OVERHEADS, PEACE_OF_MIND, QUALITY_ASSURANCE, SMOOTH_COMMUNICATION } from "./Constant";
import Heading from "../../../Components/Utils/Heading";
import "./styles.scss"

const ApplicationDevelopment = () => {
    return (
        <>
           <BreadCumb imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG} title="Application Development" />

           <section className="why_choose_app_dev_sec">
            <div className="container">
                {/* Heading start */}
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                    <Heading
                  heading="Why choose Sakshath for app development?"
                  uppercase="text-uppercase"
                />
                    </div>
                </div>
                {/* Heading end */}

                {/* App devlopment details start */}
                <div className="row mt-md-5">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-6">
                                {/* Start */}
                                <div className="app_dev_icon_with_text">
                                    <div><img src={EXPERIENCED_APP_DEVELOPERS} /></div>
                                    <div><h5>Experienced App Developers </h5></div>
                                </div>
                                 {/* End */}
                                  {/* Start */}
                                <div className="app_dev_icon_with_text">
                                     <div><img src={COST_EFFECTIVE_SERVICES} /></div>
                                    <div><h5>Cost-Effective Services  </h5></div>
                                </div>
                                 {/* End */}
                                  {/* Start */}
                                <div className="app_dev_icon_with_text">
                                     <div><img src={DEDICATED_SUPPORT} /></div>
                                    <div><h5>24*7 Dedicated Support </h5></div>
                                </div>
                                 {/* End */}
                                  {/* Start */}
                                <div className="app_dev_icon_with_text">
                                     <div><img src={QUALITY_ASSURANCE} /></div>
                                    <div><h5>100% Quality Assurance </h5></div>
                                </div>
                                 {/* End */}
                            </div>

                            <div className="col-md-6">
                                {/* Start */}
                                <div className="app_dev_icon_with_text">
                                     <div><img src={PEACE_OF_MIND} /></div>
                                    <div><h5>Complete Peace of Mind  </h5></div>
                                </div>
                                 {/* End */}
                                  {/* Start */}
                                <div className="app_dev_icon_with_text">
                                     <div><img src={DAILY_REPORT} /></div>
                                    <div><h5>Daily/Weekly/Monthly Reporting  </h5></div>
                                </div>
                                 {/* End */}
                                  {/* Start */}
                                <div className="app_dev_icon_with_text">
                                     <div><img src={SMOOTH_COMMUNICATION} /></div>
                                    <div><h5>Transparent and Smooth Communication  </h5></div>
                                </div>
                                 {/* End */}
                                  {/* Start */}
                                <div className="app_dev_icon_with_text">
                                     <div><img src={NO_OVERHEADS} /></div>
                                    <div><h5>No Hidden Costs, No Overheads  </h5></div>
                                </div>
                                 {/* End */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">

                    </div>
                </div>
                  {/* App devlopment details end */}

            </div>
           </section>
        </>
    )
}

export default ApplicationDevelopment;