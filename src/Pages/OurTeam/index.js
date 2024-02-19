import React from "react";
import  BreadCumb from "../../Components/Breadcumb";
import "./styles.scss";
import { ABOUT_BANNER } from "../../Components/Breadcumb/Constant";

const OurTeam = () => {
    return (
        <>
            <BreadCumb imgUrl={ABOUT_BANNER} title="Our Team" />


            <section>
                <div className="container">
                    <div className="row">
                        <div className="position-relative">
                            <div className="circle_outer_box">
                                <button>Profile 1</button>
                                <button>Profile 1</button>
                                <button>Profile 1</button>
                                <button>Profile 1</button>
                            </div>
                            <div className="circle_inner_box">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam;