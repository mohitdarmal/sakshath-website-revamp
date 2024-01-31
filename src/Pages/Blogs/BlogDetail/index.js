import React from 'react'
import { useLocation } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";
import "./style.scss";

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

                <div className="col-md-3 blogDetail_search_box">


                </div>
            </div>
                
            
            
        </div>
            
     
      </section>
    </>
  )
}

export default BlogDetail
