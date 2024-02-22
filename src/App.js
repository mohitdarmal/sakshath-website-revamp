import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import RootLayout from "./Layout/RootLayout";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import { Helmet } from "react-helmet";
import BankingSolution from "./Pages/BankingSolution";
import Career from "./Pages/Careers";
import Contactus from "./Pages/Contactus";
import { TailSpin, Watch } from "react-loader-spinner";
import ApplicationDevelopment from "./Pages/Service/ApplicationDevelopment";
import OurJounery from "./Pages/About/Our_Jounery";
//import Contactus from "./Components/Contact/Contact";
import Blog from "./Pages/Blogs";
import BlogDetail from "./Pages/Blogs/BlogDetail";
import OurAchivements from "./Pages/About/Our_Achivements";
// import ScrollUpJounery from "./Pages/About/ScrollUpJounery";
import Integration from "./Pages/Service/Integration";
import Automation from "./Pages/Service/Automation";
import Erp from "./Pages/Service/Erp";
import ManagedServices from "./Pages/Service/ManagedServices";
import Analytics from "./Pages/Service/Analytics";
import ScrollToTop from "./Components/scrollToTop"
import OurTeam from "./Pages/OurTeam";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import Staffing from "./Pages/Staffing";


const App = () => {
  
 
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.onload = () => {
  //     setLoading(false);
  //   };
  // }, []);

  return (
    <>
    
     <ScrollToTop />
      {/* {loading ?
    <div>  
    <TailSpin
 
  height="80"
  width="80"
  radius="1"
  color= "#32A4D5"
  ariaLabel="tail-spin-loading"
  wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0000000d' }}
  wrapperClass=""
  visible={true}
  /><p style={{    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',}}><img width="60" src={require("../src/Assets/images/sakhsath_fevicon.png")} /></p> </div> : 
  <>
  
      </>
  } */}
      <Helmet>
        <title>Home - Sakshath Technologies</title>
        <meta name="description" content="Something SEO" />
      </Helmet>
       <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route
            path="/application-development"
            element={<ApplicationDevelopment />}
          />
          <Route path="/automation" element={<Automation />} />
          <Route path="/erp" element={<Erp />} />
          <Route path="/banking-solution" element={<BankingSolution />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
         

          <Route path="/company-journey" element={<OurJounery />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-achievements" element={<OurAchivements />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* <Route path="/blogs/:id" element={<BlogDetail />} /> */}

          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          <Route path='/staffing' element={<Staffing/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
       
    </>
  );
};

export default App;
