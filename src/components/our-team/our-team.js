import React, {useRef} from "react";
import "./our-team.scss";
import Slider from "../slider";

import azahAnyeni from "../../images/team/azah-anyeni.png";
import roelof from "../../images/team/roelof-bekkenenks.png";
import oliveira from "../../images/team/leonard-oliveira.png";
import izabella from "../../images/team/izabella-abakova.png";

const OurTeam = () =>{

  const sliderItems = [
    {
      id: 0,
      image: azahAnyeni,
      title: `Azah Anyeni`,
      description: `Designer`
    },
    {
      id: 1,
      image: roelof,
      title: `Roelof Bekkenenks`,
      description: `React Developer`
    },
    {
      id: 2,
      image: oliveira,
      title: `Leonardo Oliveira`,
      description: `Illustrator`
    },
    {
      id: 3,
      image: izabella,
      title: `Izabella Tabakova`,
      description: `Product Designer`
    },
    {
      id: 4,
      image: roelof,
      title: `Roelof Bekkenenks`,
      description: `React Developer`
    },
    {
      id: 5,
      image: izabella,
      title: `Izabella Tabakova`,
      description: `Product Designer`
    },
    {
      id: 6,
      image: oliveira,
      title: `Leonardo Oliveira`,
      description: `Illustrator`
    },
    {
      id: 7,
      image: azahAnyeni,
      title: `Azah Anyeni`,
      description: `Designer`
    }
  ]
  // реф на контейнер для control-buttons
  const teamContainer = useRef();

  return (
    <section className="our-team accent-bgc pt140">
      <div className="width-wrapper">

        <div className="our-team__container"
             ref={teamContainer}>
          <div className="text-block accent">
            <h5 className="text-block__category category-title">Our Team</h5>
            <h2 className="text-block__title">Team of Designers
              and Developers</h2>
          </div>
        </div>

        <Slider buttonRef={teamContainer}>
          {sliderItems}
        </Slider>
      </div>
    </section>
  );
}

export default OurTeam;