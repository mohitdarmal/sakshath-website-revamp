import React from "react";
import { img2, img3, integration3, why_sakshath_img } from "./Constant";
import "./style.scss";
import Heading from "../Utils/Heading";

const WhySakshath = () => {
  return (
    <>
    {/* why_Sakshath starts */}
      <section className="why_sakshath_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="why_sakshath_heading text-center">
              <Heading heading="Why Sakshath?" />
            </div>
            <div className="col-md-4 ">
              <div className="boxes d-flex ">
                <div className="why_sakshath_heading_left">
                  <h6>Secured Data Replication</h6>
                  <p>
                    Our system transfers and copies data between systems while
                    ensuring that the correct data .
                  </p>
                </div>
                <div className="why_sakshath_img">
                  <img src={integration3} alt="" />
                </div>
              </div>

              <div className="boxes d-flex ">
                <div className="why_sakshath_heading_left">
                  <h6>Responsive Data Warehouse Workflow</h6>
                  <p>
                    We offer practical knowledge fast designing, assembling,
                    deploying, and managing purpose-built cloud data warehouse.
                  </p>
                </div>
                <div className="why_sakshath_img">
                  <img src={img3} alt="" />
                </div>
              </div>
              <div className="boxes d-flex ">
                <div className="why_sakshath_heading_left">
                  <h6>Data Streaming in Real Time</h6>
                  <p>
                    With the help of our platform, live streams of business data
                    can be turned into advanced analytics and microservices.
                  </p>
                </div>
                <div className="why_sakshath_img">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>

            {/* img */}
            <div className="col-md-4">
              <div className="why_sakshath_img_bg">
                <img src={why_sakshath_img} alt="" />
              </div>
            </div>

            {/* right */}
            <div className="col-md-4">
              <div className="boxes d-flex ">
                <div className="why_sakshath_img">
                  <img src={img3} alt="" />
                </div>
                <div className="why_sakshath_heading_right">
                  <h6>Business Data Catalog</h6>
                  <p>
                    Sakshath makes analytics available throughout your
                    organization with a single, self-service data catalog.
                  </p>
                </div>
              </div>
              <div className="boxes d-flex ">
                <div className="why_sakshath_img">
                  <img src={img3} alt="" />
                </div>
                <div className="why_sakshath_heading_right">
                  <h6>Creating a Controlled Data Lake</h6>
                  <p>
                    We streamline complicated acquisition and transformation
                    procedures through automation.
                  </p>
                </div>
              </div>
              <div className="boxes d-flex ">
                <div className="why_sakshath_img">
                  <img src={integration3} alt="" />
                </div>
                <div className="why_sakshath_heading_right">
                  <h6>Major assistance</h6>
                  <p>
                    Our software enables you to stack, acquire,
                    synchronize data,
                    migrate, disseminate, consolidate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why_Sakshath starts */}
    </>
  );
};

export default WhySakshath;
