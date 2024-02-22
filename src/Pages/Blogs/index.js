import React, { useEffect, useState } from 'react';
import Heading from '../../Components/Utils/Heading';
import {Link} from "react-router-dom";
import SlideAnimationButton from '../../Components/Utils/SlideAnimationButton';
import "./style.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import BreadCumb from "../../Components/Breadcumb";
import { ABOUT_BANNER, CARRER_IMG } from '../../Components/Breadcumb/Constant';

const Blog = () => {
    
    const blogsdetails = [
        {
            id:1,
            blogTitle:"Composable ERP solutions: providing distributors with future-proofing, flexibility, and agility",
            blogDescription:"Composable ERP solutions represent a cutting-edge approach to enterprise resource planning, emphasizing modularity and flexibility in system architecture. Significance of Future-Proofing, Flexibility, and Agility in Distribution. The dynamics of the distribution industry necessitate adaptive strategies. Composable ERP solutions play a pivotal role in ensuring distributors are equipped with future-proofing capabilities, flexibility, and the agility required to navigate the ever-evolving market.",
            tags:["Technology", "Service", "IT", "Development"],
            blogImg:"https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
            blogAuthor:"wqertyu",
            blogAuthor_img:require("../../Assets/images/javalogo.png"),
            blogDate:"8 Feb 2024"


        },
        {
            id:2,
            blogTitle:"ERP Solutions Help Manufacturers Get New Products to Market Faster - and Better",
            blogDescription:"In the intricate world of manufacturing, Enterprise Resource Planning (ERP) is a comprehensive software solution designed to integrate and manage core business processes. This includes everything from production and procurement to finance and human resources. The contemporary manufacturing landscape demands a delicate balance between speed and quality in bringing new products to market. This article explores how ERP solutions play a pivotal role in achieving this equilibrium, providing manufacturers with the tools to streamline processes and enhance outcomes.",
            tags:["Technology", "Service"],
            blogImg:"https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
            blogAuthor:"wqertyu",
            blogDate:"8 Feb 2024"

        },
        {
            id:3,
            blogTitle:"Three Great Benefits of SYSPRO Espresso - Mobile ERP for Manufacturers",
            blogDescription:"SYSPRO Espresso stands as a revolutionary mobile Enterprise Resource Planning (ERP) solution designed specifically for manufacturers. Offering a dynamic interface and advanced functionalities, it redefines how manufacturers engage with their production processes on the go.",
            tags:["Technology", "Service"],
            blogImg:"https://muntech.vercel.app/assets/images/blog/blog-single-1.jpg",
            blogAuthor:"wqertyu",
            blogAuthor_img:require("../../Assets/images/javalogo.png"),
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

// const [page, setPage] = useState(1);
// CONST [limit, setLimit] = useState(3);


  return (
    <>
     <BreadCumb imgUrl={ABOUT_BANNER} title="Blogs" className="img-fluid" />
      <section className='blog_page'>
        <div className="container blog_box_container">
            <div className="row blog_row">
            {blogData.map((blognews)=>{
                return(
                    <div className="col-md-4 blog_box">
                      
                       <div className='recent_blog_list'>
                       
                          <div className='blog_img'>
                           <img src={blognews.blogImg} alt="" className='img-fluid' />
                          </div>
                          
                          <div className='blog_content'>
                           
                              <div className="blog_date_author-box">
                               <div className="blog_date_box">
                               <p className='blog_date'><MdOutlineDateRange />&nbsp;{blognews.blogDate}</p>
                               </div>
                               <div className="author_box">
                                <p className='blog_author'><IoIosPerson />&nbsp;{blognews.blogAuthor}</p>
                               </div>
                               </div>
                         
                            <h2 className='blog_mainHeading'>
                                
                                {`${blognews.blogTitle.substring(0, 40)}...`}
                                
                            </h2>
                            <p className='blog_description'>{`${blognews.blogDescription.substring(0, 150)}`}...</p>
                            <Link to={`/blogs/${blognews.blogTitle}`} className='cta_button' state={blognews}>Read More</Link>
                          </div>
 
                       </div>

                    </div>
                    

                )

            })}
            
                
            </div>
        </div>
      </section>
    </>
  )
}

export default Blog
