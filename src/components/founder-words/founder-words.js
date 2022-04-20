import React from "react";
import "./founder-words.scss";

import founder from "../../images/slides/founder.png";
import blockquote from "../../images/icons/blockquote.svg";

const FounderWords = () =>{
  return (
    <section className="founder-words accent-bgc pt140">
      <div className="width-wrapper">
        <div className="slide fl-end">
          <div className="text-block accent">
            <h5 className="text-block__category category-title">Founder Words</h5>
            <h3 className="text-block__title">Digital agency is a business you hire to outsource your digital marketing efforts</h3>
            <div className="text-block__author-block">
              <p className="text-block__author-name">Ren Delan</p>
              <p className="text-block__author-description">Founder</p>
            </div>
            <img src={blockquote} alt="decorate element" className="text-block__decor"/>
          </div>
          <div className="bg-image">
            <img className="left" src={founder} alt="slide image"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderWords;