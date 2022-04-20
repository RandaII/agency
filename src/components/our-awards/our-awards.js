import React from "react";
import "./our-awards.scss";

import sofa from "../../images/awards-table/product/sofa.jpg";
import keyboard from "../../images/awards-table/product/keyboard.jpg";
import work from "../../images/awards-table/product/work-media.jpg";

import awwwards from "../../images/awards-table/awards/awwwards.png";
import css from "../../images/awards-table/awards/css-design-awards.png";
import fwa from "../../images/awards-table/awards/the-fwa.png";

const OurAwards = () =>{
  return (
    <section className="our-awards main-bgc pt140">
      <div className="width-wrapper">
        <div className="text-block main">
          <h3 className="text-block__title">Our Awards</h3>
        </div>
        <table className="simple-table">
          <tbody>
          <tr>
            <td className="simple-table__left">
              <img src={sofa} alt="SOFA"/>
              <p>SOFA</p>
            </td>
            <td className="simple-table__center">
              25 Oct, 2021
            </td>
            <td className="simple-table__right">
              <p>Awwwards</p>
              <img src={awwwards} alt="Awwwards"/>
            </td>
          </tr>
          <tr>
            <td className="simple-table__left">
              <img src={keyboard} alt="KeyBoard"/>
              <p>KeyBoard</p>
            </td>
            <td className="simple-table__center">
              19 Oct, 2021
            </td>
            <td className="simple-table__right">
              <p>CSS Design Awards</p>
              <img src={css} alt="Awwwards"/>
            </td>
          </tr>
          <tr>
            <td className="simple-table__left">
              <img src={work} alt="SOFA"/>
              <p>Work Media</p>
            </td>
            <td className="simple-table__center">
              7 Oct, 2021
            </td>
            <td className="simple-table__right">
              <p>The FWA</p>
              <img src={fwa} alt="Awwwards"/>
            </td>
          </tr>
          </tbody>
        </table>
        <div className="text-block main our-awards__more">
          <span className="text-block__description">Want more awards?</span>
          <a href="#" className="link">Explore Now</a>
        </div>
      </div>
    </section>
  );
}

export default OurAwards;