import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesOutline, IoCloseSharp  } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";


const FloatingActionButton = () => {

    const [backToTop, setBackToTop] = useState("");
  const mainClassName = "social hide";
  const close_button = "close-button";
 
  const [classname, setClassname] = useState(mainClassName);
  const [close, setClosebutton] = useState(close_button);
//   const socialHideBtn_btn = "floating_action_btn"
//   const [socialHideBtn, setSocialHideBtn] = useState(socialHideBtn_btn)

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setBackToTop(scrollTop > 200);  
  };


useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  function toggleFloatingButton() {
    if (classname == "social") {
      setClassname("social hide");
      setClosebutton("close-button");
    //   setSocialHideBtn("floating_action_btn")
    } else {
      setClassname("social");
      setClosebutton("close-button close-button-rotate");
    //   setSocialHideBtn("floating_action_btn show_btn")
    }
  }

  return (
    <div className={`floating_button ${backToTop ? 'toTop' : ''}`}>
        
      <Link className={classname} to="tel:+918067819878">
        <FaPhoneVolume />
      </Link>
      <Link className={classname} to="mailto:info@sakshath-technologies.com">
       <MdMarkEmailUnread />
      </Link>
      
      <Link className={close} onClick={toggleFloatingButton} href="#">
       {close === "close-button" ? <IoChatbubbleEllipsesOutline /> : <IoCloseSharp />} 
      </Link>
    </div>
  );
};

export default FloatingActionButton;
