import React from "react";
import { BENIFTS_IMG, BONUS, CARRER_IMG, SAFE } from "../../Components/Breadcumb/Constant";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCumb from "../../Components/Breadcumb/index";
import "./style.scss";
import Heading from "../../Components/Utils/Heading";
// import {Heading} from '../../Components/Utils/Heading'
const Career = () => {
  return (
    <>
      <Helmet>
        <title>About - Sakshath</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <BreadCumb imgUrl={CARRER_IMG} title=" CAREERS" />
      <section className="mt-4">
        <div className="container">
          <div className="row">
          <div className="career_container">
       
            <h1 className="text-center">Join Our Team</h1>
            <p className="text-center">
              We are a collaborative firm where everyone helps each other in
              mutual growth and find a way to flourish. We don’t hire only smart
              people but also smart people who effectively work as a team.{" "}
              <br />
              <br />
              We are a solid team of people who wish to grow and ensure success
              individually and jointly. This pragmatic and flexible approach to
              every team member helps in making the organization a success in
              every endeavor it ventures into.
            </p>
            <br />
            <div
              className="maillink text-center"
              style={{ textDecoration: "none", fontSize: "16px" }}
            >
              <Link
                to="mailto:sakshathinfo@gmail.com"
                className="career_mail_link"
              >
                careers@sakshath-technologies.com
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className="container">
          <div className="row">
          <div className="career_container">
            <h1 className="text-center">Career at Sakshath</h1>
            <p className="text-center">
              Sakshath is a platform for the world’s most talented people to
              congregate, grow, and make an impact. We place our employees at
              the core of everything we do to accomplish all targets. <br />
              <br />
              We aim to deliver the best experience through absolute novelty and
              connectivity. We’re dedicated to having an environment where
              everyone can thrive by emphasizing intense diversity, employment,
              engagement, ethics, transparency, and deep-rooted learning.
            </p>
            <br />
          </div>
          </div>
        </div>
      </section>

      {/* Benifits starts */}
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <Heading heading="Benfits You Receive"/>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero, sint consequatur.</span>
                     
                     {/* <div className="benfits_icons mt-2">
                     <div className="benifts_icons">
                        
                        <img src={SAFE} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,</p>
                        
                     </div>
                     <div className="benifts_icons">
                        
                        <img src={SAFE} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab animi nostrum vero,</p>
                        
                     </div>
                     </div> */}
                    
                     <div className="benfits mt-3 d-flex ">
                        <div className="benfits_icon ">
                        <div className="benfits_icon_img">
                        <img src={SAFE} alt="" />
                        </div>
                       
                            
                        </div>
                        <div className="benfit_content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas nihil maiores voluptatibus sint eius consequuntur placeat.</p>
                        </div>
                        </div>

                        <div className="benfits mt-3 d-flex">
                        <div className="benfits_icon ">
                        <div className="benfits_icon_img">
                        <img src={BONUS} alt="" />
                        </div>
                       
                            
                        </div>
                        <div className="benfit_content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas nihil maiores voluptatibus sint eius consequuntur placeat.</p>
                        </div>
                        </div>
                     
                    </div>


                    <div className="col-md-6">
                    <div className="benfits_img">
                        <img src={BENIFTS_IMG} alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      {/* Benfits ends */}
    </>
  );
};

export default Career;
