import React from "react";
import SubTitle from "../Utils/Title_head";
import CountUp from "react-countup";
// import { Tabs, Tab } from "react-bootstrap";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import "./style.scss";
import {
  ABINBEV,
  ABSA,
  ACEGREEN,
  ADITYABIRLA,
  AIRTELTIGO,
  AKSHYAPATHRA,
  BANKONE,
  CHAITANYA,
  CLARIANT,
  CLIX,
  CRAWDORD,
  DTB,
  ECOBANK,
  EPSSWUSA,
  EQUITY,
  FNB,
  FREEAU,
  FULLERTON,
  GWOSEVO,
  INOXAIR,
  JUIPTERHOSPITAL,
  KCB,
  KENS,
  MASTEK,
  MCB,
  MOOVAFRICA,
  NCBA,
  NEDBANK,
  ONEASSIST,
  PIRAMAL,
  RAWBANK,
  REDINGTON,
  SAFARICOM,
  SMFC,
  SOCREMO,
  STANBICBANK,
} from "./Constant";

const ClientLogo = () => {
  return (
    <>
      {/* Happy Clients Starts */}
      <section className="popular_clients">
        <div className="container">
          <div className="row text-center">
            {/* <SubTitle SubTitle="Popular Partners" /> */}
            <p className="popular_partner_heading">
              {/* WE HAVE{" "}
              <CountUp
                start={0}
                end={50}
                duration={3}
                separator=""
                decimal=","
                suffix="+"
                enableScrollSpy={true}
                useEasing={true}
              ></CountUp>{" "}

              WORLD WIDE CLIENTS */}
              Trusted By
            </p>
          </div>

          <div className="popular_client_tab_sec">
            <div className="row">
              {/* <Tabs
                defaultActiveKey="internation"
                id="clients_logo"
                className="mb-3 client_tabs"
              > */}
              {/* <div className="international"> */}
              {/* <Tab
                  eventKey="internation"
                  title={
                    <div className="d-flex">
                      <p>
                        <GiCommercialAirplane />
                        &nbsp;&nbsp;
                      </p>
                      <p>Overseas</p>
                    </div>
                  }
                > */}
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  481: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
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
                  <img src={CLIX} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={CRAWDORD} />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <img src={NCBA} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={ABINBEV} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={RAWBANK} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={PIRAMAL} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={JUIPTERHOSPITAL} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={EQUITY} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={ADITYABIRLA} />
                </SwiperSlide>
            
              </Swiper>
              {/* </Tab> */}
              {/* </div> */}
              {/* <Tab
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
                > */}
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  481: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
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
                  <img src={SMFC} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ONEASSIST} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={AKSHYAPATHRA} />
                </SwiperSlide>
                {/* <SwiperSlide>
                      <img src={CLIENT_LOGO4} />
                    </SwiperSlide> */}
                <SwiperSlide>
                  <img src={ACEGREEN} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={CLARIANT} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={MASTEK} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={CHAITANYA} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={FULLERTON} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={INOXAIR} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={KENS} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={FREEAU} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={STANBICBANK} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={EQUITY} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={MOOVAFRICA} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={NEDBANK} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={SAFARICOM} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={DTB} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={KCB} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ECOBANK} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={MCB} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={BANKONE} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={AIRTELTIGO} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={GWOSEVO} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={REDINGTON} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={EPSSWUSA} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={SOCREMO} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={BANKONE} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={FNB} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ABSA} />
                </SwiperSlide>
               
                <SwiperSlide>
                  <img src={MCB} />
                </SwiperSlide>
              </Swiper>

              {/* </Tab>
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
                > */}
              {/* <Swiper
                    breakpoints={{
                      320: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      481: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
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
                      <img src={CLIENT_LOGO39} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO40} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO42} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO43} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={CLIENT_LOGO44} />
                    </SwiperSlide>
                  </Swiper> */}
              {/* </Tab> */}
              {/* </Tabs> */}
            </div>
          </div>
        </div>
      </section>

      {/* Happy client end */}
    </>
  );
};

export default ClientLogo;
