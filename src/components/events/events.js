import React from "react";
import "./events.scss";

const Events = () =>{
  return (
    <section className="events accent-bgc pt140">
      <div className="width-wrapper">
        <div className="text-block accent">
          <h5 className="text-block__category category-title">Events</h5>
          <h2 className="text-block__title">Explore Future
            Conferences</h2>
        </div>
        <ul className="events-calendar accent">
          <li className="events-calendar__item">
            <div className="events-calendar__date-section">
              <div className="events-calendar__date-block">
                <h1 className="events-calendar__day">3</h1>
                <div className="events-calendar__date">
                  <h4>November <br/> 2021</h4>
                </div>
              </div>
              <p className="events-calendar__time">9:00 am – 3:00 pm</p>
            </div>
            <div className="events-calendar__container">
              <h4 className="events-calendar__title">‎Design Weeks</h4>
              <p className="events-calendar__description">Digital agency is a business you hire to outsource your digital.</p>
              <a href="#" className="link white">Explore Now</a>
            </div>
          </li>
          <li className="events-calendar__item">
            <div className="events-calendar__date-section">
              <div className="events-calendar__date-block">
                <h1 className="events-calendar__day">15</h1>
                <div className="events-calendar__date">
                  <h4>November <br/> 2021</h4>
                </div>
              </div>
              <p className="events-calendar__time">1:00 pm – 8:00 pm</p>
            </div>
            <div className="events-calendar__container">
              <h4 className="events-calendar__title">‎Interior Design</h4>
              <p className="events-calendar__description">Marketing efforts, instead of handling in-house.</p>
              <a href="#" className="link white">Explore Now</a>
            </div>
          </li>
          <li className="events-calendar__item">
            <div className="events-calendar__date-section">
              <div className="events-calendar__date-block">
                <h1 className="events-calendar__day">2</h1>
                <div className="events-calendar__date">
                  <h4>December <br/> 2021</h4>
                </div>
              </div>
              <p className="events-calendar__time">10:00 am – 2:00 pm</p>
            </div>
            <div className="events-calendar__container">
              <h4 className="events-calendar__title">‎The F design events</h4>
              <p className="events-calendar__description">Provide your business with a variety of digital solutions to promote.</p>
              <a href="#" className="link white">Explore Now</a>
            </div>
          </li>
        </ul>
        <a href="#" className="action-button">Explore More</a>
      </div>
    </section>
  );
}

export default Events;