import React, { useEffect, useState } from "react";
import "./style.scss";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import { Fade } from "react-awesome-reveal";
import {ACHIVMENTS_ONE} from "./Constant";
const Our_Achivements = () => {
  return(
  <>
  <section className="Our-achivments">
    <div className="container">
      <div className="row achivemnt_first_row">
        <div className="col-md-6">
          <div className="row_one_section">
            
              <div className="ahivment_one_img">
                <img src={ACHIVMENTS_ONE} alt=""/>

              </div>

           
              <div className="achivment_one_para">
              <p>
              When the people in your life complete accomplishments and achieve success, it's kind to send them a nice message praising them and celebrating the positive news. 
              </p>
             
            </div>

          </div>

        </div>
        <div className="col-md-6">
          <div className="row_two_section">
          <div className="ahivment_two_img">
                <img src={ACHIVMENTS_ONE} alt=""/>

              </div>
              <div className="achivment_two_para">
              <p>
              When the people in your life complete accomplishments and achieve success, it's kind to send them a nice message praising them and celebrating the positive news. 
              </p>
             
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
  </>
  )
  
  
};

export default Our_Achivements;




// const achivementItem = [
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

// const [achivementDetails, setAchivementDetails] = useState([]);

// useEffect(() => {
//   setAchivementDetails(achivementItem);
// }, []);

// return (
//   <>
//     <section>
//       <div className="container">
//         <div className="row">
//           {achivementDetails.map((data) => {
//             return (
//               <>
//                 <div className="col-md-6 mt-4 mb-4">
//                   <div className="achivement_images">
//                     <img src={data.image} alt="" className="img-fluid" />
//                     <div className="achivement_description_container mt-4">
//                       <Fade direction="up" triggerOnce>
//                         {" "}
//                         <h4>{data.title}</h4>
//                       </Fade>
//                       <Fade direction="up" delay={50} triggerOnce>
//                         {" "}
//                         <p>
//                           {`${data.description.substring(0, 100)}`}...
//                         </p>{" "}
//                       </Fade>
//                       {/* <SlideAnimationButton btnName="Read More" /> */}
//                     </div>
//                   </div>
//                   <Fade direction="up" delay={50} triggerOnce>
//                     {" "}
//                     <SlideAnimationButton btnName="Read More" />{" "}
//                   </Fade>
//                 </div>
//               </>
//             );
//           })}

//           {/* <h4>
//             Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath
//             Technologies
//           </h4>
//           <div className="achivements_image">
//             <img src="" alt="" />
//           </div>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum aliquam repellendus quidem perspiciatis? Ipsum suscipit possimus laborum iure, voluptate illo dolore? Deleniti labore iste alias nulla, ratione nihil ad.</p> */}
//         </div>
//       </div>
//     </section>
