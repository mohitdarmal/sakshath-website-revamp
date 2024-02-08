import React from "react";
import SubTitle from "../Utils/Title_head";
import CountUp from "react-countup";
import { Tabs, Tab } from "react-bootstrap";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import "./style.scss";
import {
  CLIENT_LOGO1,
  CLIENT_LOGO10,
  CLIENT_LOGO11,
  CLIENT_LOGO12,
  CLIENT_LOGO13,
  CLIENT_LOGO14,
  CLIENT_LOGO15,
  CLIENT_LOGO16,
  CLIENT_LOGO17,
  CLIENT_LOGO18,
  CLIENT_LOGO19,
  CLIENT_LOGO2,
  CLIENT_LOGO20,
  CLIENT_LOGO3,
  CLIENT_LOGO4,
  CLIENT_LOGO5,
  CLIENT_LOGO6,
  CLIENT_LOGO7,
  CLIENT_LOGO8,
  CLIENT_LOGO9,
} from "./Constant";

const ClientLogo = () => {
  return (
    <>
      {/* Happy Clients Starts */}
      <section className="popular_clients">
        <div className="container">
          <div className="row text-center">
            <SubTitle SubTitle="Popular Partners" />
            <p className="popular_partner_heading">
              WE HAVE{" "}
              <CountUp
                start={0}
                end={2345}
                duration={3}
                separator=""
                decimal=","
                suffix="+"
                enableScrollSpy={true}
                useEasing={true}
              ></CountUp>{" "}
              WORLD WIDE CLIENTS
            </p>
          </div>

          <div className="popular_client_tab_sec">
            <div className="row">
              <Tabs
                defaultActiveKey="internation"
                id="clients_logo"
                className="mb-3 client_tabs"
              >
                {/* <div className="international"> */}
                <Tab
                  eventKey="internation"
                  title={
                    <div className="d-flex">
                      <p>
                        <GiCommercialAirplane />
                        &nbsp;&nbsp;
                      </p>
                      <p>International</p>
                    </div>
                  }
                >
                  <Swiper
                    breakpoints={{
                      320: {
                        slidesPerView:2,
                        spaceBetween:30
                      },
                      481: {
                        slidesPerView:3,
                        spaceBetween:30
                      },
                      768: {
                        slidesPerView:3,
                        spaceBetween:30
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween:30
                      },
                    }}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={CLIENT_LOGO11} />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO12} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO13} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO14} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO15} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO16} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO17} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO18} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO19} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO20} />
                    </SwiperSlide>
                  </Swiper>
                </Tab>
                {/* </div> */}
                <Tab
                  eventKey="domestic"
                  title={
                    <div className="d-flex">
                      <p>
                        <FaHome />
                        &nbsp;&nbsp;
                      </p>

                      <p>Domestic</p>
                    </div>
                  }
                >
                  <Swiper
                  breakpoints={{
                    320: {
                      slidesPerView:2,
                      spaceBetween:30
                    },
                    481: {
                      slidesPerView:3,
                      spaceBetween:30
                    },
                    768: {
                      slidesPerView:3,
                      spaceBetween:30
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween:30
                    },
                  }}
                  
                    
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                   <SwiperSlide>
                      <img src={CLIENT_LOGO1} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO3} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO4} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO5} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO6} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO7} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO8} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO9} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO10} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO11} />
                    </SwiperSlide>
                  </Swiper>
                </Tab>
                <Tab
                  eventKey="partners"
                  title={
                    <span className="d-flex">
                      <p>
                        <MdOutlineBusinessCenter />
                        &nbsp;&nbsp;
                      </p>
                      <p>Partners</p>
                    </span>
                  }
                >
                  <Swiper
                   breakpoints={{
                    320: {
                      slidesPerView:2,
                      spaceBetween:30
                    },
                    481: {
                      slidesPerView:3,
                      spaceBetween:30
                    },
                    768: {
                      slidesPerView:3,
                      spaceBetween:30
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween:30
                    },
                  }}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={CLIENT_LOGO1} />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO3} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO4} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO5} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO6} />
                    </SwiperSlide>  
                  </Swiper>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Happy client end */}
    </>
  );
};

export default ClientLogo;
