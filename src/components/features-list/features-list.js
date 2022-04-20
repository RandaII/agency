import React from "react";
import "./features-list.scss";

import professional from "../../images/icons/professional.svg";

const FeaturesList = () =>{
  return (
    <section className="features-list main-bgc pt140">
      <div className="width-wrapper">
        <div className="slide sb">
          <div className="text-block main">
            <h5 className="text-block__category category-title">Features</h5>
            <p className="text-block__subtitle">Long run, and work as an extension of the merchant's team.</p>
            <a href="#" className="link main">Read More</a>
          </div>
          <ul className="cards-list">
            <li className="cards-list__item active">
              <img src={professional} alt="card image" className="cards-list__img"/>
              <h4 className="cards-list__title">Professional</h4>
              <p className="cards-list__description">Full service range including technical skills, design.</p>
            </li>
            <li className="cards-list__item">
              <h4 className="cards-list__title">Accessibility</h4>
              <p className="cards-list__description">Business understanding, ability to put themselves.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeaturesList;