import React from "react";
import {
  EXPERIENCE,
  EXPERIENCE1,
  PROFESSIONAL_TEAM,
  PROFESSIONAL_TEAM1,
  RELIABILTY,
  SPECIALIZATION,
  SPECIALIZATION1,
  RELIABILTY1,
} from "./Constant";
import { Fade } from "react-awesome-reveal";
import SubTitle from "../Utils/Title_head";
import Heading from "../Utils/Heading";
import "./styles.scss";
import { Link } from "react-router-dom";
import SubHeading from "../Utils/SubHeading";

const OurPrincipals = () => {
  return (
    <>
      {/* <section className="our_principals">
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
                <Fade direction="up"  triggerOnce>
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
      </section>   */}

      <section className="principle_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 our_principals_heading">
              <div className="text-center">
                <div className="title">
                  <Fade direction="up" triggerOnce>
                    <SubTitle SubTitle=" " />{" "}
                  </Fade>
                  <Fade direction="up" triggerOnce>
                    <Heading
                      heading="Top Four Reasons to Choose Sakshath Technologies"
                      uppercase=""
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6 principle_cols">
              <Fade direction="up" triggerOnce>
                <div className="principle_container d-flex horizontal-shake">
                  <div className="principle_icon">
                    <img src={RELIABILTY1} alt="" />
                  </div>
                  <div className="principle_para">
                    {/* <h5>REABILITY</h5> */}
                    <SubHeading heading="Reliability" uppercase="" />

                    <p>
                      {" "}
                      Our customers rely on us as we provide high quality,
                      reliable products which have control over all their
                      processes which are rigorously managed by our Quality
                      Management System.{" "}
                    </p>

                    {/* <Link>Read More</Link> */}
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-6 principle_cols">
              <Fade direction="up" triggerOnce>
                <div className="principle_container d-flex horizontal-shake">
                  <div className="principle_icon">
                    <img src={PROFESSIONAL_TEAM1} alt="" />
                  </div>
                  <div className="principle_para">
                    <h5>EXPERIENCE</h5>
                    <p>
                      {" "}
                      Sakshath Technologies consultants have an average of 12+
                      years experience with their processes and have worked on
                      projects of all sizes and scopes thus managing new
                      implementations upgrades.{" "}
                    </p>

                    {/* <Link>Read More</Link> */}
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-6 principle_cols">
              <Fade direction="up" triggerOnce>
                <div className="principle_container d-flex horizontal-shake">
                  <div className="principle_icon">
                    <img src={SPECIALIZATION1} alt="" />
                  </div>
                  <div className="principle_para">
                    {/* <h5>SPECIALIZATION</h5> */}
                    <SubHeading heading="SPECIALIZATION" uppercase="" />
                    <p>
                      {" "}
                      We specialize in implementations, process improvements,
                      project management and staff augmentation in parallel with
                      product lifecycle management and other solutions.{" "}
                    </p>

                    {/* <Link>Read More</Link> */}
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-6 principle_cols">
              <Fade direction="up" triggerOnce>
                <div className="principle_container d-flex horizontal-shake">
                  <div className="principle_icon">
                    <img src={EXPERIENCE1} alt="" />
                  </div>
                  <div className="principle_para">
                    {/* <h5>EXPERIENCE</h5> */}
                    <SubHeading heading="PROFESSIONAL TEAM" uppercase="" />

                    <p>
                      {" "}
                      In order to efficiently create and produce excellent
                      products for our clients, Sakshath Technologies' professional team of
                      designers follow a simple process that makes working with
                      us easy. {" "}
                    </p>

                    {/* <Link>Read More</Link> */}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPrincipals;
