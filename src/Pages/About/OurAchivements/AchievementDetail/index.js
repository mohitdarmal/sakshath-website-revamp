import React, { useEffect, useState } from 'react';
import './style.scss';
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";

const AchievementDetail = () => {
  const { state }=useLocation();
  console.log(state,"State");
  // const side_achivmentdetails=[
  //   {
  //     id: 1,
  //     title:
  //       " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
  //     image: require("../../../Assets/images/Achivement40.png"),
  //     description:
  //       "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
 
  //   },
  //   {
  //     id: 2,
  //     title:
  //       " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
  //     image: require("../../../Assets/images/Achivement40.png"),
  //     description:
  //       "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
  //   },
  //   {
  //     id: 1,
  //     title:
  //       " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
  //     image: require("../../../Assets/images/Achivement40.png"),
  //     description:
  //       "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
  //     image: require("../../../Assets/images/Achivement40.png"),
  //     description:
  //       "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
  //   },
  // ];
  // const [sideachivmentData,setsideachivmentData]=useState([]);
  // useEffect(()=>{
  //   setsideachivmentData(side_achivmentdetails);
  // },[]);
  
  return (
    <section className="achivmentDetail_page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="achivemntdetails_bg_box">
          </div>
            <div className="achivmentdetail_img_box">
              
            <h2 className="achivment_heading">{state.title}</h2>
           
              <img src={state.image} alt=""/>
            </div>
            <div className="achivmentdetails_content_box">
            
              <p className="achivment_para">{state.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementDetail;