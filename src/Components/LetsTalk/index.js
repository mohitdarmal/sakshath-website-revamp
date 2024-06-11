import React from 'react'
import SlideAnimationButton from '../Utils/SlideAnimationButton';
import './style.scss';
import Heading from '../Utils/Heading';

const LetsTalk = () => {
  return (
    <>
    <section className="letstalk" >
        <div className="container">
        <div className="row text-center">
          <Heading heading="CONTACT US" />
        </div>
            <div className="row">
            <div className="col-md-12 overflow-hidden">
            <div className="letstalk_heading">

            <a href="/contact-us">
            <h1>
                    LET<span>'</span>S WORK TOGETHER
                </h1>
                </a>
            </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LetsTalk