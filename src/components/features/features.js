import React from "react";
import "./features.scss";

import features from "../../images/slides/features.png";

const Features = () =>{
  return (
    <section className="features main-bgc">
      <div className="width-wrapper">
        <div className="slide">
          <div className="text-block main">
            <h5 className="text-block__category category-title">Features</h5>
            <h2 className="text-block__title">Give Your Site
              A New Look</h2>
            <p className="text-block__subtitle">Service range including technical skills, design, business understanding.
            </p>
            <ul className="marked-list">
              <li className="marked-list__item">Range including technical skills</li>
              <li className="marked-list__item">Business understanding</li>
              <li className="marked-list__item">Partner on the long run</li>
            </ul>
          </div>
          <div className="bg-image">
            <img src={features} alt="Slide image"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;