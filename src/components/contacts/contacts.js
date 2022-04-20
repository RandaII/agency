import React from "react";
import "./contacts.scss";

import phone from "../../images/icons/phone.svg";
import email from "../../images/icons/email.svg";
import map from "../../images/icons/map.svg";

const Contacts = () =>{
  return (
    <section className="contacts main-bgc" id="contacts">
      <div className="width-wrapper">
        <ul className="cards-list">
          <li className="cards-list__item small">
            <div className="cards-list__image-title">
              <img src={phone} alt="card image" className="cards-list__img"/>
              <h5 className="cards-list__title">Design</h5>
            </div>
            <a href="tel: +12345678900" className="link">+1 (234) 567-89-00</a>
          </li>
          <li className="cards-list__item small">
            <div className="cards-list__image-title">
              <img src={email} alt="card image" className="cards-list__img"/>
              <h5 className="cards-list__title">EMail</h5>
            </div>
            <a href="mailto: info@agency.com" className="link">info@agency.com</a>
          </li>
          <li className="cards-list__item small">
            <div className="cards-list__image-title">
              <img src={map} alt="card image" className="cards-list__img"/>
              <h5 className="cards-list__title">Address</h5>
            </div>
            <a href="#" className="link">2247 Lunetta Street, TX 76301</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;