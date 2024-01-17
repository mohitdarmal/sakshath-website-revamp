import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICE_IMG, IT_IMG, TEAM_IMG, P_IMG, BANNER1 } from "./Constant";
import "./style.scss";
import {WHO_WE_ARE} from "./Constant"



export const Home = () => {
  return (
    <>
      <section className="mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
        minima temporibus consequuntur dignissimos, fugiat laboriosam aliquam ab
        tempora officiis architecto voluptates aut laborum ullam numquam
        distinctio incidunt veniam similique maxime. Eum iusto, esse amet
        accusamus velit perspiciatis in dolor, doloribus pariatur natus quam
        quisquam odit aliquam asperiores quo delectus vel! Voluptas rerum qui
        molestiae commodi rem id quibusdam, porro velit!. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Doloribus, minima temporibus
        consequuntur dignissimos, fugiat laboriosam aliquam ab tempora officiis
        architecto voluptates aut laborum ullam numquam distinctio incidunt
        veniam similique maxime. Eum iusto, esse amet accusamus velit
        perspiciatis in dolor, doloribus pariatur natus quam quisquam odit
        aliquam asperiores quo delectus vel! Voluptas rerum qui molestiae
        commodi rem id quibusdam, porro velit!
        {/*  */}
      </section>

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
                <img src={WHO_WE_ARE} alt="" />
              </div>
              
            </div>
            <div className="col-md-5">
              <div className="text_wrapper">
                <div className="title_area">
                  <span className="title">Who we are</span>
                  <h2 className="subtitle">The Enterprise Productivity Platform For Complex Data</h2>
                </div>
                <p>Sed perspiciatis unde omnis iste natus voluptate accusantiuy doloremque laudantium totam rem aperiam eaque quae ainvtore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos ratione volupta seque nesciunt porro quisquam doloremdolor site</p>
                 <button>LEARN MORE ABOUT US</button>
                
              </div>
            </div>
          </div>
        </div>
       </section>

    </>
  );
};

export default Home;
