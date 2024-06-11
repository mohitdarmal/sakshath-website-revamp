import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Heading from "../Utils/Heading";
import "./style.scss";
import {
    CLIENT_LOGO1,
    CLIENT_LOGO2,
    CLIENT_LOGO3,
    CLIENT_LOGO4,
    // CLIENT_LOGO5,
    CLIENT_LOGO6,
    CLIENT_LOGO7,
    CLIENT_LOGO8,
    CLIENT_LOGO9,
    CLIENT_LOGO10,
    CLIENT_LOGO11,
    CLIENT_LOGO12,
    CLIENT_LOGO13,
    CLIENT_LOGO14,
    CLIENT_LOGO15,
    CLIENT_LOGO45,
    CLIENT_LOGO46,

    CLIENT_LOGO16,
    CLIENT_LOGO17,
    CLIENT_LOGO18,
    CLIENT_LOGO19,
    CLIENT_LOGO20,
    CLIENT_LOGO21,
    CLIENT_LOGO22,
    CLIENT_LOGO23,
    CLIENT_LOGO24,
    CLIENT_LOGO25,
    CLIENT_LOGO26,
    CLIENT_LOGO27,
    CLIENT_LOGO28,
    CLIENT_LOGO29,
    CLIENT_LOGO30,
    CLIENT_LOGO31,
    CLIENT_LOGO32,
    CLIENT_LOGO33,
    CLIENT_LOGO34,
    CLIENT_LOGO35,
    CLIENT_LOGO36,
    CLIENT_LOGO37,
    CLIENT_LOGO38
  } from "../../Components/TrustedBy/Constant";


  const TrustedBy = () => {
    return (
      <>
      
 
 

      <section className="our_paltform_sec">
      <div className="text-center">
          <Heading
                heading="Trusted By"
              />
          </div>
        <div className="container">
          {/* <div className="row"> */}

            <Swiper
              slidesPerView={5}
              spaceBetween={30}
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
                  slidesPerView: 4,
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
            <img src={CLIENT_LOGO1}  />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO2}  />
            </SwiperSlide>
                     <SwiperSlide>
              <img src={CLIENT_LOGO34}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO3}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO4}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO28}  />
            </SwiperSlide>
           
            <SwiperSlide>
              <img src={CLIENT_LOGO27}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO6}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO7}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO35}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO8}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO9}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO10}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO11}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO12}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO29}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO13}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO14}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO15}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO16}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO17}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO18}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO19}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO20}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO21}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO22}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO23}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO24}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO25}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO26}  />
            </SwiperSlide>
      
            
            
            <SwiperSlide>
              <img src={CLIENT_LOGO30}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO31}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO32}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO33}  />
            </SwiperSlide>
          
            
            <SwiperSlide>
              <img src={CLIENT_LOGO36}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO37}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO38}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO45}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CLIENT_LOGO46}  />
            </SwiperSlide>
           

            </Swiper>
          {/* </div> */}
        </div>
      </section>
      </>
    )
  }

  export default TrustedBy;