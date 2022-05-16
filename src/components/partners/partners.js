import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./partners.scss";

import digitalSide from "../../images/partners/digitalside.png";
import vortex from "../../images/partners/vortex.png";
import travelerExplorer from "../../images/partners/traveler-explorer.png";
import fuzion from "../../images/partners/fuzion.png";
import mediaFury from "../../images/partners/mediafury.png";

const Partners = () =>{

  const list = useRef();
  const animation = useIntersectionObserver(list, `entering`);

  const items = [
    {
      id: 0,
      img: digitalSide,
      alt: `DigitalSide logo`
    },
    {
      id: 1,
      img: vortex,
      alt: `Vortex logo`
    },
    {
      id: 2,
      img: travelerExplorer,
      alt: `Traveler Explorer logo`
    },
    {
      id: 3,
      img: fuzion,
      alt: `Fuzion logo`
    },
    {
      id: 4,
      img: mediaFury,
      alt: `MediaFury logo`
    }
  ];

  return (
    <section className="partners main-bgc">
      <div className="width-wrapper">
        <div className="partners__container">
          <ul
            className={`partners__list inv-child ${animation}`}
            ref={list}>
            {
              // по id создаем delay для последовательного вывода
              items.map(({img, alt, id}) =>(
                <li key={id}
                    style={{animationDelay: `.${id + id}s`}}>
                  <a href="#" className="partners__item">
                    <img src={img} alt={alt}/>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Partners;