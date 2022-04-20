import React from "react";
import "./get-started.scss";

import getStarted from "../../images/slides/get-started.png";
import getStartedIcon from "../../images/icons/get-started.svg";

const GetStarted = () =>{
  return (
    <section className="get-started accent-bgc pt140">
      <div className="width-wrapper">
        <div className="advertising-card main-bgc">
          <div className="text-block main">
            <h5 className="text-block__category category-title">Get Started</h5>
            <h4 className="text-block__title">We Help Companies
              Move Faster</h4>
            <a className="action-button orange">Contact Us</a>
          </div>
          <div className="advertising-card__wrapper">
            <img src={getStarted} alt="slide image"/>
          </div>
          <img className="advertising-card__decorate-image" src={getStartedIcon} alt="decorate image"/>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;