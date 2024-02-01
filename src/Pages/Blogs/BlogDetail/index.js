import React from 'react'
import { useLocation } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";
import "./style.scss";
import { IoIosSearch } from "react-icons/io";

const BlogDetail = () => {

    const {state} = useLocation();
console.log(state, "State")
  return (
    <>
      <section className='blogDetail_page'>
        <div className="container">
            <div className="row">
                <div className="col-md-9 blogDetail_content_page">
                    <div className="blogdetail_img_box">
                        <img src={state.blogImg} alt="" />
                    </div>
                    <div className="blogdetail_content_box">
                        <div className="blogdetail_date_box">
                            <p className='blogdetail_date'><MdOutlineDateRange />&nbsp;{state.blogDate}</p>
                        </div>
                        <h2 className='blogdetail_mainHeading'>{state.blogTitle}</h2>
                        <p className='blogdetail_description'>{state.blogDescription}</p>

                        <div className="popular_tags_sharenews_box">
                            <div className="popular_tags">
                                <h6>Popular Tags:{state.tags}</h6>

                            </div>
                            <div className="sharenews">
                                <h6>Share news:</h6>
                            </div>
                        </div>

                            
                    </div>
                </div>

                <div className="col-md-3 blogDetail_search_box_recentnews">
                   <div className="search_box">
                    <h4>Search</h4>
                    <div className="form fg_search">
                     <div className="search_input_box">
                       <input type="text"  placeholder='Search' />
                     </div>
                     <div className="magnifying_glass_box">
                      <IoIosSearch />
                     </div>
                      
                    </div>
                   

                   </div>

                   {/* <div className="recentnews_box">
                    <div className="recent_news">
                      <div className="row">
                        <div className="col-md-6">
                            <div className="recent_news_img_box">
                                <img src={state.blogImg} alt="" />
                            </div>
                            <div className="recent_news_content_box">
                                <div className="recent_news_title_box">
                                    <h5>{state.blogTitle}</h5>
                                </div>
                            </div>

                        </div>
                      </div>
                     

                    </div>
                   </div> */}


                </div>
            </div>
                
            
            
        </div>
            
     
      </section>
    </>
  )
}

export default BlogDetail
