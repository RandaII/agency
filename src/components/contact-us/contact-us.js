import React from "react";
import "./contact-us.scss";

import dreamProject from "../../images/slides/dream-project.png";

const ContactUs = () =>{
  return (
    <section className="contact-us main-bgc">
      <div className="width-wrapper">
        <div className="slide accent-light-bgc">
          <div className="slide__wrapper">
            <div className="text-block accent">
              <h2 className="text-block__title">We’re Help
                To Build Your
                Dream Project</h2>
              <p className="text-block__description">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
              <div className="action-buttons-block">
                <button className="action-button white">How We Work</button>
              </div>
            </div>
            <div className="bg-image">
              <img src={dreamProject} alt="slide image"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;