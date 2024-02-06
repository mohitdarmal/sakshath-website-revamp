import React from 'react';
import './style.scss';
import { AUTOMATION_BG_IMG } from './Constant';
import Heading from '../../../Components/Utils/Heading';

const Automation = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="row">
             <div className="col-md-6">
                <div className="cloud_native_content">
                        <Heading heading=" Cloud Native Development"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam velit quibusdam aliquid vel est expedita voluptatum accusamus dolorum.</p>
                </div>
                <div className="div">
                    <ul>
                        <li>Open API business strategy for monetization of APIs</li>
                        <li>Hybrid Integration</li>
                        <li>  Services- Based Integration <br /> <br />
Restful and Restless (SOAP) service integration provides digital integration capabilities. It has small-scale to large-scale application data delivery and integration capabilities.
</li>
                        <li> API Gateway/Manager</li>
                        <li>Social Integration <br /> <br />
integration with social collaboration platforms such as Facebook, Twitter, Instagram, and many more. It consumes their API and integrates the data into the DXP’s application.
</li>
                       
                    </ul>
                </div>
             </div> 
             <div className="col-md-6">
                <div className="cloud_bg_img">
                <img src={AUTOMATION_BG_IMG} alt="" width="600px" />

                </div>
             </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Automation;