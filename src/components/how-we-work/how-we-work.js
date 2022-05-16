import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./how-we-work.scss";

const HowWeWork = () =>{

  const block = useRef();
  const animation = useIntersectionObserver(block, `entering`);

  return (
    <section className="how-we-work main-bgc pt140">
      <div className="width-wrapper">
        <div className={`slide ${animation}`} ref={block}>
          <div className="text-block main">
            <h5 className="text-block__category category-title">How we work</h5>
            <h3 className="text-block__title">Making Your Projects
              Look Awesome</h3>
            <p className="text-block__description">Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.</p>
            <a href="#" className="link">Read More</a>
          </div>
          <ul className="numbered-list">
            <li>Full service range including</li>
            <li>Technical skills, design, business</li>
            <li>Themselves in the merchant's</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;