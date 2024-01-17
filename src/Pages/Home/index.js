import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { FaLightbulb } from "react-icons/fa";
import { SERVICE_IMG, IT_IMG, TEAM_IMG, P_IMG, BANNER1 } from "./Constant";
import About from "../About";
import "./style.scss";
import CtaButton from "../../Components/Utils/Button";

export const Home = () => {
  //  const sum = () => {
  //   return 10
  //  }

  //  const [sumofNo, setSumOfNo] = useState("");
  //  const [age, setAge] = useState("");
  //  const [inputVal, setInputVal] = useState("")

  //  useEffect(() => {
  //   console.log("First Time Render")
  //   if(sumofNo !== ""){
  //   console.log(sum(), "sumofNo");}
  //  }, [])

  //  useEffect(() => {
  //   console.log("Second Time render")
  //   setSumOfNo("vALUE Changed");

  //  })

  //  const onHandleClick= () => {
  //   alert("Button Clicked")
  //  }

  // const onChangeValue = (e) => {
  //   console.log(e.target.value);
  //   setInputVal(e.target.value)
  // }
  // console.log(inputVal, "input value")
  return (
    <>
      <img src={BANNER1} className="img-fluid" />
      {/* <About name="Mohit, Amar" school="UA University" sum={sum()} /> */}

      <section className="">
        <div className="container specilation_feature">
          <div className="row ">
            <div className="top_content text-center mt-4">
              <h6>GREAT JOURNEY FOR IT SOLUTIONS</h6>
              {/* <input onChange={onChangeValue} /> */}
              <h3>SPECIALIZES IN BUILDING SERVICES</h3>
            </div>
          </div>
          <div className="row mt-4 pt-2">
            <div className="col-md-4 d-flex ">
              <div className="icon">
                <img src={P_IMG} alt="" />
              </div>
              <div className="content">
                <h3 className="text">Professional Service</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae exercitationem aliquid dolore reiciendis! Nihil at eos
                  dolorum expedita repellat debitis molestias adipisci illum
                  quae. Esse fugiat totam itaque in.
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex ">
              <div className="icon">
                <img src={TEAM_IMG} alt="" />
              </div>
              <div className="content">
                <h3 className="">Experience Team</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis vel maxime velit alias, libero corporis temporibus
                  veritatis dolorum. Placeat quisquam qui modi ab delectus
                  beatae doloribus dignissimos sequi dolor nulla?
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex ">
              <div className="icon">
                <img src={IT_IMG} alt="" />
              </div>
              <div className="content">
                <h3>Best IT Solutions</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  ea blanditiis quisquam ipsam nihil eum eligendi inventore
                  voluptatibus cum aspernatur maiores debitis non sapiente
                  numquam soluta mollitia expedita cupiditate laboriosam?
                </p>
              </div>
            </div>
            {/* <div className="  col-md-4">grfdg</div> */}
            {/* <div className="  col-md-4">grfdg</div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
