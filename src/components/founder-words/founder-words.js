import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./founder-words.scss";

import founder from "../../images/slides/founder.png";
import founderWebp from "../../images/slides/founder.webp";
import blockquote from "../../images/icons/blockquote.svg";

const FounderWords = () =>{

  const block = useRef();
  const animation = useIntersectionObserver(block, `entering`)

  return (
    <section className="founder-words accent-bgc pt140">
      <div className="width-wrapper">
        <div className={`slide inv-child fl-end ${animation}`} ref={block}>
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
            <picture>
              <source type="image/webp" srcSet={founderWebp}/>
              <img className="left" src={founder} alt="slide image"/>
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderWords;