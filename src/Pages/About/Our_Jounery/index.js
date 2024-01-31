import React from "react";
import { Chrono } from "react-chrono";
import "./style.scss";
import Heading from "../../../Components/Utils/Heading";

const OurJounery = () => {
  const items = [
    {
      title: " INCEPTION 2012",
      cardTitle: "Something Text",
      //    cardSubtitle:
      // "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "As a partnering start-up in 2012, we idealized how we should work and outlined our commitment to the mission, values and philosophy of the business.",
    },
    {
      title: " ACQUISITION 2013-2015",
      //   cardTitle: "Something Text",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Acquiring a sole proprietorship in 2015 allowed us to build our business based on our behavior, decisions and activities and how we can complement our clients and project stakeholders.",
    },
    {
      title: "GROWTH 2015-2018",
      cardDetailedText:
        "We decided to push the limits of what is possible and have worked relentlessly to advance our expansion approach in areas such as ERP planning and technical support. ",
    },

    {
      title: "FRUITION 2018-2020",

      cardDetailedText:
        "From planning to completion for a self-financed business to registering a trademark, wasn’t the walk in the park. We have shaped our organization through a combination of research, executive search, cultural and leadership assessment and a talented advisory board.",
    },
    {
      title: "EXPANSION 2020-2022",

      cardDetailedText:
        "We understood our client's expectations and worked tirelessly on what they wanted each time. Targeting several industries within and outside India such as Healthcare, Software, Banking, NGO, Hospitality, Retail, Finance, Food and Beverages etc.",
    },
    {
      title: "ROAD AHEAD 2023-",

      cardDetailedText:
        "Sakshath has an ever-evolving spirit within the organization, led by committed professionals. Sakshath continually reviews its product/service offering, always being at the cutting edge of technology-based business solutions in a dynamic market. ",
    },
  ];

  return (
    <>
      <section className="Inception">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12 ">
              <Heading heading="Inception to Fruition" uppercase="uppercase" />
              <div style={{  overflowY: "hidden" }}>
                <Chrono items={items} mode="VERTICAL_ALTERNATING" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurJounery;
