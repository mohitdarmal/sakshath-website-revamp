import React, { useState } from "react";
import Heading from "../Utils/Heading";
import { Accordion } from "react-bootstrap";
import SubTitle from "../Utils/Title_head";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import "./style.scss";
import { Fade } from "react-awesome-reveal";

const Faq = (props) => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const faqcontent = [
    {
      id: 1,
      heading: "QUESTION 1?",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa soluta, voluptatum magnam sed explicabo dicta quod porro quae. Quaerat minus optio eum, hic aspernatur quisquam voluptates doloremque unde voluptatum!",
    },
    {
      id: 2,
      heading: "QUESTION 2?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa soluta, voluptatum magnam sed explicabo dicta quod porro quae. Quaerat minus optio eum, hic aspernatur quisquam voluptates doloremque unde voluptatum!",
    },
    {
      id: 3,
      heading: "QUESTION 3?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa soluta, voluptatum magnam sed explicabo dicta quod porro quae. Quaerat minus optio eum, hic aspernatur quisquam voluptates doloremque unde voluptatum!",
    },
    {
      id: 4,
      heading: "QUESTION 4?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa soluta, voluptatum magnam sed explicabo dicta quod porro quae. Quaerat minus optio eum, hic aspernatur quisquam voluptates doloremque unde voluptatum!",
    },
    {
      id: 5,
      heading: "QUESTION 5?",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa soluta, voluptatum magnam sed explicabo dicta quod porro quae. Quaerat minus optio eum, hic aspernatur quisquam voluptates doloremque unde voluptatum!",
    },
  ];

  useState(() => {
    setFaqData(faqcontent);
  }, []);

  const handleAccordionClick = (index) => {
    console.log(index, "inddd");
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ section starts */}
      <section className="faq_section">
        <div className="container">
          <div className="row">
         
            <div className="faq_content_box">
              <div className="faq_content">
                <div className="text-center faq_heading">
                  <Fade direction="up" triggerOnce>
                    <SubTitle SubTitle="Do you have Question?" />
                  </Fade>
                  <Fade direction="up" triggerOnce>
                    <Heading heading="Frequently Asked Questions"></Heading>
                  </Fade>
                </div>
                <Fade direction="up" triggerOnce>
                  {faqData.map((data, ind) => {
                    return (
                      <>
                        <Accordion key={ind} activeKey={activeIndex}>
                          <Accordion.Item eventKey={ind}>
                            <Accordion.Header
                              className="question_button"
                              onClick={() => handleAccordionClick(ind)}
                            >
                              <BsFillQuestionCircleFill /> {data.heading}
                            </Accordion.Header>
                            <Accordion.Body>{data.description}</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </>
                    );
                  })}

                 
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section end */}
    </>
  );
};

export default Faq;
