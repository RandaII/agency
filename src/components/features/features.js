import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./features.scss";

import features from "../../images/slides/features.png";
import featuresWebp from "../../images/slides/features.webp";

const Features = () =>{

  const block = useRef();
  const animation = useIntersectionObserver(block, `left-translate`);

  return (
    <section className="features main-bgc">
      <div className="width-wrapper inv-child">
        <div className={`slide ${animation}`} ref={block}>
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
            <picture>
              <source type="image/webp" srcSet={featuresWebp}/>
              <img src={features} alt="Slide image"/>
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;