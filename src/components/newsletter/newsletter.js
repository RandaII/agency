import React from "react";
import "./newsletter.scss";

const Newsletter = () =>{
  return (
    <section className="newsletter main-bgc">
      <div className="width-wrapper">
        <div className="text-block main">
          <h3 className="text-block__title">Newsletter</h3>
        </div>
        <div className="newsletter__container">
          <input type="text" className="action-input" placeholder="Your email"/>
          <button className="action-button white">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;