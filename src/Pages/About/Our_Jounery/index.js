import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import "./style.scss";
import Heading from "../../../Components/Utils/Heading";
import { ABOUT_BANNER, SAFE } from "../../../Components/Breadcumb/Constant";
import SubTitle from "../../../Components/Utils/Title_head";
import { Fade } from "react-awesome-reveal";
// import Contact from "../../../Components/Contact/Contact";
import BreadCumb from "../../../Components/Breadcumb";
import TimelineObserver from "react-timeline-animation";

import Inception from "../../../Components/Inception";

const OurJounery = () => {
  const items = [
    {
      title: " INCEPTION 2012",
      cardTitle: "INCEPTION 2012",
      //    cardSubtitle:
      // "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "As a partnering start-up in 2012, we idealized how we should work and outlined our commitment to the mission, values and philosophy of the business.",
    },
    {
      title: " ACQUISITION 2013-2015",
      cardTitle: "ACQUISITION 2013-2015",
      cardDetailedText:
        "Acquiring a sole proprietorship in 2015 allowed us to build our business based on our behavior, decisions and activities and how we can complement our clients and project stakeholders.",
    },
    {
      title: "GROWTH 2015-2018",
      cardTitle: "GROWTH 2015-2018",
      cardDetailedText:
        "We decided to push the limits of what is possible and have worked relentlessly to advance our expansion approach in areas such as ERP planning and technical support. ",
    },

    {
      title: "FRUITION 2018-2020",
      cardTitle: "FRUITION 2018-2020",

      cardDetailedText:
        "From planning to completion for a self-financed business to registering a trademark, wasn’t the walk in the park. We have shaped our organization through a combination of research, executive search, cultural and leadership assessment and a talented advisory board.",
    },
    {
      title: "EXPANSION 2020-2023",
      cardTitle: "EXPANSION 2020-2023",

      cardDetailedText:
        "We understood our client's expectations and worked tirelessly on what they wanted each time. Targeting several industries within and outside India such as Healthcare, Software, Banking, NGO, Hospitality, Retail, Finance, Food and Beverages etc.",
    },

    {
      title: "ROAD AHEAD 2024",
      cardTitle: "ROAD AHEAD 2024",

      cardDetailedText:
        "Sakshath Technologies® has an ever-evolving spirit within the organization, led by committed professionals. Sakshath Technologies® continually reviews its product/service offering, always being at the cutting edge of technology-based business solutions in a dynamic market. ",
    },
  ];
  // corevalues starts
  const CoreValueData = [
    {
      id: 1,
      name: "Honsety",
      description:
        "A culture of honesty results in more than “happy” workplaces, and a deep-seated respect and expectation for honesty makes companies more successful and more profitable.",
        image:require('../../../Assets/images/Honesty.svg').default,
    },
    {
      id: 2,
      name: "Transparency",
      description:
        "Business transparency is the process of being open, honest, and straightforward about various company operations to their employees and stakeholders.",
    },
    {
      id: 3,
      name: "Integrity",
      description:
        "As an integral firm, we ensure that we act with high integrity and consistency in whatever we undertake. We act with honesty and be consistent on belief compass you have.",
    },
    {
      id: 4,
      name: "Value Creation",
      description:
        "Business owner’s extensive reservoir of understanding on customers’ needs and preferences, business environments and their dynamics add to value creation.",
    },
    {
      id: 5,
      name: "Ethics",
      description:
        "Improved Ethical performance results in improved financial performances. It makes good financial sense for investors to prefer such companies who have good ethical performances.",
    },
    {
      id: 6,
      name: "Knowledge",
      description:
        "Value is the ultimate benefit that your business provides and is the reason why others want to purchase your products or services. Creating a value puts a company above the other.",
    },
  ];

  const [coreValue, setCoreValue] = useState([]);

  useEffect(() => {
    setCoreValue(CoreValueData);
  }, []);

  return (
    <>
      <BreadCumb imgUrl={ABOUT_BANNER} title="Our Jounery" />{" "}
      {/* our jounery starts */}
      {/* <section className="Inception">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12 ">
              <Heading heading="Inception to Fruition" uppercase="uppercase" />

              <div style={{ overflowY: "hidden" }}>
                <Chrono
                  items={items}
                  mode="VERTICAL_ALTERNATING"
                  className="text"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <Inception/>
      {/* our jounery ends */}



      {/* Core values starts */}
      <section className="core_values">
        <div className="container">
          <div className="row">
            <div className="core_value_heading text-center  mb-4">
              <Heading heading="CORE VALUES" />
            </div>
            {coreValue.map((data) => {
              return (
                <div className="col-md-4 mb-4">
                  <div className="core_value_box">
                    <div className="title d-flex justify-content-between">
                      <Fade direction="up" delay={450} triggerOnce>
                        <p>{data.name}</p>{" "}
                      </Fade>

                      <img src={data.image} alt="" />
                    </div>
                    <p>{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Core values end */}
      {/* contact us */}
      {/* <section className="contact_map_section">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1QtXoNJa4bNr3llNKRLddH_rzCUNktWQ&ehbc=000F&noprof=1"
                width="100%"
                height="435"
              ></iframe>
            </div>

            <div className="col-md-6">
              // contact us start
              <Contact />
              // contact ends
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default OurJounery;
