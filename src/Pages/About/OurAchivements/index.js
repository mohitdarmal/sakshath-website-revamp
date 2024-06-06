import React, { useEffect, useState } from "react";
import "./style.scss";
import SlideAnimationButton from "../../../Components/Utils/SlideAnimationButton";
import { Fade } from "react-awesome-reveal";
import { ACHIVMENTS_ONE } from "./Constant";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const OurAchivement = () => {
  const achivementItem = [
    {
      id: 1,
      title:
        "World's Leading Brands & Leaders' House Of Lords, London",
      image: require("../../../Assets/images/Achivement40.jpg"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies® exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.The role of leadership stands as the fundamental driver behind an organization’s triumph or downfall. Great leadership isn’t merely about managing; it’s about inspiring, innovating, and steering the collective towards  a unified vision. The essence of exceptional business leadership embodies a unique blend of vision, empathy, adaptability, and the ability to inspire others to transcend their limits.At the helm of successful businesses lie extraordinary leaders whose impact reaches far beyond balance sheets and profit margins. These leaders not only set ambitious goals but also nurture a culture that empowers their teams, encouraging creativity and fostering an environment where ideas flourish. One of the defining traits of great business leaders is their unwavering vision. They possess the innate ability to foresee opportunities amidst challenges and navigate uncharted territories. Their foresight often transcends the immediate horizon, paving the way for innovation and growth.In the dynamic landscape of technology and software consulting, the name Shravan Kumar shines brightly, interwoven with the story of Sakshath Technologies®, a firm that epitomizes innovation and digital transformation. Led by Kumar’s visionary guidance, Sakshath Technologies® has become a pioneering force in revolutionising the way we perceive and interact with technology.Kumar’s leadership has been marked by a relentless pursuit of innovation. His commitment to staying ahead of the curve has resulted in the development of cutting-edge products and services. Sakshath Technologies® has been recognized for its transformative solutions, notably in SYSPRO services.The role of leadership stands as the fundamental driver behind an organization’s triumph or downfall. Great leadership isn’t merely about managing; it’s about inspiring, innovating, and steering the collective towards a unified vision. The essence of exceptional business leadership embodies a unique blend of vision, empathy, adaptability, and the ability to inspire others to transcend their limits. At the helm of successful businesses lie extraordinary leaders whose impact reaches far beyond balance sheets and profit margins. These leaders not only set ambitious goals but also nurture a culture that empowers their teams, encouraging creativity and fostering an environment where ideas flourish. One of the defining traits of great business leaders is their unwavering vision. They possess the innate ability to foresee opportunities amidst challenges and navigate uncharted territories. Their foresight often transcends the immediate horizon, paving the way for innovation and growth. In the dynamic landscape of technology and software consulting, the name Shravan Kumar shines brightly, interwoven with the story of Sakshath Technologies®, a firm that epitomizes innovation and digital transformation. Led by Kumar’s visionary guidance, Sakshath Technologies® has become a pioneering force in revolutionising the way we perceive and interact with technology. Kumar’s leadership has been marked by a relentless pursuit of innovation. His commitment to staying ahead of the curve has resulted in the development of cutting-edge products and services. Sakshath Technologies® has been recognized for its transformative solutions, notably in SYSPRO services.",


    },
    {
      id: 2,
      title: "Analytics Vidhya - DataHack Summit 2023 Community Sponsor",
      image: require("../../../Assets/images/achivement_stall.jpg"),
      description:
        "3-day event + 1 day hack day. DataHack Summit 2023 by Analytics Vidhya is an annual conference that brings together data science and machine learning enthusiasts, experts, and practitioners from around the world. The event is hosted by Analytics Vidhya, a leading platform for data science and machine learning education.The conference is designed to be a collaborative and interactive experience, with plenty of opportunities for networking and knowledge sharing. Delhi & Mumbai team from Sakshath interacted with fellow data science professionals explored new tools and techniques, and gained insights into how data science is transforming industries and shaping the future.AI sessions are led by industry titans like Microsoft, Google, and Amazon. Hack sessions that offer direct engagement with next-gen technologies. Connecting with industry leaders and experts. Workshops led by industry experts. "
    },
    {
      id: 3,
      title:
        "Highlighting the impactful contributions of our employees across Africa",
      image: require("../../../Assets/images/achievement_3.jpg"),
      description:
        "Today, we stand as a close-knit family of over 200+ employees, driven by a shared vision and purpose. We have also successfully established a strong domestic presence in three major metropolitan cities, and we continue to expand our reach globally, serving clients across the globe Good deeds go a long way!This initiative continued; furthermore, they provided desktops and printers for schools. Sanjay is an esteemed member of the Rotary Club, he identified the benefits of the club and claimed up to a 40% discount on sanitary pads, which is a great initiative by a startup in Kartanaka tied up with the Rotary Club.Later in the year, Sakshath Technologies® donated Rotary Club for the education of children. One of the girl children graduated with flying colours this year.",
    },
    {
      id: 4,
      title: "Times 40 under 40 Achiever Awards 2023 ",
      image: require("../../../Assets/images/achievemnet_4.jpg"),
      description:
        "Shravan Kumar - CEO & FOUNDER of Sakshath Technologies® was awarded Times 40 under 40 Achiever Awards 2023 which was organized by The Times Group in Oberoi Gurgaon on 24th July 2023.Embarking on a new chapter filled with joy and excitement, let's take a moment to reflect on our remarkable journey, which began in the year 2012. At its inception, we started as a humble partnership firm known as Saaksh8 Consulting Services. Armed with nothing more than a smidgen of capital and a bold vision, we ventured into uncharted territory.Founder and Managing Director,Sakshath Technologies® for winning Company of the Year - IT Services & IT Consulting in IT Industry at Outlook Business Spotlight- Business Excellence Awards 2023 powered by Digitech Media.While our story may not be a classic rags-to-riches tale, our ascent to stardom came impressively close. In the year 2015, we reached a significant milestone with the birth of Sakshath Technologies®. At the core of our mission is unwavering commitment to the slogan BY THE PEOPLE, FOR THE PEOPLE,and we proudly embrace the motto #Imsakshath.",
    },
  ];

  const [achivementDetails, setAchivementDetails] = useState([]);

  useEffect(() => {
    setAchivementDetails(achivementItem);
  }, []);

  return (
    <>
     <Helmet>
        <title>Our-Achivement</title>
        <meta name="description" content="About SEO" />
      </Helmet>
    
      <section className="our_achievment">
        <div className="container">
          <div className="row">
            {achivementDetails.map((data) => {
              return (
                <div className="col-md-6">
                  <ul className="align">
                    <li>
                      <figure class="book">
                        {/* Front */}

                        <ul class="hardcover_front">
                          <li>
                            <img
                              src={data.image}
                              alt=""
                              width="100%"
                              height="100%"
                              style={{ objectFit: "cover" }}
                            />
                          </li>
                          <li></li>
                        </ul>

                        {/* Pages */}

                        <ul class="page">
                          <li style={{ fontSize: "12px", padding: "10px" }}>
                            {data.description.substring(0, 210)}.. <br />{" "}
                          </li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>

                        {/* Back */}

                        <ul class="hardcover_back">
                          <li></li>
                          <li></li>
                        </ul>
                        <ul class="book_spine">
                          <li></li>
                          <li></li>
                        </ul>
                        <figcaption>
                          <h1>{`${data.title.substring(0, 50)}..`}</h1>

                          <p >{`${data.description.substring(0, 200)}..`}</p>
                          <Link
                            className="book_btn"
                            to={`/our-achievements/${data.title}`}
                            state={data}
                          >
                            Read More..
                          </Link>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
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
