import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";


import "./style.scss";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1("Inception 2012");
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci velit dolores modi officiis neque dolore non consequuntur architecto magni! Necessitatibus numquam blanditiis doloribus ab accusantium veritatis nulla neque vitae nemo.</p>

    callback();
  };

  const someCallback2 = () => {
    setMessage2("Step two");
  };

  const someCallback3 = () => {
    setMessage3("Finish");

  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          
        </div>
        <div className="message">{message1}
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque explicabo veritatis iusto provident animi iste corporis suscipit, consequuntur earum quam error perferendis natus quis nesciunt. Quia necessitatibus eligendi ducimus.</p></div>
    
        
            
        
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message">{message3}</div>
      </div>
    </div>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App">

      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#32a4d5"

        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}
