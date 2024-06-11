import React from "react";
import BreadCumb from "../../Components/Breadcumb";
import "./styles.scss";
import "../../Components/Utils/Heading2";
//import { APPLICATION_DEVLOPMENT_BREADCUMB_IMG } from "../Service/ApplicationDevelopment/Constant";
export const PrivacyPolicy=()=>
{
    return(
        <>
       {/* <BreadCumb
        imgUrl={APPLICATION_DEVLOPMENT_BREADCUMB_IMG}
        title="Privacy Policy"
      /> */}

      {/* intro information we collect start */}
      <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="privacy_policy_intro_para">
                        <p>This Privacy Policy describes how Sakshath Technologies we collects, 
                            uses, and discloses the personal information collected from users of our website ("the Platform"). 
                            By using our services, you agree to the terms outlined in this privacy policy.</p>
                    </div>
                    <div className="information_we_collect_section">
                        <h4 className="Personal_Information"> Personal Information</h4>
                        <p className="Personal_Information_para"> We may collect personal information when you use our platform, such as your name, 
                            email address, company name, phone number, and resume. This information is collected when you fill out forms,
                             subscribe to newsletters, or submit job applications.</p>
                        <h4 className="Usage_Information"> Usage Information</h4>
                        <p className="Usage_Information_para">  We gather information about your interactions with the platform, including your IP address,
                         browser type, and pages visited. This helps us understand how you navigate our site,
                         improve user experience, and ensure the security of our services.</p>

                    </div>

                </div>
            </div>
        </div>
      </section>
      {/* intro information we collect end */}



        {/* LEGAL BASIS FOR PROCESSING start */}
        <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="legal_basis_for_processing_section">
                        <h4 className="legal_basis_for_provessing">LEGAL BASIS FOR PROCESSING</h4>
                        <h5 className="consent_heading">Consent:</h5>
                        <p className="consent_para">
                        By using the platform, you provide explicit consent for the processing of your data as outlined in this privacy policy.
                        </p>
                        <h5 className="Contractual_necessity_heading">Contractual Necessity</h5>
                        <p className="Contractual_necessity_para">
                        Certain processing activities are necessary for the performance of a contract between you and [Your Company Name]. For instance, to provide the services you have requested.
                        </p>
                        <h5 className="Legal_Obligations_heading">Legal Obligations</h5>
                        <p className="Legal_Obligations_para">We may process your personal data to comply with legal obligations, such as tax or regulatory requirements.</p>

                        </div>

                </div>
            </div>
        </div>
      </section>
      {/* LEGAL BASIS FOR PROCESSING end */}


       {/*  USE OF INFORMATION start */}
       <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="use_of_information_section">
                        <h4 className="use_of_information_heading">USE OF INFORMATION</h4>
                        <h5 className="providing_services_heading">Providing Services</h5>
                        <p className="providing_service_para"> We use the collected information to provide and improve our services. 
                        For example, personalizing your experience, responding to inquiries, and ensuring the proper functioning of our Platform.
                        </p>
                        <h5 className="communication_heading">Communication</h5>
                        <p className="communiaction_para"> Your contact information may be used to send you updates, newsletters, and promotional materials related to our services. 
                        You have the option to opt out of these communications at any time.</p>
                        <h5 className="analytics_heading">Analytics</h5>
                        <p className="analytics_para">We leverage analytics tools like Google Analytics to gain insights into user behavior.
                         This helps us make informed decisions to enhance our services.
                         Non-personal information may be shared with third-party service providers for these purposes.</p>
                    </div>

                </div>
            </div>
        </div>
      </section>
      {/*  USE OF INFORMATION end */}


       {/*  SHARING OF INFORMATION start */}
       <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sharing_of_information_section">
                        <h4 className="sharing_of_information_heading">SHARING OF INFORMATION</h4>
                        <h5 className="Third_Party_Service_Providers_heading">Third-Party Service Providers</h5>
                        <p className="Third_Party_Service_Providers_para">We may share your information with trusted third-party service providers
                         who assist us in operating the Platform, conducting our business, or servicing you. These entities are contractually obligated to 
                         maintain the confidentiality and security of your data.
                        </p>
                        <h5 className="Legal_Compliance_heading">Legal Compliance</h5>
                        <p className="Legal_Compliance_para">Your information may be disclosed if required by law, in response to legal requests, 
                        or to protect our rights, privacy, safety, or property.
                        </p>

                    </div>

                </div>
            </div>
        </div>
      </section>
      {/*  SHARING OF INFORMATION end */}



      
       {/*  DATA RETENTION start */}
       <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="data_retrntion_section">
                        <h4 className="data_retrntion_heading">DATA RETENTION</h4>
                        <p className="data_retrntion_para">
                        We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
                         The specific retention period may vary based on the nature of the data and legal requirements.
                        </p>
                    </div>

                </div>
            </div>
        </div>
      </section>
      {/*  DATA RETENTION end */}



        {/*  SECURITY start */}
        <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="security_section">
                        <h4 className="security_heading">Security</h4>
                        <p className="security_para">We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However,
                         no data transmission over the internet can be guaranteed as completely secure.</p>
                    </div>

                </div>
            </div>
        </div>
      </section>
      {/*  SECURITY end */}


      
        {/*  YOUR RIGHTS start */}
        <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="your_rights_section">
                        <h4 className="your_rights_heading">Your Rights</h4>
                        <p className="your_right_para">As a data subject, you have the right to access, rectify, erase, or restrict the processing of your personal data. 
                        You can exercise these rights by contacting us at  <a href="">info@sakshath-technologies.com</a>.
                        </p>
                    </div>

                </div>
            </div>
        </div>
      </section>
      {/*  YOUR RIGHTS end */}


       {/*  COMPLAINTS start */}
       <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="complaints_section">
                        <h4 className="complaints_heading">Your Compliants</h4>
                        <p className="compliants_para">If you believe that your data protection rights have been violated,
                         you have the right to lodge a complaint with a supervisory authority.
                         We are committed to addressing your concerns promptly and transparently.</p>
                    </div>

                </div>
            </div>
        </div>
      </section>
      {/*  COMPLAINTS end */}

       {/*  UPDATES TO THIS PRIVACY POLICY start */}
       <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="update_to_this_policy_section">
                        <h4 className="update_to_this_policy_heading">UPDATES TO THIS PRIVACY POLICY</h4>
                        <p className="update_to_this_policy_para">We may update this privacy policy to reflect changes in our practices.
                         The updated privacy policy will be posted on the platform with an effective date. 
                        We encourage you to review this policy periodically.</p>
                    </div>

                </div>
            </div>
        </div>
      </section>
      {/*  UPDATES TO THIS PRIVACY POLICY end */}


        {/* CONTACT INFORMATION start */}
        <section className="privacy_policy_intro_information_we_collect">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="contact_information_section">
                        <h4 className="contact_information_heading">CONTACT INFORMATION</h4>
                        <p className="contact_information_para">
                        For any questions or concerns regarding this Privacy Policy,
                         please contact us at <strong> <a href="mailto:Info@sakshath-technologies.com" style={{textDecoration:'none'}}>Info@sakshath-technologies.com</a> </strong> By using our services, 
                         you acknowledge that you have read, understood,
                         and agreed to be bound by this comprehensive privacy policy.

                        </p>
                    </div>

                </div>
            </div>
        </div>
      </section>
      {/*  CONTACT INFORMATION end */}







        </>
    )
}

export default PrivacyPolicy;