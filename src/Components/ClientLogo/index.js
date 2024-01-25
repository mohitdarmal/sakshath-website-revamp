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
  CLIENT_LOGO2,
  CLIENT_LOGO3,
  CLIENT_LOGO4,
  CLIENT_LOGO5,
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
                      <img src={CLIENT_LOGO2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO3} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO4} />
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
                      <img src={CLIENT_LOGO4} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO5} />
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
                      <img src={CLIENT_LOGO1} />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO3} />
                    </SwiperSlide>
                  </Swiper>
                </Tab>
                <Tab
                  eventKey="business"
                  title={
                    <span className="d-flex">
                      <p>
                        <MdOutlineBusinessCenter />
                        &nbsp;&nbsp;
                      </p>
                      <p>Business</p>
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
                      <img src={CLIENT_LOGO4} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO5} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO2} />
                    </SwiperSlide>
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
                      <img src={CLIENT_LOGO3} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO4} />
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
