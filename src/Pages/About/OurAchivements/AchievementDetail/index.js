import React, { useState, useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import "./style.scss";
import { IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  YOUTUBE_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON,
} from "../../../Contactus/Constant";
import { Helmet } from "react-helmet";

// from "../../Contactus/Constant";
const AchievementDetail = () => {
  const { state } = useLocation();
  console.log(state, "State");
  const SideAchivmentdetails = [
    {
      id: 1,
      title:
        "Redefining Tomorrow: Shravan Kumar’s Quest at Sakshath Technologies",
      image: require("../../../../Assets/images/Achivement40.jpg"),
      description:
        "Selected as World’s Best Emerging Leader, Shravan Kumar, CEO and Founder of Sakshath Technologies exemplifies the impact of visionary thinking and innovative strategies in the tech sector. His commitment to technological advancement and user-centric design has positioned the company as a leading force in the industry, with a promising trajectory for future innovations.The role of leadership stands as the fundamental driver behind an organization’s triumph or downfall. Great leadership isn’t merely about managing; it’s about inspiring, innovating, and steering the collective towards  a unified vision. The essence of exceptional business leadership embodies a unique blend of vision, empathy, adaptability, and the ability to inspire others to transcend their limits.At the helm of successful businesses lie extraordinary leaders whose impact reaches far beyond balance sheets and profit margins. These leaders not only set ambitious goals but also nurture a culture that empowers their teams, encouraging creativity and fostering an environment where ideas flourish. One of the defining traits of great business leaders is their unwavering vision. They possess the innate ability to foresee opportunities amidst challenges and navigate uncharted territories. Their foresight often transcends the immediate horizon, paving the way for innovation and growth.In the dynamic landscape of technology and software consulting, the name Shravan Kumar shines brightly, interwoven with the story of Sakshath Technologies, a firm that epitomizes innovation and digital transformation. Led by Kumar’s visionary guidance, Sakshath Technologies has become a pioneering force in revolutionising the way we perceive and interact with technology.Kumar’s leadership has been marked by a relentless pursuit of innovation. His commitment to staying ahead of the curve has resulted in the development of cutting-edge products and services. Sakshath Technologies has been recognized for its transformative solutions, notably in SYSPRO services.The role of leadership stands as the fundamental driver behind an organization’s triumph or downfall. Great leadership isn’t merely about managing; it’s about inspiring, innovating, and steering the collective towards a unified vision. The essence of exceptional business leadership embodies a unique blend of vision, empathy, adaptability, and the ability to inspire others to transcend their limits. At the helm of successful businesses lie extraordinary leaders whose impact reaches far beyond balance sheets and profit margins. These leaders not only set ambitious goals but also nurture a culture that empowers their teams, encouraging creativity and fostering an environment where ideas flourish. One of the defining traits of great business leaders is their unwavering vision. They possess the innate ability to foresee opportunities amidst challenges and navigate uncharted territories. Their foresight often transcends the immediate horizon, paving the way for innovation and growth. In the dynamic landscape of technology and software consulting, the name Shravan Kumar shines brightly, interwoven with the story of Sakshath Technologies, a firm that epitomizes innovation and digital transformation. Led by Kumar’s visionary guidance, Sakshath Technologies has become a pioneering force in revolutionising the way we perceive and interact with technology. Kumar’s leadership has been marked by a relentless pursuit of innovation. His commitment to staying ahead of the curve has resulted in the development of cutting-edge products and services. Sakshath Technologies has been recognized for its transformative solutions, notably in SYSPRO services.",
    },
    {
      id: 2,
      title: "Analytics Vidhya - DataHack Summit 2023",
      image: require("../../../../Assets/images/achivement_stall.jpg"),
      description:
        "3-day event + 1 day hack day. DataHack Summit 2023 by Analytics Vidhya is an annual conference that brings together data science and machine learning enthusiasts, experts, and practitioners from around the world. The event is hosted by Analytics Vidhya, a leading platform for data science and machine learning education.The conference is designed to be a collaborative and interactive experience, with plenty of opportunities for networking and knowledge sharing. Delhi & Mumbai team from Sakshath interacted with fellow data science professionals explored new tools and techniques, and gained insights into how data science is transforming industries and shaping the future.AI sessions are led by industry titans like Microsoft, Google, and Amazon. Hack sessions that offer direct engagement with next-gen technologies. Connecting with industry leaders and experts. Workshops led by industry experts. ",
    },
    {
      id: 3,
      title:
        "Highlighting the impactful contributions of our employees across Africa.",
      image: require("../../../../Assets/images/achievemnt_img_three.jpg"),
      description:
        "Today, we stand as a close-knit family of over 150 employees, driven by a shared vision and purpose. We have also successfully established a strong domestic presence in three major metropolitan cities, and we continue to expand our reach globally, serving clients across the globe Good deeds go a long way!This initiative continued; furthermore, they provided desktops and printers for schools. Sanjay is an esteemed member of the Rotary Club, he identified the benefits of the club and claimed up to a 40% discount on sanitary pads, which is a great initiative by a startup in Kartanaka tied up with the Rotary Club.Later in the year, Sakshath Technologies donated Rotary Club for the education of children. One of the girl children graduated with flying colours this year.",
    },
    {
      id: 4,
      title: "Times 40 under 40 Achiever Awards 2023 ",
      image: require("../../../../Assets/images/achievemnet_4.jpg"),
      description:
        "Shravan Kumar - CEO & FOUNDER of Sakshath Technologies was awarded Times 40 under 40 Achiever Awards 2023 which was organized by The Times Group in Oberoi Gurgaon on 24th July 2023.Embarking on a new chapter filled with joy and excitement, let's take a moment to reflect on our remarkable journey, which began in the year 2012. At its inception, we started as a humble partnership firm known as Saaksh8 Consulting Services. Armed with nothing more than a smidgen of capital and a bold vision, we ventured into uncharted territory.Founder and Managing Director, Sakshath Technologies for winning Company of the Year - IT Services & IT Consulting in IT Industry at Outlook Business Spotlight- Business Excellence Awards 2023 powered by Digitech Media.While our story may not be a classic rags-to-riches tale, our ascent to stardom came impressively close. In the year 2015, we reached a significant milestone with the birth of SAKSHATH TECHNOLOGIES. At the core of our mission is unwavering commitment to the slogan BY THE PEOPLE, FOR THE PEOPLE,and we proudly embrace the motto #Imsakshath.Today, we stand as a close-knit family of over 150 employees, driven by a shared vision and purpose. We have also successfully established a strong domestic presence in three major metropolitan cities, and we continue to expand our reach globally, serving clients across the globe.This recognition is a testament to their exceptional skills, innovative strategies, and unwavering commitment to excellence. Wishing you continued success and many more accolades to come!",
    },
  ];
  const [sideAchivmentData, setSideAchivmentData] = useState([]);
  useEffect(() => {
    setSideAchivmentData(SideAchivmentdetails);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our-Achivement</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <section className="achievement_detail_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className=" achievement_content_page">
                <div className="achievement_detail_image_section">
                  <img src={state.image} alt="" className="img-fluid" />
                </div>
                <div className="achievement_content_box">
                  {/* <div className="blogdetail_date_box">
                    <p className="blogdetail_date">
                      <MdOutlineDateRange />
                      &nbsp;{state.title}
                    </p>
                  </div> */}
                  <h2 className="achievement_mainHeading">{state.title}</h2>
                  <p className="achievement_description" style={{ whiteSpace: 'pre-line', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    {/* {state.description} */}
                    {/* return text.split('\\\\n').join('<br />'); */}
                    {`${state.description.split('\\n').join('<br />').substring(0, 1000)}`}

                  </p>
                  <img src={state.image} alt="" className="img-fluid" />
                  <p className="achievement_description">
                  {`${state.description.split('\\n').join('<br />').substring(1001, 10000)}`}

                  </p>

                  <div className="popular_tags_sharenews_box">
                    <div className="popular_tags">
                      <h6>Popular Tags:{state.tags}</h6>
                    </div>
                    <div className="sharenews">
                      <h6>
                        Share news:
                        <Link
                          to="https://www.instagram.com/sakshath_technologies/"
                          target="_blank"
                        >
                          <img src={INSTAGRAM_ICON} />
                        </Link>
                        <Link
                          to="https://www.linkedin.com/company/sakshath-technologies/"
                          target="_blank"
                        >
                          <img src={LINKEDIN_ICON} />
                        </Link>
                        <Link
                          to="https://www.youtube.com/watch?v=UHjZFuO8AYY"
                          target="_blank"
                        >
                          <img src={YOUTUBE_ICON} />
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="achievement_search_box_recent_achievement">
                {/* <div className="search_box">
                  <h4>Search</h4>
                  <div className="form fg_search">
                    <div className="search_input_box">
                      <input type="text" placeholder="Search" />
                    </div>
                    <div className="magnifying_glass_box">
                      <IoIosSearch />
                    </div>
                  </div>
                </div> */}

                <div className="achievement_box">
                  <div className="achievement_news">
                    <h5 className="top_of_recent_newsbox_heading">
                      {" "}
                      Recent Achievements
                    </h5>
                    <div className="row">
                      {sideAchivmentData.map((data) => {
                        return (
                          <div className="col-md-12 recent_achievement_column">
                            <div className="recent_achievement_img_box">
                              <img
                                src={data.image}
                                alt=""
                                // className="img-fluid"
                              />
                            </div>
                            <div className="recent_achievement_content_box">
                              <div className="recent_achievement_title_box">
                                <h5>{`${data.title.substring(0, 100)}...`}</h5>
                              </div>
                              {/* <div className="recent_news_date_box">
                                <p className="recentnews_blog_date">
                                  <MdOutlineDateRange />
                                  &nbsp;{data.description}
                                </p>
                              </div> */}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="best_tags_box_wrapper_box">
                  <div className="best_tags_wrapper">
                    <div className="best_tags_box">
                      <h4>Best Tags</h4>
                    </div>
                    <div className="tags_box">
                      <div className="tag1_box">
                        <Link className="tags_design">SERVICE</Link>
                      </div>
                      <div className="tag2_box">
                        <Link className="tags_design">TECHNOLOGY</Link>
                      </div>
                      <div className="tag3_box">
                        <Link className="tags_design">TEAM</Link>
                      </div>
                      <div className="tag4_box">
                        <Link className="tags_design">SOLUTIONS</Link>
                      </div>
                      <div className="tag5_box">
                        <Link className="tags_design">CONSULTANCY</Link>
                      </div>

                      <div className="tag6_box">
                        <Link className="tags_design">IT COMPANY</Link>
                      </div>
                      <div className="tag7_box">
                        <Link className="tags_design">AGENCY</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementDetail;
