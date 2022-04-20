import React from "react";
import "./partners.scss";

import digitalSide from "../../images/partners/digitalside.png";
import vortex from "../../images/partners/vortex.png";
import travelerExplorer from "../../images/partners/traveler-explorer.png";
import fuzion from "../../images/partners/fuzion.png";
import mediaFury from "../../images/partners/mediafury.png";

const Partners = () =>{
  return (
    <section className="partners main-bgc">
      <div className="width-wrapper">
        <div className="partners__container">
          <ul className="partners__list">
            <li>
              <a href="#" className="partners__item">
                <img src={digitalSide} alt="digitalSide logo"/>
              </a>
            </li>
            <li>
              <a href="#" className="partners__item">
                <img src={vortex} alt="Vortex logo"/>
              </a>
            </li>
            <li>
              <a href="#" className="partners__item">
                <img src={travelerExplorer} alt="Traveler Explorer logo"/>
              </a>
            </li>
            <li>
              <a href="#" className="partners__item">
                <img src={fuzion} alt="Fuzion logo"/>
              </a>
            </li>
            <li>
              <a href="#" className="partners__item">
                <img src={mediaFury} alt="MediaFury logo"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Partners;