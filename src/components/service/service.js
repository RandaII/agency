import React, {useRef} from "react";
import "./service.scss";

import murtaugh from "../../images/avatars/jenny-murtaugh.png";
import service from "../../images/slides/service.png";
import serviceWebp from "../../images/slides/service.webp";
import {useIntersectionObserver} from "../../hooks";

const Service = () =>{

  const block = useRef();
  const animation = useIntersectionObserver(block, `entering`)

  return (
    <section className="service main-bgc">
      <div className="width-wrapper">
        <div className={`slide fl-end inv-child ${animation}`} ref={block}>
          <div className="text-block main">
            <h5 className="text-block__category category-title">Service</h5>
            <h2 className="text-block__title">Making Complex
              Digital Products</h2>
            <p className="text-block__subtitle">Agency provides a full service range including technical skills, design, business.</p>
            <p className="text-block__description">Agency provides a full service range including technical skills, design, business understanding.</p>
            <blockquote className="blockquote main">
              <img src={murtaugh} alt="blockquote author"/>
              <div className="blockquote__text-block">
                <p className="blockquote__text">"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."</p>
                <p className="blockquote__author"> Jenny Murtaugh</p>
              </div>
            </blockquote>
            <div className="action-buttons-block">
              <a href="#" className="action-button white">Explore</a>
            </div>
          </div>
          <div className="bg-image">
            <picture>
              <source type="image/webp" srcSet={serviceWebp}/>
              <img className="left" src={service} alt="slide image"/>
            </picture>
          </div>
        </div >
      </div>
    </section>
  );
}

export default Service;