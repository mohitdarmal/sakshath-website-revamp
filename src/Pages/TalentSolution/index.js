import React from "react";
import BreadCumb from "../../Components/Breadcumb";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import Heading from "../../Components/Utils/Heading";
import { IoCheckmark } from "react-icons/io5";
import "./styles.scss";
import { ANGULAR_LOGO, ANNOUNCEMENT_ICON, DEDICATED_DEVELOPER_LOGO, DEVELOPMENT_TEAMS_LOGO, DOTNET_LOGO, NODEJS_LOGO, PYTHON_LOGO, REACT_LOGO, REACT_NATIVE_LOGO, RUBY_RAILS_LOGO, TALENT_SOLUTION } from "./Constant";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import SlideAnimationButton from "../../Components/Utils/SlideAnimationButton";
import { Col } from "react-bootstrap";
import { MOBILE_APP_DEVELOPMENT } from "../Service/ApplicationDevelopment/Constant";

const TalentSolution = () => {
  return (
    <>
      <BreadCumb imgUrl={ABOUT_BANNER} title="Talent Solution" />

      {/* Managed Team Section Start */}
      <section className="managed_team_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ipad_full_width">
              <div className="managed_team_left_content">
                <img src={TALENT_SOLUTION} className="w-100" />
                <p>
                  Elevate your workforce with our tailored IT talent solutions,
                  seamlessly bridging the gap between skill and success. Unlock
                  the full potential of your projects with our expertly curated
                  pool of tech professionals
                </p>
              </div>
            </div>

            <div className="col-md-7 ipad_full_width">
              <div className="managed_team_right_content">
                <Fade direction="up" triggerOnce>
                  <Heading heading="Managed Team Extension" />
                </Fade>

                <div className="managed_team_right_box">
                  <Fade direction="up" triggerOnce>
                    <h5>
                      Build effortless software with our managed team extension
                    </h5>
                    <p>
                      Our team of highly skilled software developers and
                      designers will work with you to produce a custom-built
                      digital product.
                    </p>
                  </Fade>
                </div>

                <div className="managed_team_right_box">
                  <Fade direction="up" triggerOnce>
                    <h5>
                      Sakshath's managed team shapes your digital product
                      development.
                    </h5>
                    <p>
                      Scaling your application on-demand is fast, easy, and
                      affordable with the Sakshath team of professionals. At
                      Sakshath, we have a managed workflow and expert team that
                      becomes an integral part of your project from scratch.
                    </p>
                  </Fade>
                </div>

                <div className="managed_team_right_box">
                  <Fade direction="up" triggerOnce>
                    <h5>Managed Team Extension process at Sakshath</h5>
                    <p>
                      We have devised an unparalleled recruitment method to
                      screen the finest professionals in the market by
                      channeling the best industry approaches. Our framework
                      enables our hiring team to sync their efforts in
                      identifying the appropriate professionals who can ensure a
                      sustained, positive outcome.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Managed Team Section End */}

      {/* Managed Team Blue Section Start */}
      <section className="managed_team_blue_bg">
        <div></div>
      </section>
      {/* Managed Team Blue Section End */}

      {/* Managed Team Blue Second Section Start */}
      <section className="managed_team_second_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="managed_team_right_box">
                <Fade direction="up" triggerOnce>
                  <h5>Let's talk about some business!</h5>
                  <p>
                    Take us through your project's requirements and
                    objectives—the more details, the better. Via a series of
                    consultative processes, our tech team creates a connection
                    with you to fully comprehend your project, business
                    objectives, technology stack, and aspects that accurately
                    describe your technical requirements.
                  </p>
                </Fade>
              </div>
            </div>

            <div className="col-md-6">
              <div className="managed_team_right_box">
                <Fade direction="up" triggerOnce>
                  <h5>Tech-driven hiring plan </h5>
                  <p>
                    Update us on your vision and mission—we will design the best
                    tech-driven hiring strategy incorporating the specific
                    expertise and skill set you desire your team to have. Our
                    detailed framework includes how to deal with the tech
                    complexities in the project, what tech stack to utilize, and
                    other technicalities.
                  </p>
                </Fade>
              </div>
            </div>

            <div className="col-md-6">
              <Fade direction="up" triggerOnce>
                <img src={ANNOUNCEMENT_ICON} className="img-fluid" />
              </Fade>
            </div>

            <div className="col-md-6 ipad_full_width">
              <div className="managed_team_right_box">
                <Fade direction="up" triggerOnce>
                  <h5>Let us source and screen in line with your needs.</h5>
                  <p>
                    We do an extensive search across industries to screen the
                    ideal candidates. In fact, we work with our partners, launch
                    campaigns, and use our most excellent resources and
                    recruitment power to match your requirements. Our hiring
                    team evaluates the candidates' communication and
                    problem-solving skills through comprehensive video
                    interviews. At Sakshath, we seek candidates with a broad
                    range of relevant skill sets, a well-documented protocol,
                    and a disciplined testing strategy.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Managed Team Blue Second Section End */}

      {/* Finish up with selecting and hire Section Start */}
      <section className="select_hire_section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 ipad_full_width">
            <Fade direction="up" triggerOnce>
              <Heading heading="Finish up with selection and hiring" />
              <p>
                We perform a thorough background check with previous employers
                and clients before concluding the recruitment and selection
                process. We also sign a full-proof legal agreement and an NDA to
                protect your IP rights. Our pride is our agility. Hence, at
                Sakshath, it often takes 2-3 business days to shortlist the
                field's top candidates for our clients.
              </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* Finish up with selecting and hire Section Start */}

      {/* Smarter IT Outsourcing Section Start */}
      <section className="smarter_it_outsource_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center smart_it_heading">
            <Fade direction="up" triggerOnce>
              <Heading heading="Smarter IT Outsourcing" />
              <h5>
                Focus on your business goals with Sakshath's IT outsourcing
                services
              </h5>
              <p>
                At Sakshath, the team of competent engineers is ready to help
                you accomplish your business goals with effective product
                development and a prompt development cycle. You remain free to
                focus on your business growth and profit maximization strategies
                with us.
              </p>

              <SlideAnimationButton url="/contact-us" btnName="Let's Connect" />
              </Fade>
            </div>
          </div>


          <div className="row smart_it_box box_one">
            <div className="col-md-4">
              <div>
              <Fade direction="up" triggerOnce>
                <h4>01</h4>
                <h5>Assured effectiveness with strategic IT outsourcing</h5>
                <p>
                  IT outsourcing from Sakshath for critical software components
                  helps you strategize and execute excellent digital makeover
                  initiatives in a better way. You can access and optimize IT
                  operations' cost-efficiency and quality by monitoring our
                  working model. With our years of experience, we can shape your
                  digital products and handle engineering tasks you want to
                  outsource.
                </p>
                </Fade>
              </div>
            </div>

            <div className="col-md-4">
              <div>
              <Fade direction="up" triggerOnce>
                <h4>02</h4>
                <h5>Evaluate your IT outsourcing partner</h5>
                <p>
                  Due to the modern transformation in the digital landscape,
                  organizations are adopting advanced methods of working in
                  remote and hybrid settings. Choosing a reliable IT outsourcing
                  partner is the best choice that offers a competitive
                  advantage, quick results, efficiencies, and the capability to
                  deal with vital projects.
                </p>
                </Fade>
              </div>
            </div>

            <div className="col-md-4">
              <div>
              <Fade direction="up" triggerOnce>
                <h4>03</h4>
                <h5>Tech proficiency</h5>
                <p>
                  Due to the modern transformation in the digital landscape,
                  organizations are adopting advanced methods of working in
                  remote and hybrid settings. Choosing a reliable IT outsourcing
                  partner is the best choice that offers a competitive
                  advantage, quick results, efficiencies, and the capability to
                  deal with vital projects.
                </p>
                </Fade>
              </div>
            </div>
          </div>



          <div className="row smart_it_box box_two">
            <div className="col-md-4">
              <div>
              <Fade direction="up" triggerOnce>
                <h4>04</h4>
                <h5>Client feedback and testimonials</h5>
                <p>
                Assess the provider and learn about their previous project portfolios through case reports, testimonials, and feedback. This assessment assists in identifying the partner's skills and ability to provide the desired outcomes.
                </p>
                </Fade>
              </div>
            </div>

            <div className="col-md-4">
              <div>
              <Fade direction="up" triggerOnce>
                <h4>05</h4>
                <h5>Client contact and management</h5>
                <p>
                Time zones, language hurdles, and cultural differences are all significant elements to consider while aligning successful work protocols. Working with a company that is flexible and receptive to communication and has expertise in dealing with different clients is the ideal option without any communication gap.
                </p>
                </Fade>
              </div>
            </div>

            <div className="col-md-4">
              <div>
              <Fade direction="up" triggerOnce>
                <h4>06</h4>
                <h5>Cost-benefit analysis</h5>
                <p>
                In IT outsourcing, the primary considerations are expertise and money. Hence, analyzing risks, expenses, rewards, and projected outcomes will guide and empower you in collaborating with the best partner.
                </p>
                </Fade>
              </div>
            </div>
          </div>


        </div>
      </section>
      {/* Smarter IT Outsourcing Section End */}

    {/* Scalable Agile section Start */}
        <section className="scalable_agile_teams_sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                    <Fade direction="up" triggerOnce>
                        <Heading heading="Scalable, agile teams are in demand" />
                        <h5>Focus on your business goals with Sakshath's IT outsourcing services</h5>
                        <p>With our Agile Team service, you can access world-class professionals, tech experts, and techniques necessary to test and scale ideas effectively.</p>
                        <SlideAnimationButton url="#" btnName="Book Free Consultation" />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    {/* Scalable Agile section Start */}


    {/* Agile Development Team Section Start */}
        <section className="agile_dev_team_sec">
            <div className="container">
                <div className="row text-center mb-4">
                    <Fade direction="up" triggerOnce>
                        <Heading heading="With Our Agile Development Team" />
                    </Fade>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="agile_dev_team_content">
                            <Fade direction="up" triggerOnce>
                                <h5>Get your digital products ready in weeks, not months.</h5>
                                <p>Sakshath's 100+ engineers possess proficiency and expertise in DevOps, iterative development, CI/CD pipelines, and agile software development techniques. A strong collaboration with our agile team will help you improve business productivity and alignment by following tried-and-true guidelines. Our agile teams, including developers, quality analysts, and operational specialists, are assembled to address your particular project requirements.</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="agile_dev_team_content">
                            <Fade direction="up" triggerOnce>
                                <h5>Sakshath your B2B partner to build a robust and agile team!</h5>
                                <p>Now assemble an effective workforce with the right mindset, tech proficiency, and managerial skills of the Sakshath professional team. Our engineers can integrate seamlessly with your existing team with any lead time due to their acquaintance with agile development methodologies. The four crucial stages are experienced by Sakshath's agile teams when they start focusing on your project.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* Agile Development Team Section End */}


    {/* Team Building Section Start */}
        <section className="team_building_sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                    <div className="team_building_content">
                        <Fade direction="up" triggerOnce>
                         <h5>Team Building</h5>
                            <p>New teams should get substantial mentorship and supervision from management to generate productivity and handle responsibilities and job roles. However, Sakshath brings you closer to constructing your dream software product. With embedded upskilling and navigating it to precisely correspond with your product objectives, we recognize and accelerate engineering talent in individuals and teams.</p>
                        </Fade>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    {/* Team Building Section End */}


    {/* Agile Development Team Section Start */}
    <section className="agile_dev_team_sec">
            <div className="container">
                {/* <div className="row text-center mb-4">
                    <Fade direction="up" triggerOnce>
                        <Heading heading="With Our Agile Development Team" />
                    </Fade>
                </div> */}

                <div className="row">
                    <div className="col-md-6">
                        <div className="agile_dev_team_content alile_box2">
                            <Fade direction="up" triggerOnce>
                                <h5>Designing team roles</h5>
                                <p>Teams are the pillars of an institute, assembling multidisciplinary, versatile, and diverse individuals with the requisite knowledge and skills to accomplish the task. Agile teams require two key positions: product owner, and scrum master, in contrast to developers, designers, QA engineers, and analysts. The product owner teams up with you to define your goals and the review process. The product owner collaborates with the developers to actualize the vision once it's limited and designed. During each development process, the Scrum master will ensure that the development team adheres to the collaborative guidelines and principles.</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="agile_dev_team_content alile_box2">
                            <Fade direction="up" triggerOnce>
                                <h5>Engineering Methodologies</h5>
                                <p>Building solid teams requires an in-depth understanding of fundamentals. High engineering principles include task branching, code reviews, regular release cadences, and continuous integration, which are the foundation of Sakshath's industry's best-performing agile teams. Great agile teams always have two core pillars: ongoing mentoring and shared skill sets. It unleashes the potential of the team to handle wide-ranging duties. In a team, everyone learns and grows with each other; hence, the team as a group has a massive influence compared to the total individual contributions of its members.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* Agile Development Team Section End */}

    {/* Individual Teams Section Start */}
        <section className="individual_team_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                        <Fade direction="up" triggerOnce >
                            <Heading heading="Individual Teams" />
                            <p className="mb-0">The agile development team at Sakshath is well-versed with each discipline, procedure, and duty and works closely with your strong team. Software development can therefore be carried out independently with little supervision.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
        </section>
    {/* Individual Teams Section End */}


    {/* Hire Section Start */}
    
                <section className="hire_sec">
                    <div className="container">
                        <div className="row text-center hire_heading">
                            <Heading heading="Hire" />
                            <p>Hire competent developers to accelerate your development in Hyperdrive.</p>
                        </div>


                        <Fade direction="up" triggerOnce >
                        <div className="row">
                            <Col>
                                <div className="hire_box">
                                    <div><img src={ANGULAR_LOGO} className="img-fluid"/></div>
                                    <h4>Angular<br/>Developers</h4>
                                </div>
                            </Col>
                            <Col><div className="hire_box">
                                    <div><img src={REACT_LOGO} className="img-fluid"/></div>
                                    <h4>Reactjs<br/>Developers</h4>
                                </div></Col>
                            <Col><div className="hire_box">
                                    <div><img src={NODEJS_LOGO} className="img-fluid"/></div>
                                    <h4>Nodejs<br/>Developers</h4>
                                </div></Col>
                            <Col><div className="hire_box">
                                    <div><img src={DEDICATED_DEVELOPER_LOGO} className="img-fluid"/></div>
                                    <h4>Dedicated<br/>Developers</h4>
                                </div></Col>
                            <Col><div className="hire_box">
                                    <div><img src={RUBY_RAILS_LOGO} className="img-fluid"/></div>
                                    <h4>Ruby Rails<br/>Developers</h4>
                                </div></Col>
                                <Col className="desktop-hide">
                                <div className="hire_box">
                                    <div><img src={REACT_NATIVE_LOGO} className="img-fluid"/></div>
                                    <h4>React Native<br/>Developers</h4>
                                </div>
                            </Col>
                        </div>
                        </Fade>

                        <Fade direction="up" triggerOnce >
                        <div className="row">
                            <Col className="mobile-hide">
                                <div className="hire_box">
                                    <div><img src={REACT_NATIVE_LOGO} className="img-fluid"/></div>
                                    <h4>React Native<br/>Developers</h4>
                                </div>
                            </Col>
                            <Col><div className="hire_box mobile_app_logo">
                                    <div><img src={MOBILE_APP_DEVELOPMENT} className="img-fluid"/></div>
                                    <h4>Mobile App<br/>Developers</h4>
                                </div></Col>
                            <Col><div className="hire_box">
                                    <div><img src={DEVELOPMENT_TEAMS_LOGO} className="img-fluid"/></div>
                                    <h4>Dedicated Software<br/>Development Teams</h4>
                                </div></Col>
                            <Col><div className="hire_box python_logo">
                                    <div><img src={PYTHON_LOGO} className="img-fluid"/></div>
                                    <h4>Python<br/>Developers</h4>
                                </div></Col>
                            <Col className="dot_net"><div className="hire_box asp_logo">
                                    <div><img src={DOTNET_LOGO} className="img-fluid"/></div>
                                    <h4>ASP.NET<br/>Developers</h4>
                                </div></Col>
                        </div>
                        </Fade>

                    </div>
                </section>
     {/* Hire Section End */}

    </>
  );
};

export default TalentSolution;
