import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./statistics.scss";

const Statistics = () =>{

  const block = useRef();
  const animation = useIntersectionObserver(block, `entering`)

  const items = [
    {
      id: 0,
      title: `42%`,
      text: `Years of experience`
    },
    {
      id: 1,
      title: `73+`,
      text: `Agency members`
    },
    {
      id: 2,
      title: `5.000`,
      text: `Projects complete`
    },
  ]

  return (
    <section className="statistics main-bgc">
      <div className="width-wrapper">
        <ul className={`simple-list ${animation}`} ref={block}>
          {
            items.map(({title, text, id}) =>(
              <li className="simple-list__item"
                  key={id}>
                <h3 className="simple-list__title">{title}</h3>
                <p className="simple-list__text">{text}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Statistics;