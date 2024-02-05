import React from "react";
import { HAPPYICON } from "../../Pages/Home/Constant";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import "./styles.scss";

const HappyClients = () => {
    return (
        <section className="happy_client">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <div className="conter_up_item">
                <Fade direction="up" triggerOnce>
                  <div className="happy_client_icon">
                    <img src={HAPPYICON} alt="" />
                  </div>
                  <div className="happy_client_number text-white">
                    <h2>
                      <CountUp
                        start={0}
                        end={500}
                        duration={3}
                        separator=""
                        decimal=","
                        suffix=" +"
                        enableScrollSpy={true}
                        useEasing={true}
                        // scrollSpyOnce={true}
                      ></CountUp>
                    </h2>
                    <h5>Happy Client</h5>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
                <Fade direction="up" delay={100} triggerOnce>
                  <div className="happy_client_icon">
                    <img src={HAPPYICON} alt="" />
                  </div>
                  <div className="happy_client_number text-white">
                    <h2>
                    <CountUp
                start={0}
                end={200}
                duration={3}
                separator=""
                decimal=","
                suffix="+"
                enableScrollSpy={true}
                useEasing={true}
              ></CountUp>
                    </h2>
                    <h5>Professional work</h5>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
                <Fade direction="up" delay={300} triggerOnce>
                  <div className="happy_client_icon">
                    <img src={HAPPYICON} alt="" />
                  </div>
                  <div className="happy_client_number text-white">
                    <h2>
                      <CountUp
                        start={0}
                        end={600}
                        duration={3}
                        separator=""
                        decimal=","
                        suffix=" +"
                        enableScrollSpy={true}
                        useEasing={true}
                        // scrollSpyOnce={true}
                      ></CountUp>
                    </h2>
                    <h5>Active Countries</h5>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-3">
              <div className="conter_up_item">
                <Fade direction="up" delay={500} triggerOnce>
                  <div className="happy_client_icon">
                    <img src={HAPPYICON} alt="" />
                  </div>
                  <div className="happy_client_number text-white">
                    <h2>
                      <CountUp
                        start={0}
                        end={1000}
                        duration={3}
                        separator=""
                        decimal=","
                        suffix=" +"
                        enableScrollSpy={true}
                        useEasing={true}
                        // scrollSpyOnce={true}
                      ></CountUp>
                    </h2>
                    <h5>Projects</h5>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HappyClients