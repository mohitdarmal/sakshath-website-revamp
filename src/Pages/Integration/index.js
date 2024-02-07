import React from "react";
import "./style.scss";
import { INTEGRATION_SECTION_ONE_IMG, INTEGRATION_SECTION_THREE_IMG, SECTION_THREE_ICON_ONE, SECTION_THREE_ICON_TWO, SECTION_THREE_ICON_THREE } from "./Constant";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ServiceStickMenu from "../../Components/ServiceStickMenu";
import { CLIENT_LOGO1, CLIENT_LOGO2, CLIENT_LOGO3, CLIENT_LOGO4, CLIENT_LOGO5 } from "../../Components/ClientLogo/Constant";


export const Integration = () => {
    return (
        <>
            {/* <!-- section one start --> */}
            <section className="body_sec_one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="sec_heading">Uncover insights with business intelligence.</h1>
                            <p className="sec_para">Help every business user put real-time data to work with easy-to-use
                                visualizations, <br />dashboards, alerts, and reports.</p>
                            <SlideAnimationButton btnName="TALK TO SALES" />

                        </div>
                        <div className="col-md-6">
                            <div>
                                <img className="img-fluid" src={INTEGRATION_SECTION_ONE_IMG} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section one end --> */}


            {/* <!-- section two start --> */}
            <section className="body_sec_one">
                <div className="container">
                    <div className="row align-items-center">

                        <div class="col-md-6">
                            <div>
                                <img className="img-fluid" src={INTEGRATION_SECTION_ONE_IMG} />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <h1 className="sec_heading">Uncover insights with business intelligence.</h1>
                            <p className="sec_para">Help every business user put real-time data to work with easy-to-use
                                visualizations, <br />dashboards, alerts, and reports.</p>
                            <SlideAnimationButton btnName="TALK TO SALES" />

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section two end -->

            <!-- section three start--> */}
            <section className="body_sec_two">
                <div className="container">
                    <div className="row">
                        <div class="col-md-6">

                            <p className="data-visualization-para"></p>
                            <img src={INTEGRATION_SECTION_THREE_IMG} class="img-fluid" />




                        </div>
                        <div className="col-md-6">
                            <h3 className="heading-1">Next-level data visualization.</h3>
                            <p className="paragraph-1 ">Go from boring, static charts to vibrant, interactive dashboards that
                                give your data context and produce intuitive insights.</p>
                            {/* <!-- section three first heading para section --> */}
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_ONE} class="img-fluid" />
                                </div>
                                <div className="section_para">
                                    <h4>Create personalized and customizable</h4>
                                    <p>visualizations with no advanced skills required.</p>
                                </div>
                            </div>

                            {/* <!-- section three end of first heading and  para section -->
                                    <!-- section three second heading para section --> */}
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_TWO} class="img-fluid" />
                                </div>
                                <div className="section_para">
                                    <h4>Build dashboards</h4>
                                    <p>that tell a story and encourage exploration.</p>
                                </div>
                            </div>

                            {/* <!-- section three end of second heading para section -->

                                    <!-- section three start heading para section --> */}
                            <div className="section_parent">
                                <div className="section_img">
                                    <img src={SECTION_THREE_ICON_THREE} class="img-fluid" />
                                </div>
                                <div className="section_para">
                                    <h4>Make your visualizations available</h4>
                                    <p>instantly on mobile devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- section three end --> */}


            {/* section four start */}
           
    <section className='partner_logo_section'>
      <div className="container partner_logo_tab">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={CLIENT_LOGO1} /> </SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO2} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO3} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO4} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO5} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO2} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO3} /></SwiperSlide>
        <SwiperSlide><img src={CLIENT_LOGO4} /></SwiperSlide>
      </Swiper>
      </div>
    </section>


    {/* section navbar start */}
   <ServiceStickMenu />
    {/* section navbar end */}




    {/* section five start */}
    <section className="body_sec_three">
        <div className="container">
            <div className="row">
                <div className="body_sec_three_parent">
                <div className="col-md-6">
                    <h3 className="integration_coe">Integration Consulting </h3>
                    {/* <p>End the days of emailing spreadsheets around and reviewing stale data in meetings.</p> */}
                    <ul className="intergration_list">
                        <li>CERTIFIED RESOURCES</li>
                        <li>RESUABLE ASSETS</li>
                        <li>INDUSTRY STANDARD BEST PRACTISES</li>
                        <li>QUALITY ASSURANCE </li>



                       
                    </ul>
                </div>
                <div className="col-md-6">
                <img className="img-fluid" src={INTEGRATION_SECTION_ONE_IMG} />

                </div>
                </div>
            </div>
        </div>

    </section>
    {/* section five end */}

    {/* section six start */}
    <section className="body_sec_three">
        <div className="container">
            <div className="row">
                <div className="body_sec_three_parent">
                <div className="col-md-6">
                <img className="img-fluid" src={INTEGRATION_SECTION_ONE_IMG} />
                   
                </div>
                <div className="col-md-6">
                <div className="integration_right_sec">
                <h3 className="integration_coe">Integration Coe</h3>
                    <p>End the days of emailing spreadsheets around and reviewing stale data in meetings.</p>
                    <ul className="intergration_list">
                    <li>Service Based Integration</li>
                        <li>API Gateway/Manager</li>
                        <li>Social Integration</li>
                        <li>Microservices Development</li>
                        <li>Market Place Integration</li>
                        <li>Inbuild connectors/ custom built connectors or adapters</li>
                        <li>Enterprise Service Bus Integration</li>
                        <li>Pluggable Adapters</li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
        </div>

    </section>


        </>

    )
}

export default Integration;