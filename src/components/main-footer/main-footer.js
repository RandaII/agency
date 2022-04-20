import React from "react";
import "./main-footer.scss";

import facebook from "../../images/socials/facebook.svg";
import twitter from "../../images/socials/twitter.svg";
import instagram from "../../images/socials/instagram.svg";

const MainFooter = () =>{
  return (
    <footer className="main-footer main-bgc">
      <div className="width-wrapper">
        <div className="main-footer__wrapper">
          <span className="main-footer__title">Agency</span>
          <nav className="simple-navigation vertical">
            <h5 className="simple-navigation__title">Menu</h5>
            <ul className="simple-navigation__list">
              <li>
                <a href="#" className="simple-navigation__item">About</a>
              </li>
              <li>
                <a href="#" className="simple-navigation__item">Services</a>
              </li>
              <li>
                <a href="#" className="simple-navigation__item">Blog</a>
              </li>
              <li>
                <a href="#" className="simple-navigation__item">Contact</a>
              </li>
            </ul>
          </nav>
          <nav className="simple-navigation vertical">
            <h5 className="simple-navigation__title">Service</h5>
            <ul className="simple-navigation__list">
              <li>
                <a href="#" className="simple-navigation__item">Design</a>
              </li>
              <li>
                <a href="#" className="simple-navigation__item">Development</a>
              </li>
              <li>
                <a href="#" className="simple-navigation__item">Marketing</a>
              </li>
              <li>
                <a href="#" className="simple-navigation__item">See More</a>
              </li>
            </ul>
          </nav>
          <ul className="social-list">
            <li>
              <a href="#" className="social-list__item big-icon orange">
                <img src={facebook} alt="Facebook"/>
              </a>
            </li>
            <li>
              <a href="#" className="social-list__item big-icon orange">
                <img src={twitter} alt="Twitter"/>
              </a>
            </li>
            <li>
              <a href="#" className="social-list__item big-icon orange">
                <img src={instagram} alt="Instagram"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="main-footer__copyright">
          <p className="main-footer__copyright-text">Copyright © 2022 Laaqiq. All Rights Reserved.</p>
          <div className="main-footer__copyright-links">
            <a href="#" className="link">Terms of Use</a>
            <a href="#" className="link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;