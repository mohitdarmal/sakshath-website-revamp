import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICE_IMG, IT_IMG, TEAM_IMG, P_IMG, BANNER1 } from "./Constant";
import "./style.scss";
import { WHO_WE_ARE } from "./Constant";
// import Button from '../../Components/Utils/WaveAnimationButton';

export const Home = () => {
  return (
    <>
      <div>
        <img src={BANNER1} alt="" className="img-fluid" />
      </div>

      <section className="overflow-hidden">
        <div className="specilation_feature">
          <div className="container">
            <div className="row ">
              <div className="top_content text-center mt-4">
                <h6>GREAT JOURNEY FOR IT SOLUTIONS</h6>
                {/* <input onChange={onChangeValue} /> */}
                <h3>SPECIALIZES IN BUILDING SERVICES</h3>
              </div>
            </div>
            <div className="row mt-4 pt-2">
              <div className="col-md-4">
                <div className="d-flex ">
                  <div className="icon">
                    <img src={P_IMG} alt="" />
                  </div>
                  <div className="content">
                    <h3 className="text">Professional Service</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit vitae exercitationem aliquid dolore reiciendis! Nihil
                      at eos dolorum expedita repellat debitis molestias
                      adipisci illum quae. Esse fugiat totam itaque in.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 d-flex ">
                <div className="d-flex ">
                  <div className="icon">
                    <img src={TEAM_IMG} alt="" />
                  </div>
                  <div className="content">
                    <h3 className="">Experience Team</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis vel maxime velit alias, libero corporis
                      temporibus veritatis dolorum. Placeat quisquam qui modi ab
                      delectus beatae doloribus dignissimos sequi dolor nulla?
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 d-flex ">
                <div className="d-flex ">
                  <div className="icon">
                    <img src={IT_IMG} alt="" />
                  </div>
                  <div className="content">
                    <h3>Best IT Solutions</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, ea blanditiis quisquam ipsam nihil eum eligendi
                      inventore voluptatibus cum aspernatur maiores debitis non
                      sapiente numquam soluta mollitia expedita cupiditate
                      laboriosam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - "WHO WE ARE" */}
      <section className="who_we_are">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="image-box ">
                <img className="img-fluid" src={WHO_WE_ARE} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="text_wrapper">
                <div className="title_area">
                  <span className="title">Who we are</span>
                  <h2 className="subtitle">
                    The Enterprise Productivity Platform For Complex Data
                  </h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis iste natus voluptate accusantiuy
                  doloremque laudantium totam rem aperiam eaque quae ainvtore
                  veritatis quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed quia consequuntur magni dolores eos ratione
                  volupta seque nesciunt porro quisquam doloremdolor site
                </p>
                <button>LEARN MORE ABOUT US</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* popular service start */}
      <section className="popular_princial  text-white ">
        <div className="container ">
          <div className="row ">
          {/* Popuplar Princial Left Side Column Start */}
            <div className="col-md-5 mt-4 left_home_principle">
              <h3>Our Popular Principle</h3>
              <h4> Best Professional IT Solutiuons</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat nihil aliquid, architecto assumenda alias vitae
                dignissimos ab ea id tempora quibusdam maiores odit, soluta
                doloremque accusamus distinctio aperiam sed quia!
              </p>
              <button>Explore More Service </button>
            </div>
            {/* Popuplar Princial Left Side Column End */}

              {/* Popuplar Princial Right Side Column Start */}

            <div className="col-md-7 right_home_principle">
              <div className="row">
                <div className="col-md-6 right_home_principle_left_content_box">
                
                
                    <div className="d-flex">
                      <div className="right_home_principle_img">
                        <img src={P_IMG} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h5 className="right_home_subheading">APPLICATION DEVELOPMENT</h5>
                        <p className="justify-content-end  right_para ">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni numquam saepe aperiam.
                        </p>
                      </div>
                    </div>
                    
                
                    <div className="d-flex">
                    
                      <div className="right_home_principle_img">
                        <img src={P_IMG} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading pe-md-0">
                        <h4 className="right_home_subheading">ANALYTICS</h4>
                        <p className=" right_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni numquam saepe aperiam.
                        </p>
                      </div>
                    </div>
                    
                </div>


                <div className="col-md-6 right_home_principle_right_content_box">
           
                    <div className="d-flex">

                      <div className="right_home_principle_img">
                        <img src={P_IMG} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h5 className="right_home_subheading">AUTOMATION</h5>
                        <p className="justify-content-end right_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni numquam saepe aperiam.
                        </p>
                      </div>
                    </div>
                    
                    
                    <div className="d-flex">
                      <div className="right_home_principle_img">
                        <img src={P_IMG} alt="" /> &nbsp;
                      </div>

                      <div className="right_home_principle_heading">
                        <h4 className="right_home_subheading text-decoration-underline">BANKING SOLUTION</h4>
                        <p className=" right_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni numquam saepe aperiam.
                        </p>
                      </div>
                    </div>
                  

                
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* Popuplar Princial End */}
    </>
  );
};

export default Home;
