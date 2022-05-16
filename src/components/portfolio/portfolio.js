import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./portfolio.scss";

import sofa from "../../images/card-images/sofa.jpg";
import keyboard from "../../images/card-images/keyboard.jpg";
import workMedia from "../../images/card-images/work-media.jpg";
import dddone from "../../images/card-images/dddone.jpg";

const Portfolio = () =>{

  const cardsBlock = useRef();
  const title = useRef();
  const button = useRef();
  const lastCard = useRef();

  const cardAnimation = useIntersectionObserver([cardsBlock, title], `entering`);
  const buttonAnimation = useIntersectionObserver([button, lastCard], `entering`);

  return (
    <section className="portfolio accent-bgc">
      <div className="width-wrapper">
        <div className="text-block accent">
          <h5 className="text-block__category category-title">Portfolio</h5>
          <h2 className="text-block__title" ref={title}>Latest Work</h2>
        </div>
        <ul className={`category-nav ${cardAnimation}`}>
          <li>
            <a href="#" className="category-nav__item active">
              <span className="category-nav__title">Show All</span>
              <span className="category-nav__count">14</span>
            </a>
          </li>
          <li>
            <a href="#" className="category-nav__item">
              <span className="category-nav__title">Design</span>
              <span className="category-nav__count">6</span>
            </a>
          </li>
          <li>
            <a href="#" className="category-nav__item">
              <span className="category-nav__title">Branding</span>
              <span className="category-nav__count">4</span>
            </a>
          </li>
          <li>
            <a href="#" className="category-nav__item">
              <span className="category-nav__title">Illustration</span>
              <span className="category-nav__count">3</span>
            </a>
          </li>
          <li>
            <a href="#" className="category-nav__item">
              <span className="category-nav__title">Motion</span>
              <span className="category-nav__count">1</span>
            </a>
          </li>
        </ul>
        <ul className= {`image-cards ${cardAnimation}`} ref={cardsBlock}>
          <li>
            <a href="#" className="image-cards__item">
              <div className="image-cards__item-wrapper">
                <img src={sofa} alt="card image"/>
              </div>
              <div className="image-cards__text-block">
                <p className="mark">Design</p>
                <h3 className="image-cards__title">SOFA</h3>
              </div>
            </a>
          </li>
          <li className="big">
            <a href="#" className="image-cards__item">
              <div className="image-cards__item-wrapper">
                <img src={keyboard} alt="card image"/>
              </div>
              <div className="image-cards__text-block">
                <p className="mark">Design</p>
                <h3 className="image-cards__title">SOFA</h3>
              </div>
            </a>
          </li>
          <li className="big">
            <a href="#" className="image-cards__item">
              <div className="image-cards__item-wrapper">
                <img src={workMedia} alt="card image"/>
              </div>
              <div className="image-cards__text-block">
                <p className="mark">Illustration</p>
                <h3 className="image-cards__title">Work Media</h3>
              </div>
            </a>
          </li>
          <li ref={lastCard}>
            <a href="#" className="image-cards__item">
              <div className="image-cards__item-wrapper">
                <img src={dddone} alt="card image"/>
              </div>
              <div className="image-cards__text-block">
                <p className="mark">Motion</p>
                <h3 className="image-cards__title">DDDone</h3>
              </div>
            </a>
          </li>
        </ul>
        <a href="#" className= {`action-button ${buttonAnimation}`} ref={button}>Explore More</a>
      </div>
    </section>
  );
}

export default Portfolio;