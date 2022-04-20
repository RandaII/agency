import React from "react";
import "./pricing.scss";

const Pricing = () =>{
  return (
    <section className="pricing main-bgc">
      <div className="width-wrapper">
        <div className="text-block main">
          <h5 className="text-block__category category-title">Testimonials</h5>
          <h2 className="text-block__title">What Our
            Clients Saying</h2>
        </div>
        <ul className="pricing-block">
          <li className="pricing-block__item">
            <div className="text-block main">
              <h5 className="text-block__category category-title">Consultation</h5>
              <h3 className="text-block__title">Free</h3>
              <p className="text-block__description">Your digital marketing efforts, instead of handling in-house.</p>

              <ul className="marked-list">
                <li className="marked-list__item plus">Brand Design</li>
                <li className="marked-list__item minus">Market Analysis</li>
                <li className="marked-list__item minus">Production</li>
              </ul>
              <button className="action-button white">Contact Us</button>
            </div>
          </li>
          <li className="pricing-block__item active">
            <div className="text-block main">
              <p className="mark orange">Popular</p>
              <h5 className="text-block__category category-title">Design</h5>
              <h3 className="text-block__title">$1500</h3>
              <p className="text-block__description">Provide your business with a variety of digital solutions to promote.</p>

              <ul className="marked-list">
                <li className="marked-list__item plus">Brand Design</li>
                <li className="marked-list__item plus">Market Analysis</li>
                <li className="marked-list__item minus">Production</li>
              </ul>
              <button className="action-button orange">Contact Us</button>
            </div>
          </li>
          <li className="pricing-block__item">
            <div className="text-block main">
              <h5 className="text-block__category category-title">Design+Code</h5>
              <h3 className="text-block__title">$2900</h3>
              <p className="text-block__description">Help you hit your marketing goals and grow your business.</p>

              <ul className="marked-list">
                <li className="marked-list__item plus">Brand Design</li>
                <li className="marked-list__item plus">Market Analysis</li>
                <li className="marked-list__item plus">Production</li>
              </ul>
              <button className="action-button white">Contact Us</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Pricing;