import React from "react";
import Heading from "../Utils/Heading";
import { Accordion } from "react-bootstrap";
import SubTitle from "../Utils/Title_head";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import "./style.scss";

const Faq = () => {
    return(
        <>
             {/* FAQ section starts */}
      <section className="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 faq_content_box">
              <div className="faq_content">
              <div className="text-center faq_heading">
              <SubTitle SubTitle="Do you have Question?" />
                <Heading heading="Frequently Asked Questions"></Heading>
                </div>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                        <Accordion.Header className="question_button" ><BsFillQuestionCircleFill /> FAQ's #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                        <Accordion.Header><BsFillQuestionCircleFill /> FAQ's #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. 
                        </Accordion.Body>
                        </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><BsFillQuestionCircleFill /> FAQ's #3</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. 
                        </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                        <Accordion.Header><BsFillQuestionCircleFill /> FAQ's #4</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. 
                        </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                        <Accordion.Header><BsFillQuestionCircleFill /> FAQ's #5</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. 
                        </Accordion.Body>
                  </Accordion.Item>    
                  
                </Accordion>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
        {/* FAQ section end */}
        </>
    )
}

export default Faq;