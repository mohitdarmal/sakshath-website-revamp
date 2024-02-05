import React from "react";
import { EXPERIENCE, PROFESSIONAL_TEAM, RELIABILTY, SPECIALIZATION } from "../../Pages/Home/Constant";
import {Fade} from "react-awesome-reveal";
import SubTitle from "../Utils/Title_head";
import Heading from "../Utils/Heading";
import "./styles.scss";

const OurPrincipals = () => {
    return (
        <>
        <section className="our_principals">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 our_principals_heading">
              <div className="text-center">
                <div className="title">
                  <Fade direction="up" triggerOnce>
                    {" "}
                    <SubTitle SubTitle="Our Principle " />{" "}
                  </Fade>
                  <Fade direction="up" delay={100} triggerOnce>
                    {" "}
                    <Heading
                      heading="SOLUTIONS CUSTOMERS HAVE BUILT WITH INSTABASE"
                      uppercase="text-uppercase"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 pt-md-3">
            <div className="col-md-3 d-flex ">
              <div className="our_principals_box">
                <Fade direction="up" triggerOnce>
                  <div className="icon_box">
                    <img src={RELIABILTY} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      RELIABILTY
                    </h3>
                    <p>
                    Our customers rely on us as we provide high–quality, reliable products that have control over all their processes, which are rigorously managed by our quality management systems.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="col-md-3 d-flex ">
              <div className="our_principals_box">
                <Fade direction="up" delay={200} triggerOnce>
                  <div className="icon_box">
                    <img src={EXPERIENCE} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      EXPERIENCE
                    </h3>
                    <p>
                    Sakshath Technologies® consultants have an average of 10 years of experience with their processes and have worked on projects of all sizes and scopes thus managing new implementation upgrades and rollouts.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="col-md-3 d-flex ">
              <div className="our_principals_box">
                <Fade direction="up" delay={400} triggerOnce>
                  <div className="icon_box">
                    <img src={SPECIALIZATION} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      SPECIALIZATION
                    </h3>
                    <p>
                    We specialize in implementations, process improvements, project management, and staff augmentation in parallel with product lifecycle management and other solutions.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div className="col-md-3 d-flex ">
              <div className="our_principals_box">
                <Fade direction="up" delay={600} triggerOnce>
                  <div className="icon_box">
                    <img src={PROFESSIONAL_TEAM} alt="" />
                  </div>
                  <div className="text">
                    <h3 className="text-underline">
                      PROFESSIONAL TEAM
                    </h3>
                    <p>
                    In order to efficiently create and produce excellent products for our clients, Sakshath Technologies® professional team of designers follows a simple process that makes working with us easy.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>  
        </>
    )
} 

export default OurPrincipals;