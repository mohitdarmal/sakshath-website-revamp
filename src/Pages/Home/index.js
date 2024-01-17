import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { FaLightbulb } from "react-icons/fa";
import { HOMEIMG1 } from "./Constant";
import About from "../About";
import "./style.scss";

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
      {/* <About name="Mohit, Amar" school="UA University" sum={sum()} /> */}
      <section className="mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
        minima temporibus consequuntur dignissimos, fugiat laboriosam aliquam ab
        tempora officiis architecto voluptates aut laborum ullam numquam
        distinctio incidunt veniam similique maxime. Eum iusto, esse amet
        accusamus velit perspiciatis in dolor, doloribus pariatur natus quam
        quisquam odit aliquam asperiores quo delectus vel! Voluptas rerum qui
        molestiae commodi rem id quibusdam, porro velit!. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Doloribus, minima temporibus
        consequuntur dignissimos, fugiat laboriosam aliquam ab tempora officiis
        architecto voluptates aut laborum ullam numquam distinctio incidunt
        veniam similique maxime. Eum iusto, esse amet accusamus velit
        perspiciatis in dolor, doloribus pariatur natus quam quisquam odit
        aliquam asperiores quo delectus vel! Voluptas rerum qui molestiae
        commodi rem id quibusdam, porro velit!
        {/*  */}
      </section>

      <section className="fancy_feature">
        <div className="container">
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
                <img src={HOMEIMG1} alt="" />
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
                <img src={HOMEIMG1} alt="" />
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
                <img src={HOMEIMG1} alt="" />
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
