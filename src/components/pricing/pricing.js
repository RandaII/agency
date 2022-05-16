import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./pricing.scss";

const Pricing = () =>{

  const block = useRef();
  const animation = useIntersectionObserver(block, `entering`)

  const items = [
    {
      mark: null,
      category: `Consultation`,
      title: `Free`,
      text: `Your digital marketing efforts, instead of handling in-house.`,
      addClass: ``,
      markedList:[
        {
          className: `plus`,
          markText: `Brand Design`
        },
        {
          className: `minus`,
          markText: `Market Analysis`
        },
        {
          className: `minus`,
          markText: `Production`
        },
      ]
    },
    {
      mark: `Popular`,
      category: `Design`,
      title: `$1500`,
      text: `Provide your business with a variety of digital solutions to promote.`,
      addClass: `active`,
      markedList:[
        {
          className: `plus`,
          markText: `Brand Design`
        },
        {
          className: `plus`,
          markText: `Market Analysis`
        },
        {
          className: `minus`,
          markText: `Production`
        },
      ]
    },
    {
      mark: null,
      category: `Design+Code`,
      title: `$2900`,
      text: `Help you hit your marketing goals and grow your business.`,
      addClass: ``,
      markedList:[
        {
          className: `plus`,
          markText: `Brand Design`
        },
        {
          className: `plus`,
          markText: `Market Analysis`
        },
        {
          className: `plus`,
          markText: `Production`
        },
      ]
    },
  ]

  return (
    <section className="pricing main-bgc">
      <div className="width-wrapper">
        <div className="text-block main">
          <h5 className="text-block__category category-title">Testimonials</h5>
          <h2 className="text-block__title">What Our
            Clients Saying</h2>
        </div>
        <ul className={`pricing-block ${animation}`}
            ref={block}>
          {items.map(({mark, category, title, text, addClass, markedList}, key) =>{

          const buttonClass = addClass ? `orange` : `white`;

           return (
             <li
               className={`pricing-block__item ${addClass}`}
               key={key}
               style={{animationDelay: `.${key + key}s`}}>

              <div className="text-block main">
                {mark && <p className="mark orange">{mark}</p>}
                <h5 className="text-block__category category-title">{category}</h5>
                <h3 className="text-block__title">{title}</h3>
                <p className="text-block__description">{text}</p>

                <ul className="marked-list">
                  {
                    markedList.map(({className, markText}, key) =>(
                      <li className={`marked-list__item ${className}`}
                          key={key}>{markText}</li>
                    ))
                  }
                </ul>
                <button className={`action-button ${buttonClass}`}>Contact Us</button>
              </div>
            </li>);
          })}
        </ul>
      </div>
    </section>
  );
}

export default Pricing;