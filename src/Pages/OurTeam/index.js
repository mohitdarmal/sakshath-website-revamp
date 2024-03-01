import React, { useCallback, useEffect, useState } from "react";
import BreadCumb from "../../Components/Breadcumb";
import "./styles.scss";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";
import {
  GAURI_PIC,
  KRISHNA_PIC,
  MANISH_PIC,
  MANMEET_PIC,
  NIDHI_PIC,
  NITESH_PIC,
  PRAVEEN_PIC,
  SHRAVAN_PIC,
} from "./Constants";

const OurTeam = () => {
  const [profileData, setProfileData] = useState({
    content:
      "Shravan Kumar is an accomplished professional with 16+ years of Technical Recruitment and Resource Management experience, specializing in SYSPRO/EPICOR/SAP in the U.S., Canada, and India. He possesses strong technical/business acumen and an understanding of technical requirements. His strength includes multi-location recruitment, pre-screening and behavioral interviewing, client/hiring manager relationships, and offer negotiation and closing.",
    position: "Founder & Managing Director",
  });

  const [activeShravanProfile, setActiveShravanProfile] = useState(true);
  const [activeKrishnaProfile, setActiveKrishnaProfile] = useState(false);
  const [activeNiteshProfile, setActiveNiteshProfile] = useState(false);
  const [activeNidhiProfile, setActiveNidhiProfile] = useState(false);
  const [activePraveenProfile, setActivePraveenProfile] = useState(false);
  const [activeManishProfile, setActiveManishProfile] = useState(false);
  const [activeManmeetProfile, setActiveManmeetProfile] = useState(false);
  const [activeGauriProfile, setActiveGauriProfile] = useState(false);

  const handleChangeDetail = (e) => {
    if (e.target.textContent === "Krishnananda Hegde") {
      setProfileData({
        content:
          "Krishnananda Hegde, the CTO of Sakshath Technologies, is a PMP Certified professional with 30+ years of industry experience in ERP Implementation, Program Management, Application Management, Business Analyst, BI Analytics, RPA, and business process automation. His experience in several domestic and multinational companies culminated in Professional Achievements and Awards, including the IT NEXT Magazine NEXT 100 CIO 2013 Award.",
        position: "Chief Technology Officer",
      });
      setActiveKrishnaProfile(true);
      setActiveShravanProfile(false);
      setActiveNiteshProfile(false);
      setActiveNidhiProfile(false);
      setActivePraveenProfile(false);
      setActiveManishProfile(false);
      setActiveManmeetProfile(false);
      setActiveGauriProfile(false);
    } else if (e.target.textContent === "Shravan Kumar") {
      setProfileData({
        content:
          "Shravan Kumar is an accomplished professional with 16+ years of Technical Recruitment and Resource Management experience, specializing in SYSPRO/EPICOR/SAP in the U.S., Canada, and India. He possesses strong technical/business acumen and an understanding of technical requirements. His strength includes multi-location recruitment, pre-screening and behavioral interviewing, client/hiring manager relationships, and offer negotiation and closing.",
        position: "Founder & Managing Director",
      });
      setActiveShravanProfile(true);
      setActiveKrishnaProfile(false);
      setActiveNiteshProfile(false);
      setActiveNidhiProfile(false);
      setActivePraveenProfile(false);
      setActiveManishProfile(false);
      setActiveManmeetProfile(false);
      setActiveGauriProfile(false);
    } else if (e.target.textContent === "Niitesh Khandelwal") {
      setProfileData({
        content:
          "Niitesh Khandelwal comes with strong interpersonal skills and a passion for creating, developing, and maintaining customer relationships to increase sales thru repeat business. With 15+ years of experience in strategic planning, consulting, marketing, sales, project management, improving sales operations efficiency, team development, and social media, he can identify strengths and weaknesses and implement business sales strategy, standards, operational adjustments, and systems to improve productivity and the bottom line.",
        position: "Vice President-Sales",
      });
      setActiveNiteshProfile(true);
      setActiveShravanProfile(false);
      setActiveKrishnaProfile(false);
      setActiveNidhiProfile(false);
      setActivePraveenProfile(false);
      setActiveManishProfile(false);
      setActiveManmeetProfile(false);
      setActiveGauriProfile(false);
    } else if (e.target.textContent === "Nidhi Singh") {
      setProfileData({
        content:
          "Nidhi Singh is a working professional with broad HR and operation expertise. She dedicatedly built a robust corporate culture that encourages ongoing business growth and fosters customer loyalty, enabling employees to reach their greatest potential and give their best at work. Nidhi’s experience and knowledge have significantly augmented Sakshath’s success tales. “My guru mantra – you keep your people happy; they will take care of everything else” Happy team = Productive team",
        position: "HR - Business Partner",
      });
      setActiveNidhiProfile(true);
      setActiveKrishnaProfile(false);
      setActiveNiteshProfile(false);
      setActiveShravanProfile(false);
      setActivePraveenProfile(false);
      setActiveManishProfile(false);
      setActiveManmeetProfile(false);
      setActiveGauriProfile(false);
    } else if (e.target.textContent === "Praveen D") {
      setProfileData({
        content:
          "Praveen has gained extensive knowledge and expertise in various aspects of technical consulting, particularly in end user productivity solutions. Praveen has successfully delivered numerous projects that have resulted in increased efficiency, streamlined workflows, and improved user experiences for clients across diverse industries. Praveen’s key strengths lie in his abilities to understand complex technical requirements, analyze business needs, and develop tailored solutions that align with client objectives.",
        position: "Advisory Board Member",
      });
      setActivePraveenProfile(true);
      setActiveKrishnaProfile(false);
      setActiveNidhiProfile(false);
      setActiveNiteshProfile(false);
      setActiveShravanProfile(false);
      setActiveManishProfile(false);
      setActiveManmeetProfile(false);
      setActiveGauriProfile(false);
    } else if (e.target.textContent === "Manish Gajwani") {
      setProfileData({ content: "Manish Gajwani" });
      setActiveManishProfile(true);
      setActivePraveenProfile(false);
      setActiveKrishnaProfile(false);
      setActiveNidhiProfile(false);
      setActiveNiteshProfile(false);
      setActiveShravanProfile(false);
      setActiveManmeetProfile(false);
      setActiveGauriProfile(false);
    } else if (e.target.textContent === "Manmeet Singh") {
      setProfileData({
        content:
          "Manmeet Singh is a certified Azure specialist and the vice president (VP – Analytics) at Sakshath Technologies. With 18+ years of IT experience, he supports our core and non-core programmers/project solutions with end-to-end delivery solutions. Manmeet has experience developing and implementing IT Analytics and best practice guides and managing the delivery of analytical solutions. He upholds end-to-end standard compliance while delivering within deadlines and at the needed quality. Qualification – Master’s in business administration (MBA – IT Systems) from IMT-Ghaziabad.",
        position: "Vice President-Analytics",
      });
      setActiveManmeetProfile(true);
      setActiveManishProfile(false);
      setActivePraveenProfile(false);
      setActiveKrishnaProfile(false);
      setActiveNidhiProfile(false);
      setActiveNiteshProfile(false);
      setActiveShravanProfile(false);
      setActiveGauriProfile(false);
    } else if (e.target.textContent === "Gouri Prasad") {
      setProfileData({
        content:
          "Gouri Prasad is a Techno-Functional Consultant with 20+ Years of experience in the Accounting, Finance Domain, ERP Implementation, Software Quality Analysis, and Business Analysis and 10+ years of domain experience. He excels at functional design, planning, analysis, testing, development, and implementation of IT solutions while offering guidance, support, and training in challenging and complex system contexts.",
        position: "Chief Operating Officer",
      });
      setActiveGauriProfile(true);
      setActiveManmeetProfile(false);
      setActiveManishProfile(false);
      setActivePraveenProfile(false);
      setActiveKrishnaProfile(false);
      setActiveNidhiProfile(false);
      setActiveNiteshProfile(false);
      setActiveShravanProfile(false);
    }
    console.log("Clicked", e.target.textContent);
  };
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/tsparticles/2.3.2/tsparticles.bundle.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      window.tsParticles.load("tsparticles", {
        fullScreen: { enable: false },
        background: {
          color: "#fff",
        },
        interactivity: {
          detect_on: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 1500,
              links: {
                opacity: 0.15,
              },
            },
          },
        },
        particles: {
          links: {
            enable: false,
            opacity: 0.3,
            distance: 200,
            color: "#32A4D5",
          },
          move: {
            enable: false,
            speed: { min: 1, max: 3 },
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          size: {
            value: 0,
          },
          color: "#840C16",
        },
      });
    };

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <BreadCumb imgUrl={ABOUT_BANNER} title="Our Team" />

      <section>
        <div className="container">
          <div className="row">
            <div style={{ position: "relative", height: "1200px" }}>
              <div id="tsparticles"></div>
              <div className="our_team_sec">
                <div
                  className={`our_team_sec_box ${
                    activeShravanProfile ? "active" : ""
                  }`}
                  onClick={handleChangeDetail}
                >
                  <div className="details">
                    <h5>Shravan Kumar</h5>
                    <img src={SHRAVAN_PIC} />
                  </div>
                </div>
                <div
                  className={`our_team_sec_box ${
                    activeKrishnaProfile ? "active" : ""
                  }`}
                  onClick={handleChangeDetail}
                >
                  <div className="details">
                    <img src={KRISHNA_PIC} />
                    <h5>Krishnananda Hegde</h5>
                  </div>
                </div>
                <div
                  className={`our_team_sec_box ${
                    activeNiteshProfile ? "active" : ""
                  }`}
                  onClick={handleChangeDetail}
                >
                  <div className="details">
                    <h5>Nitesh Khandelwal</h5>
                    <img src={NITESH_PIC} />
                  </div>
                </div>
                <div
                  className={`our_team_sec_box ${
                    activeNidhiProfile ? "active" : ""
                  }`}
                  onClick={handleChangeDetail}
                >
                  <div className="details">
                    <h5>Nidhi Singh</h5>
                    <img src={NIDHI_PIC} />
                  </div>
                </div>
                <div
                  className={`our_team_sec_box ${
                    activePraveenProfile ? "active" : ""
                  }`}
                  onClick={handleChangeDetail}
                >
                  <div className="details">
                    <h5>Praveen D</h5>
                    <img src={PRAVEEN_PIC} />
                  </div>
                </div>
                <div
                  className={`our_team_sec_box ${
                    activeManishProfile ? "active" : ""
                  }`}
                  onClick={handleChangeDetail}
                >
                  <div className="details">
                    <h5>Manish Gajwani</h5>
                    <img src={MANISH_PIC} />
                  </div>
                </div>
                <div
                  className={`our_team_sec_box ${
                    activeManmeetProfile ? "active" : ""
                  }`}
                  onClick={handleChangeDetail}
                >
                  <div className="details">
                    <h5>Manmeet Singh</h5>
                    <img src={MANMEET_PIC} />
                  </div>
                </div>
                <div
                  className={`our_team_sec_box ${
                    activeGauriProfile ? "active" : ""
                  }`}
                  onClick={handleChangeDetail}
                >
                  <div className="details">
                    <h5>Gouri Prasad</h5>
                    <img src={GAURI_PIC} />
                  </div>
                </div>
              </div>

              <div className="our_team_sec_dot">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>

              <div className="our_team_sec_inner_box">
                {/* <h4> {profileData.position}</h4> */}
                <p>
                  <h4> {profileData.position}</h4>
                  {profileData.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
