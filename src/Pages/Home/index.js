import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa";
import "./style.scss";
import {WHO_WE_ARE} from "./Constant"



export const Home = () => {
  return (
    <>
      <section className="">
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

      <section className="fancy_feature">
        <div className="container">
          <div className="row ">
            <div className="top_content text-center mt-4">
              <h6>GREAT JOURNEY FOR IT SOLUTIONS</h6>
              <h3>SPECIALIZES IN BUILDING SERVICES</h3>
            </div>
          </div>
     

        

        <div className="row mt-4 p-3">
          <div className="col-md-4 d-flex ">
            <div className="icon">
              <FaLightbulb />
            </div>
            <div className="content">
              <h3 className="">Professional Service</h3>
              <p>
                Sedut perspicias unde omnis natus error sit voluptatem accusanti
                remqu laudantium totam rem aperiam
              </p>
            </div>
          </div>

          <div className="col-md-4 d-flex ">
            <div className="icon">
              <FaLightbulb />
            </div>
            <div className="content">
              <h3>Experince Team</h3>
              <p>
                Sedut perspicias unde omnis natus error sit voluptatem accusanti
                remqu laudantium totam rem aperiam
              </p>
            </div>
          </div>

          <div className="col-md-4 d-flex ">
            <div className="icon">
              <FaLightbulb />
            </div>
            <div className="content">
              <h3>Best IT Solution</h3>
              <p>
                Sedut perspicias unde omnis natus error sit voluptatem accusanti
                remqu laudantium totam rem aperiam
              </p>
            </div>
          </div>
          

          {/* <div className="  col-md-4">grfdg</div> */}
          {/* <div className="  col-md-4">grfdg</div> */}
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
