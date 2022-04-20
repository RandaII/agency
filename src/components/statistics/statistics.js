import React from "react";
import "./statistics.scss";

const Statistics = () =>{
  return (
    <section className="statistics main-bgc">
      <div className="width-wrapper">
        <ul className="simple-list">
          <li className="simple-list__item">
            <h3 className="simple-list__title">42%</h3>
            <p className="simple-list__text">Years of experience</p>
          </li>
          <li className="simple-list__item">
            <h3 className="simple-list__title">73+</h3>
            <p className="simple-list__text">Agency members</p>
          </li>
          <li className="simple-list__item">
            <h3 className="simple-list__title">5.000</h3>
            <p className="simple-list__text">Projects complete</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Statistics;