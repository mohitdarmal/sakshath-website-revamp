import React, { useEffect, useState } from "react";
import "./style.scss";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import { Fade } from "react-awesome-reveal";
import {ACHIVMENTS_ONE} from "./Constant";
import { Link } from "react-router-dom";

const OurAchivement = () => {


  const achivementItem = [
    {
      id: 1,
      title:
        " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
      image: require("../../../Assets/images/Achivement40.png"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
    },
    {
      id: 2,
      title:
        " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
      image: require("../../../Assets/images/Achivement40.png"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
    },
    {
      id: 1,
      title:
        " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
      image: require("../../../Assets/images/Achivement40.png"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
    },
    {
      id: 2,
      title:
        " Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
      image: require("../../../Assets/images/Achivement40.png"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.",
    },
  ];

  const [achivementDetails, setAchivementDetails] = useState([]);

useEffect(() => {
  setAchivementDetails(achivementItem);
}, []);

  return(
  <>
  <section className="our_achievment">
    <div className="container">
      <div className="row">

      {
        achivementDetails.map((data)=> {
          return(
            <div className="col-md-6">
            <ul className="align">
            <li>
						<figure class='book'>

						{/* Front */}

							<ul class='hardcover_front'>
								<li>
									<img src={data.image} alt="" width="100%" height="100%"  style={{objectFit:'cover'}}/>
								</li>
								<li></li>
							</ul>

						{/* Pages */}

							<ul class='page'>
								<li style={{fontSize:'12px', padding:'10px'}}>{data.description.substring(0, 210)}.. <br/> </li>
								<li></li>
								<li ></li>
								<li></li>
								<li></li>
							</ul>

						 {/* Back */}

							<ul class='hardcover_back'>
								<li></li>
								<li></li>
							</ul>
							<ul class='book_spine'>
								<li></li>
								<li></li>
							</ul>
							<figcaption>
								<h1>{`${data.title.substring(0, 35)}..`}</h1>
							 
								<p>{`${data.description.substring(0, 200)}..`}</p>
                <Link className="book_btn" to="">Read More..</Link>
							</figcaption>
						</figure>
					</li>
            </ul>
         </div>
          )
        })
      }
         
      </div>
    </div>
  </section>
  </>
  )
  
  
};

export default OurAchivement;







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
