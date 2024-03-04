import React from 'react'
import  BreadCumb  from "../../../Components/Breadcumb";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../ApplicationDevelopment/Constant";
import "./style.scss";
import SlideAnimationButton from '../../../Components/Utils/SlideAnimationButton';
import { MANAGED_SERVICE_SECTION_RIGHT_IMG,MANAGED_SERVICE_SECTION_LEFT_IMG } from './Constant';
import {Fade} from "react-awesome-reveal";
import Heading from '../../../Components/Utils/Heading';

const ManagedServices = () => {
  return (
    <>
    <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Managed Services"
      />


      {/* @@@@@@@@@@  overview for managed services starts @@@@@@@@@@@@@@@@@ */}

      <section className="overview_managed_services_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="overview_sec_left_managed_services">
                            {/* <h1 className="overview_sec_managed_services_heading">Overview</h1> */}
                            <Fade direction="up" delay={300} triggerOnce>
                            <Heading heading="Unlock Effective Knowledge Management with Our Services" uppercase=""/>
                            </Fade>
                            <Fade direction="up" delay={300} triggerOnce>
                            <p className="overview_sec_managed_services_para">At Sakshath, we understand the challenges businesses face in today's fast-paced environment. The constant demand for efficiency and the ever-present risks can be overwhelming. Discover seamless managed services offering effective knowledge management, continuous support, flexible pricing, and risk mitigation for your business needs.</p>
                            </Fade>
                            <Fade direction="up" delay={300} triggerOnce>
                            <SlideAnimationButton btnName="GET STARTED" />
                            </Fade>


                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="overview_sec_right_managed_services_img">
                                <img className="img-fluid managed_services_img" src={MANAGED_SERVICE_SECTION_RIGHT_IMG} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* @@@@@@@@@@  overview for managed services ends @@@@@@@@@@@@@@@@@ */}

            {/* @@@@@@@@@@@@  flowchart for process of managed services  starts @@@@@@@@@@@@@@@ */}
            <section className='managed_service_flowchart_sec'>
            {/* //<h2>Process</h2> */}
            <div className='container-fluid'>
            <Fade direction="up" delay={300} triggerOnce>
               <div className='row'>
                <div className='col-md-2 managed_service_box bg1'>
                  <div className='managed_service_content'>
                    <p>1</p>
                    <h5>Seamless Transition Approach</h5>
                  </div>
                </div>

                <div className='col-md-2  managed_service_box bg2'>
                  <div className='managed_service_content'>
                    <p>2</p>
                    <h5>Effective Knowledge Management</h5>
                  </div>
                </div>

                <div className='col-md-2 managed_service_box bg3'>
                  <div className='managed_service_content'>
                    <p>3</p>
                    <h5>Continous Service Improvement</h5>
                  </div>
                </div>

                <div className='col-md-2 managed_service_box bg4'>
                  <div className='managed_service_content'>
                    <p>4</p>
                    <h5>Governance Model</h5>
                  </div>
                </div>

                <div className='col-md-2 managed_service_box bg5'>
                  <div className='managed_service_content'>
                    <p>5</p>
                    <h5>Risk Management</h5>
                  </div>
                </div>

                <div className='col-md-2 managed_service_box bg6'>
                  <div className='managed_service_content'>
                    <p>6</p>
                    <h5>Flexible Pricing Model</h5>
                  </div>
                </div>
               </div>
              </Fade> 
               </div>
            </section>








            {/* @@@@@@@@@@@@  flowchart for process of managed services  ends @@@@@@@@@@@@@@@ */}


            {/* @@@@@@@@@@@@@@@  managed service main content starts @@@@@@@@@@@@@@@@@@ */}

            <section className="content_managed_services_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <div className="content_sec_left_managed_services_img">
                                <img className="img-fluid managed_services_img" src={MANAGED_SERVICE_SECTION_LEFT_IMG} />
                            </div>
                        </div>
                        <div className="col-md-6">

                        <div className="content_sec_right_managed_services">
                        <Fade direction="up" delay={300} triggerOnce>

                         <Heading heading="Overview" uppercase="" />
                         </Fade>
                            {/* <h1 className="overview_sec_managed_services_heading">Overview</h1> */}
                            {/* <BlueHeading bheading="overview" uppercase="text-uppercase"/> */}
                            {/* <p className="content_sec_managed_services_para"> */}
                            <Fade direction="up" delay={300} triggerOnce>
                            <ul>
                              <li className='managed_services_main_content'>
                              The audit encompasses a thorough examination of licenses, system capacity, and infrastructure to identify any inefficiencies or vulnerabilities. Recommendations will focus on rationalizing resources, optimizing operations, and decommissioning redundant elements to eliminate single points of failure.
                              </li>
                              <li>Building and consolidating key systems such as Knowledge Management Systems (KMS), Wikis, and Service Level Agreements (SLAs), along with providing troubleshooting guidelines, will enhance organizational efficiency. Automation initiatives targeting deployment and self-service processes will streamline operations and reduce manual intervention.</li>
                              <li>Training and awareness programs will ensure staff proficiency and understanding of best practices. Continual optimization efforts will address system risks, both infrastructure and application-related, along with resource and engagement risks, particularly regarding dependencies on third-party services that could impact SLAs. </li>
                              
                            </ul>
                            </Fade>
                            






                            {/* <SlideAnimationButton btnName="TALK TO SALES" /> */}

                        </div>
                           

                        </div>
                    </div>
                </div>
            </section>


            {/* @@@@@@@@@@@@@@@  managed service main content ends @@@@@@@@@@@@@@@@@@ */}
      
    </>
  )
}

export default ManagedServices
