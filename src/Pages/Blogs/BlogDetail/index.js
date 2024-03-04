import React, { useState, useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import "./style.scss";
import { IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  
  YOUTUBE_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON
} from "../../Contactus/Constant";

const BlogDetail = () => {
  const { state } = useLocation();
  console.log(state, "State");
  const side_blogsdetails = [
    {
      id: 1,
      blogTitle:
        "Composable ERP solutions: providing distributors with future-proofing, flexibility, and agility",
      blogDescription:
        "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      tags: ["Technology", "Service", "IT", "Development"],
      blogImg:
        "https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
      blogAuthor: "wqertyu",
      blogDate: "8 Feb 2024",
    },
    {
      id: 2,
      blogTitle:
        "Responsive Websites With Editor Perfect Patterns For Screen Reader",
      blogDescription:
        "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      tags: ["Technology", "Service"],
      blogImg:
        "https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
      blogAuthor: "wqertyu",
      blogDate: "8 Feb 2024",
    },
    {
      id: 3,
      blogTitle:
        "Launch Powerful Responsive Websites With Editor Perfect Patterns For Screen Reader",
      blogDescription:
        "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      tags: ["Technology", "Service"],
      blogImg:
        "https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
      blogAuthor: "wqertyu",
      blogDate: "8 Feb 2024",
    },
    {
      id: 4,
      blogTitle:
        "Build And Launch Powerful Responsive Websites With Editor Perfect Patterns For Screen Reader",
      blogDescription:
        "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      tags: ["Technology", "Service"],
      blogImg:
        "https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
      blogAuthor: "srishti",
      blogDate: "8 Feb 2024",
    },
  ];
  const [sideblogData, setSideblogData] = useState([]);
  useEffect(() => {
    setSideblogData(side_blogsdetails);
  }, []);

  return (
    <>
      <section className="blogDetail_page">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className=" blogDetail_content_page">
                <div className="blogdetail_img_box">
                  <img src={state.blogImg} alt=""  className="img-fluid"/>
                </div>
                <div className="blogdetail_content_box">
                  <div className="blogdetail_date_box">
                    <p className="blogdetail_date">
                      <MdOutlineDateRange />
                      &nbsp;{state.blogDate}
                    </p>
                  </div>
                  <h2 className="blogdetail_mainHeading">{state.blogTitle}</h2>
                  <p className="blogdetail_description">
                    {state.blogDescription}
                  </p>
                  <img src={state.blogImg_blog_detail_img} alt="" className="img-fluid blogdetail_img2"/>
                  <p className="blogdetail_description">
                    {state.blogDescription}
                  </p>


                  <div className="popular_tags_sharenews_box">
                    <div className="popular_tags">
                      <h6>Popular Tags:{state.tags}</h6>
                    </div>
                    <div className="sharenews">
                      <h6>Share news:
                      <Link to="https://www.instagram.com/sakshath_technologies/" target="_blank">
          <img src={INSTAGRAM_ICON} />
        </Link>
        <Link to="https://www.linkedin.com/company/sakshath-technologies/" target="_blank">
          <img src={LINKEDIN_ICON} />
        </Link>
        <Link to="https://www.youtube.com/watch?v=UHjZFuO8AYY" target="_blank">
          <img src={YOUTUBE_ICON} />
        </Link>
        </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="blogDetail_search_box_recentnews">
                <div className="search_box">
                  <h4>Search</h4>
                  <div className="form fg_search">
                    <div className="search_input_box">
                      <input type="text" placeholder="Search" />
                    </div>
                    <div className="magnifying_glass_box">
                      <IoIosSearch />
                    </div>
                  </div>
                </div>

                <div className="recentnews_box">
                  <div className="recent_news">
                    <h5 className="top_of_recent_newsbox_heading">
                      {" "}
                      Recent news
                    </h5>
                    <div className="row">
                      {sideblogData.map((data) => {
                        return (
                          <div className="col-md-12 recent_news_column">
                            <div className="recent_news_img_box">
                              <img
                                src={data.blogImg}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="recent_news_content_box">
                              <div className="recent_news_title_box">
                                <h5>{`${data.blogTitle.substring(
                                  0,
                                  50
                                )}...`}</h5>
                              </div>
                              <div className="recent_news_date_box">
                                <p className="recentnews_blog_date">
                                  <MdOutlineDateRange />
                                  &nbsp;{data.blogDate}
                                </p>
                              </div>
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

export default BlogDetail;
