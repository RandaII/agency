import React from "react";
import "./service-list.scss";

import professional from "../../images/icons/professional.svg";

const ServiceList = () =>{
  return (
    <section className="service-list main-bgc pt140">
      <div className="width-wrapper">
        <div className="text-block main">
          <h5 className="text-block__category category-title">Service</h5>
          <h3 className="text-block__title">How Our Agency
            Can Help</h3>
        </div>
        <ul className="cards-list ai-s">
          <li className="cards-list__item big">
            <img src={professional} alt="card image" className="cards-list__img"/>
            <h4 className="cards-list__title">Design</h4>
            <p className="cards-list__description">Agency provides a full service range including technical skills, design.</p>
            <a href="#" className="link">Learn More</a>
          </li>
          <li className="cards-list__item big">
            <img src={professional} alt="card image" className="cards-list__img"/>
            <h4 className="cards-list__title">Development</h4>
            <p className="cards-list__description">Full service range including technical skills, design, business.</p>
            <a href="#" className="link">Discover More</a>
          </li>
          <li className="cards-list__item big">
            <img src={professional} alt="card image" className="cards-list__img"/>
            <h4 className="cards-list__title">Marketing</h4>
            <p className="cards-list__description">Technical skills, design, business understanding, ability.</p>
            <a href="#" className="link">Explore Now</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ServiceList;