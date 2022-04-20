import React from "react";
import "./modern-studio.scss";

import meta from "../../images/avatars/meta.png";
import modernStudio from "../../images/slides/modern-studio.png";
import star from "../../images/icons/star3.svg";

const ModernStudio = () =>{
  return (
    <section className="modern-studio accent-bgc pt140">
      <div className="width-wrapper">
        <div className="slide">
          <div className="text-block accent">
            <h5 className="text-block__category category-title">Modern Studio</h5>
            <h1 className="text-block__title">We’re Help To Build Your
              Dream Project</h1>
            <p className="text-block__description">Agency provides a full service range including technical skills, design, business understanding.</p>
            <div className="action-buttons-block">
              <a href="#" className="action-button orange">How We Work</a>
              <a href="#" className="action-button">Contact Us</a>
            </div>
            <blockquote className="blockquote">
              <img src={meta} alt="blockquote author"/>
              <div className="blockquote__text-block">
                <p className="blockquote__text">"Put themselves in the merchant's shoes"</p>
                <p className="blockquote__author"> Meta Inc.</p>
              </div>
            </blockquote>
            <img src={star} alt="Decor" className="text-block__decor"/>
          </div>
          <div className="bg-image">
            <img src={modernStudio} alt="slide image"/>
          </div>
        </div>
      </  div>
    </section>
  );
}

export default ModernStudio;