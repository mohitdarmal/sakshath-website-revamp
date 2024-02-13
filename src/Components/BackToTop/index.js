import React, {useState, useEffect} from "react";
import { FaChevronUp } from "react-icons/fa";
import "./style.scss";

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState("");

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setBackToTop(scrollTop > 300); // You can adjust this threshold as needed
      };

    const scrollToTop = () => {
        window.scrollTo({
            top:0, 
            behavior:"smooth"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <button  className={`back-to-top-button ${backToTop ? 'toTop' : ''}`}
            onClick={scrollToTop} >
            <FaChevronUp />
        </button>
    )
}

export default BackToTop;