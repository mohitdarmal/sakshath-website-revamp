import React, { useEffect, useState } from "react";
import "./style.scss";
import Marquee from "react-fast-marquee";
import Heading from "../Utils/Heading";
import axios from "axios";

const MarqueeTools = () => {
  const [uData, setData] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setData(res.uData);
    });
  }, []);
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="tools_heading text-center mt-4 mb-4">
              <Heading heading="Tools" />
            </div>
          </div>
          <div className="row">
            <Marquee speed={50} pauseOnHover direction="left">
              <div className="marquee_scroll">
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Angular</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Java Full Stack</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Dot Net</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>RPA</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>MERN Stack</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <Marquee speed={50} pauseOnHover direction="right">
              <div className="marquee_scroll">
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Angular</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Java Full Stack</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Dot Net</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>RPA</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>MERN Stack</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>React Js</span>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarqueeTools;
