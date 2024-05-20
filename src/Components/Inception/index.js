import React from "react";
import "./style.scss";
import Heading from "../Utils/Heading";
import { Fade } from "react-awesome-reveal";

const Inception = () => {
  return (
    <>
      <section class="inception_section">
        <div class="container">
          <div className="inception_main_heading text-center">
            <Heading heading="Inception to Fruition" />
          </div>
          {/* 2012 */}

          <div class="row align-items-center how-it-works d-flex  col-mob1">
            <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center abc">
              <div class="circle font-weight-bold">2012</div>
            </div>
            <div class="col-6 col-f-width">
              <Fade direction="up" triggerOnce>
                <h4>INCEPTION </h4>
                <p>
                  As a partnering start-up in 2012, we idealized how we should
                  work and outlined our commitment to the mission, values and
                  philosophy of the business.
                </p>
              </Fade>
            </div>
          </div>
          {/* 2013-2015 */}

          <div class="row timeliness">
            <div class="col-2">
              <div class="corner top-right"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner left-bottom"></div>
            </div>
          </div>

          <div class="row align-items-center justify-content-end how-it-works d-flex col-mob">
            <div class="col-6 text-right col-f-width">
              <Fade direction="up" triggerOnce>
                <h4>ACQUISITION </h4>
                <p>
                  Acquiring a sole proprietorship in 2015 allowed us to build
                  our business based on our behavior, decisions and activities
                  and how we can complement our clients and project
                  stakeholders.
                </p>
              </Fade>
            </div>
            <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div class="circle font-weight-bold">2013-2015</div>
            </div>
          </div>
          {/* 2015-18 */}
          <div class="row timeliness">
            <div class="col-2">
              <div class="corner right-bottom"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner top-left"></div>
            </div>
          </div>

          <div class="row align-items-center how-it-works d-flex col-mob1">
            <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
              <div class="circle font-weight-bold">2015-2018</div>
            </div>

            <div class="col-6 col-f-width">
              <Fade direction="up" triggerOnce>
                <h4>GROWTH </h4>
                <p>
                  We decided to push the limits of what is possible and have
                  worked relentlessly to advance our expansion approach in areas
                  such as ERP planning and technical support..
                </p>
              </Fade>
            </div>
          </div>

          {/* FRUITION 2018-2020 */}
          <div class="row timeliness">
            <div class="col-2">
              <div class="corner top-right"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner left-bottom"></div>
            </div>
          </div>

          <div class="row align-items-center justify-content-end how-it-works d-flex col-mob">
            <div class="col-6 text-right col-f-width">
              <Fade direction="up" triggerOnce>
                <h4>FRUITION </h4>
                <p>
                  From planning to completion for a self-financed business to
                  registering a trademark, wasn’t the walk in the park. We have
                  shaped our organization through a combination of research,
                  executive search, cultural and leadership assessment and a
                  talented advisory board.
                </p>
              </Fade>
            </div>
            <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
              <div class="circle font-weight-bold">
                2018-2020
                {/* <p>
              2018-2020
              </p> */}
              </div>
            </div>
          </div>

          {/* EXPANSION 2020-2023*/}
          <div class="row timeliness">
            <div class="col-2">
              <div class="corner right-bottom"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner top-left"></div>
            </div>
          </div>

          <div class="row align-items-center how-it-works d-flex col-mob1">
            <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
              <div class="circle font-weight-bold">2020-2023</div>
            </div>
            <div class="col-6 col-f-width">
              <Fade direction="up" triggerOnce>
                <h4>EXPANSION </h4>
                <p>
                  We understood our client's expectations and worked tirelessly
                  on what they wanted each time. Targeting several industries
                  within and outside India such as Healthcare, Software,
                  Banking, NGO, Hospitality, Retail, Finance, Food and Beverages
                  etc.
                </p>
              </Fade>
            </div>
          </div>
          {/* ROAD AHEAD 2024 */}
          <div class="row timeliness">
            <div class="col-2">
              <div class="corner top-right"></div>
            </div>
            <div class="col-8">
              <hr />
            </div>
            <div class="col-2">
              <div class="corner left-bottom"></div>
            </div>
          </div>

          <div class="row align-items-center justify-content-end how-it-works d-flex">
            <div class="col-6 text-right">
            <Fade direction="up" triggerOnce>
              <h4>ROAD AHEAD</h4>
              <p>
              Sakshath Technologies®has an ever-evolving spirit within the
                organization, led by committed professionals. Sakshath
                Technologies&#174; continually reviews its service offering,
                always being at the cutting edge of technology-based business
                solutions in a dynamic market.
              </p>
              </Fade>
            </div>
            <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center para">
              <div class="circle font-weight-bold">
                2024
                {/* <p>2024</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inception;
