import React, { useEffect, useState } from "react";
import Heading from "../Utils/Heading";
// import { ICON, ICON2, ICON3 } from "./Constant";
import "./style.scss";
import { Col, Row } from "react-bootstrap";

const WhySaksahthNew = (props) => {
  // console.log(props, "erpprops");

  return (
    <>
      <section className="why_sakshath_new_section">
        <div className="container-fluid">
          <div className="row">
            <div className="why_sakshath_heading text-center ">
              <Heading heading="Why Sakshath?" />
            </div>
          </div>

          {/* <div className="row text-center"> */}
          {/* <div className="Col why_sak_col"> */}
          <Row>
            {props.whyCrm.map((data) => {
              return (
                <>
                  <Col>
                    <div className="why_sakshath_container1 text-center mb-5">
                      <div className="why_sakshath_content1">
                        <img src={data.img} alt="" />
                        <h5>{data.title}</h5>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
            {/* </div> */}
          </Row>

          {/*             
            <div className="col-md-2">
              <div className="why_sakshath_container2">
                <div className="why_sakshath_content2">
                  <img src={ICON} alt="" />
                  <h5>ABSOLUTE RESILIENCE</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, autem doloremque? Aut fugiat odio illo id iste
                    similique esse ea alias officiis dolorum, expedita,
                    asperiores optio natus dolorem possimus amet?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="why_sakshath_container1">
                <div className="why_sakshath_content1">
                  <img src={ICON2} alt="" />
                  <h5>RESULT-DRIVEN DESIGN</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, autem doloremque? Aut fugiat odio illo id iste
                    similique esse ea alias officiis dolorum, expedita,
                    asperiores optio natus dolorem possimus amet?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="why_sakshath_container2">
                <div className="why_sakshath_content2">
                  <img src={ICON3} alt="" />
                  <h5>ACCURATE IT SUPPORT</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, autem doloremque? Aut fugiat odio illo id iste
                    similique esse ea alias officiis dolorum, expedita,
                    asperiores optio natus dolorem possimus amet?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              {" "}
              <div className="why_sakshath_container1">
                <div className="why_sakshath_content1">
                  <img src={ICON2} alt="" />
                  <h5>SUPERIORITY & SAFETY</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, autem doloremque? Aut fugiat odio illo id iste
                    similique esse ea alias officiis dolorum, expedita,
                    asperiores optio natus dolorem possimus amet?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              {" "}
              <div className="why_sakshath_container2">
                <div className="why_sakshath_content2">
                  <img src={ICON} alt="" />
                  <h5>ADDING NEW CAPABILITES</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, autem doloremque? Aut fugiat odio illo id iste
                    similique esse ea alias officiis dolorum, expedita,
                    asperiores optio natus dolorem possimus amet?
                  </p>
                </div>
              </div>
            </div> */}
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default WhySaksahthNew;
