import React from "react";
import "./testimonials.scss";

import alan from "../../images/avatars/alan-martí.jpg";
import richardo from "../../images/avatars/richardo-kann.png";
import graham from "../../images/avatars/graham-griffiths.png";
import maria from "../../images/avatars/maria-trofimova.png";

const Testimonials = () =>{
  return (
    <section className="testimonials main-bgc">
      <div className="width-wrapper">
        <div className="text-block main ta-c">
          <h5 className="text-block__category category-title">Testimonials</h5>
          <h2 className="text-block__title">What Our
            Clients Saying</h2>
        </div>

        <ul className="testimonials-block">
          <div className="testimonials-block__container">
            <li className="testimonials-block__item active">
              <div className="testimonials-block__rating star5"></div>
              <p className="testimonials-block__text">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>

              <blockquote className="blockquote main person">
                <img
                  src={alan}
                  alt="blockquote author"/>
                <div className="blockquote__text-block"><p className="blockquote__text">Meta Inc.</p><p className="blockquote__author">Alan Martí</p>
                </div>
              </blockquote>

            </li>
            <li className="testimonials-block__item">
              <div className="testimonials-block__rating star5"></div>
              <p className="testimonials-block__text">Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.</p>

              <blockquote className="blockquote main person">
                <img
                  src={graham}
                  alt="blockquote author"/>
                <div className="blockquote__text-block"><p className="blockquote__text">Twitor</p><p className="blockquote__author">Graham Griffiths</p>
                </div>
              </blockquote>

            </li>
          </div>
          <div className="testimonials-block__container">
            <li className="testimonials-block__item">
              <div className="testimonials-block__rating star5"></div>
              <p className="testimonials-block__text">Provide your business with a variety of digital solutions to promote your product or service online.</p>

              <blockquote className="blockquote main person">
                <img
                  src={richardo}
                  alt="blockquote author"/>
                <div className="blockquote__text-block"><p className="blockquote__text">Photogram</p><p className="blockquote__author">Richardo Kann</p>
                </div>
              </blockquote>

            </li>
            <li className="testimonials-block__item">
              <div className="testimonials-block__rating star5"></div>
              <p className="testimonials-block__text">Promote your product or service online and help you hit your marketing goals and grow your business.</p>

              <blockquote className="blockquote main person">
                <img
                  src={maria}
                  alt="blockquote author"/>
                <div className="blockquote__text-block"><p className="blockquote__text">Whochat</p><p className="blockquote__author">Maria Trofimova</p>
                </div>
              </blockquote>

            </li>
          </div>
        </ul>

        <a href="#" className="action-button white">See All</a>
      </div>
    </section>
  );
}

export default Testimonials;