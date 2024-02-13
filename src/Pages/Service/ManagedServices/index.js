import React from 'react'
import  BreadCumb  from "../../../Components/Breadcumb";
import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../ApplicationDevelopment/Constant";
import "./style.scss";
import SlideAnimationButton from '../../../Components/Utils/SlideAnimationButton';
import { INTEGRATION_SECTION_ONE_IMG } from '../Integration/Constant';
import BlueHeading from '../../../Components/Utils/BlueHeading';

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
                            <BlueHeading bheading="overview" uppercase="text-uppercase"/>
                            <p className="overview_sec_managed_services_para">Data integration is the practice of consolidating data from disparate sources into a single dataset to provide users with consistent access to and delivery of data across all business processes.</p>
                            <SlideAnimationButton btnName="TALK TO SALES" />

                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="overview_sec_right_managed_services_img">
                                <img className="img-fluid managed_services_img" src={INTEGRATION_SECTION_ONE_IMG} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* @@@@@@@@@@  overview for managed services ends @@@@@@@@@@@@@@@@@ */}

            {/* @@@@@@@@@@@@  flowchart for process of managed services  starts @@@@@@@@@@@@@@@ */}
            <section className='managed_service_flowchart_sec'>
            <div className='container-fluid'>
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
               </div>
            </section>








            {/* @@@@@@@@@@@@  flowchart for process of managed services  ends @@@@@@@@@@@@@@@ */}
      
    </>
  )
}

export default ManagedServices
