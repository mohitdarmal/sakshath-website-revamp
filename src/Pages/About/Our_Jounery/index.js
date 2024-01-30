// import React from 'react'
// import Heading from '../../../Components/Utils/Heading';

// const OurJounery = () => {
//   return (
//     <>
//         <section>
//             <div className="container">
//                 <div className="row">
//                     {/* <p>TimeLines</p> */}
//                     <Heading heading="Timelines" uppercase="uppercase"/>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default OurJounery;

import React from "react"
import { Chrono } from "react-chrono";

const OurJounery = () => {
  const items = [{
    title: " 2012",
    cardTitle: "Something Text",
    // url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
     type: "IMAGE",
      source: {
        url: ""
      }
    }
  },
  {
    title: " 2013",
    cardTitle: "Something Text",
    // url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   
  }, 
  {
    title: "2014",
    cardTitle: "Something Text",
    // url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   
  }, ];

  return (
    <>

  

    <section>
        <div className="container">
            <div className="row">
            <div style={{ width: "700px", height: "400px" , overflowY:'hidden'}}>
      <Chrono items={items} mode="VERTICAL"/>
    </div>
            </div>
        </div>
    </section>
   
    </>
  )
}

export default OurJounery;