import React, { useEffect, useState } from 'react';
import Heading from '../../Components/Utils/Heading';
import {Link} from "react-router-dom";
import SlideAnimationButton from '../../Components/Utils/SlideAnimationButton';
import "./style.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";


const Blog = () => {
    const blogsdetails = [
        {
            id:1,
            blogTitle:"Build And Launch Powerful Responsive Websites With Editor Perfect Patterns For Screen Reader",
            blogDescription:"Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            tags:["Technology", "Service", "IT", "Development"],
            blogImg:"https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
            blogAuthor:"wqertyu",
            blogDate:"8 Feb 2024"


        },
        {
            id:2,
            blogTitle:"Responsive Websites With Editor Perfect Patterns For Screen Reader",
            blogDescription:"Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            tags:["Technology", "Service"],
            blogImg:"https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
            blogAuthor:"wqertyu",
            blogDate:"8 Feb 2024"

        },
        {
            id:3,
            blogTitle:"Launch Powerful Responsive Websites With Editor Perfect Patterns For Screen Reader",
            blogDescription:"Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            tags:["Technology", "Service"],
            blogImg:"https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
            blogAuthor:"wqertyu",
            blogDate:"8 Feb 2024"

        },
        {
            id:4,
            blogTitle:"Build And Launch Powerful Responsive Websites With Editor Perfect Patterns For Screen Reader",
            blogDescription:"Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totae rem aperiam, eaque ipsa quae abillo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            tags:["Technology", "Service"],
            blogImg:"https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
            blogAuthor:"srishti",
            blogDate:"8 Feb 2024"

        }
    ]
    const [blogData , setBlogData] = useState([])
    useEffect(()=>{
        setBlogData(blogsdetails)
    },[])
  return (
    <>
      <section className='blog_page'>
        <div className="container blog_box_container">
            <div className="row blog_row">
            {blogData.map((blognews)=>{
                return(
                    <div className="col-md-12 blog_box">
                      
                       <div className='recent_blog_list'>
                        <div className='blog_content1'>
                          <div className='blog_img'>
                           <img src={blognews.blogImg} alt=""  />
                          </div>
                          
                          <div className='blog_title'>
                              <div className="blog_date_author-box">
                               <div className="blog_date_box">
                               <p className='blog_date'><MdOutlineDateRange />&nbsp;{blognews.blogDate}</p>
                               </div>
                               <div className="author_box">
                                <p className='blog_author'><IoIosPerson />&nbsp;{blognews.blogAuthor}</p>
                               </div>
                               </div>
                         
                            <h2 className='blog_mainHeading'>
                                
                                {`${blognews.blogTitle}`}
                                
                            </h2>
                            <p className='blog_description'>{`${blognews.blogDescription.substring(0, 160)}`}...</p>
                            <Link to={`/blogs/${blognews.blogTitle}`} className='cta_button' state={blognews}>Read More</Link>
                          </div>

                        </div>
                       </div>

                    </div>
                    

                )

            })}
            <div className="col-md-6"></div>
                
            </div>
        </div>
      </section>
    </>
  )
}

export default Blog
