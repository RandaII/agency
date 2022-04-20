import React from "react";
import "./about.scss";

import about from "../../images/slides/about.png";
import aboutWebp from "../../images/slides/about.webp";

const About = () =>{
  return (
    <section className="about main-bgc">
      <div className="width-wrapper">
        <div className="slide fl-end">
          <div className="text-block main">
            <h5 className="text-block__category category-title">About</h5>
            <h2 className="text-block__title">An Experience
              Design Agency</h2>
            <p className="text-block__subtitle">
              Provides a full service range
            </p>
            <p className="text-block__description medium-text">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
            <button className="action-button white">About Us</button>
          </div>
          <div className="bg-image">
            <picture>
              <source type="image/webp" srcSet={aboutWebp}/>
              <img src={about} className="left" alt="slide image"/>
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;