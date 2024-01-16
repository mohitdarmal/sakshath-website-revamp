import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa";
import "./style.scss";

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
              <h3>Professional Service</h3>
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
              <h3>Professional Service</h3>
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
              <h3>Professional Service</h3>
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
    </>
  );
};

export default Home;
