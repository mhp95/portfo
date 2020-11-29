import React from "react";
import home1 from "../image/home1.png";
function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>True.</h2>
          </div>
        </div>
        <p>Contact us</p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a hat" />
      </div>
    </div>
  );
}

export default AboutSection;
