import React from 'react';
import './style.scss'
import { Helmet } from 'react-helmet';
import BreadCumb from '../../../Components/Breadcumb';

import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from '../ApplicationDevelopment/Constant';
import Heading from '../../../Components/Utils/Heading';

const ApplicationReadiness = () => {
  return (
    <>
         <Helmet>
        <title>Automation</title>
        <meta name="description" content="About SEO" />
      </Helmet>
      <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title=""
      />

      <section className='readiness_section mt-4'>
        <div className="container">
            <div className="row text-center">
                <Heading heading="Application Readiness"/>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="readiness_box">
<h4>Efficient Application Deployment
	
</h4>

<ul>
    <li>
    AdminStudio streamlines the process of preparing applications for deployment. It evaluates and ensures compatibility and performance, eliminating manual checks and lengthy cycles1.
	
    </li>
    <li>With AdminStudio, your organization can look forward to a seamless and efficient IT operation, saving time and effort.</li>
</ul>
                    </div>
                </div>
                <div className="col-md-12"></div>
                <div className="col-md-12"></div>
                <div className="col-md-12"></div>
                <div className="col-md-12"></div>
                <div className="col-md-12"></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default ApplicationReadiness