import React, { useEffect, useState } from "react";
import "./style.scss";
import Marquee from "react-fast-marquee";
import Heading from "../Utils/Heading";
import axios from "axios";

const MarqueeTools = () => {
  const [uData, setData] = useState("");

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     console.log(res);
  //     setData(res.uData);
  //   });
  // }, []);

  const [direction,setDirection]=useState("left");
  const[rightDirection,setRightDirection]=useState("right");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(direction === "left" ? "right" : "left");
      setRightDirection(rightDirection== "right"? "left":"right");
    }, 15000); // Change direction every 10 seconds

    return () => clearInterval(intervalId); 
  }, [direction, rightDirection]);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
   
      setRightDirection(rightDirection== "right"? "left":"right");
    }, 20000); // Change direction every 10 seconds

    return () => clearInterval(intervalId); 
  }, [ rightDirection]);



  return (
    <div>
      <section className="application_tools_section">
        <div className="container-fluid">
          <div className="row">
            <div className="tools_heading text-center mt-4 mb-4">
              <Heading heading="Tools" />
            </div>
          </div>
          <div className="row">
            <Marquee speed={25} pauseOnHover direction={direction}>
              <div className="marquee_scroll">
                <div className="marquee_scroll box1">
                  <span>Angular Developers</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Reactjs Developers</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>NodeJs Developers</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Dedicated Developers</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Ruby Rails Developers</span>
                </div>
               
             
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <Marquee speed={25} pauseOnHover direction={rightDirection}>
              <div className="marquee_scroll">
                <div className="marquee_scroll box1">
                  <span>React Native Developers</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Mobile App Developers</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Dedicated Software Development Teams</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>Python Developers</span>
                </div>
                <div className="marquee_scroll box1">
                  <span>ASP.NET Developers</span>
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
