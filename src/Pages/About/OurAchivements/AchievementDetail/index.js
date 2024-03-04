import React, { useEffect, useState } from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const AchievementDetail = () => {
  const { state } = useLocation();
  console.log(state, "State");
  const SideAchivmentdetails = [
    {
      id: 1,
      title:
        " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
      image: require("../../../../Assets/images/Achivement40.png"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
    },
    {
      id: 2,
      title: " Analytics Vidhya - DataHack Summit 2023 ",
      image: require("../../../../Assets/images/Achivement40.png"),
      description:
        "3-day event + 1 day hack day. DataHack Summit 2023 by Analytics Vidhya is an annual conference that brings together data science and machine learning enthusiasts, experts, and practitioners from around the world. The event is hosted by Analytics Vidhya, a leading platform for data science and machine learning education.The conference is designed to be a collaborative and interactive experience, with plenty of opportunities for networking and knowledge sharing. Delhi & Mumbai team from Sakshath interacted with fellow data science professionals explored new tools and techniques, and gained insights into how data science is transforming industries and shaping the future.",
    },
    {
      id: 3,
      title:
        " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
      image: require("../../../../Assets/images/Achivement40.png"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
    },
    {
      id: 4,
      title:
        " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
      image: require("../../../../Assets/images/Achivement40.png"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
    },
  ];
  const [sideAchivmentData, setSideAchivmentData] = useState([]);
  useEffect(() => {
    setSideAchivmentData(SideAchivmentdetails);
  }, []);

  return (
    <>
      <section className="achievement_detail_section">
        <div className="container-fluid">
          <div className="achievement_detail_image_section">
            <h2 className="achievment_detail_heading">{state.title}</h2>
            <img src={state.image} alt="" className="achievemnt_img" />
          </div>
        </div>
      </section>
      <section className="achievment_detail_para_section">
        <div className="container">
          <div className="achievmentdetails_content_box">
            <p className="achievment_para">{state.description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementDetail;

{
  /* <section className="achivement_detail_section">
        <div className="container-fluid">
          <div className="row">
            {sideAchivmentData.map((dx) => {
              return (
                <>
                
                  <div className="div-md-12">
                    <div className="achivement_box">
                    <h4>{dx.title}</h4>
                    <img src={dx.image} alt="" />
                    </div>
                    
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section className="achievement_para_section">
        <div className="container">
          {sideAchivmentData.map((dy)=>{
            return(
              <>
               <p>{dy.description}</p>
              </>
            )
          })}
        </div>
       

      </section> */
}
