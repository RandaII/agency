import React, {useState} from "react";
import {Transition} from "react-transition-group";
import "./main-header.scss";

import mainIcon from "../../images/icons/main-icon.svg";

const MainHeader = () =>{

  // переменная переключатель бокового меню
  const [asideStatus, setAsideStatus] = useState(false);

  const openHandler = () => setAsideStatus(true);
  const closeHandler = () => setAsideStatus(false);

  // handler переключения фокуса
  const forwardBlock = (evt) =>{
    if (evt.target.previousSibling !== evt.relatedTarget){
      evt.target.focus();
    }
  }

  // handler переключения фокуса
  const backwardBlock = (evt) =>{
    if (evt.target.parentNode.nextSibling.childNodes[0] !== evt.relatedTarget){
      evt.target.focus();
    }
  }

  return (
    <header className="main-header accent-bgc">
      <div className="width-wrapper">

        <a href="#" className="main-header__logo">
          <img src={mainIcon} alt="logo"/>
          <span>Agency</span>
        </a>
        <nav className="simple-navigation">
          <ul className="simple-navigation__list">
            <li>
              <a href="#" className="simple-navigation__item accent">About</a>
            </li>
            <li>
              <a href="#" className="simple-navigation__item accent">Services</a>
            </li>
            <li>
              <a href="#" className="simple-navigation__item accent">Pricing</a>
            </li>
            <li>
              <a href="#" className="simple-navigation__item accent">Blog</a>
            </li>
          </ul>
        </nav>

        <a href="#contacts" className="action-button">Contact</a>
        <button className="action-button burger-icon" onClick={openHandler}></button>

        <Transition
          in={asideStatus}
          timeout={500}
          mountOnEnter
          unmountOnExit>
          {(state) =>(
            <div className={`main-header__aside-menu ${state}`} >
              <nav className="simple-navigation">
                <ul className="simple-navigation__list">
                  <li>
                    <a href="#" className="simple-navigation__item " onBlur={backwardBlock}>About</a>
                  </li>
                  <li>
                    <a href="#" className="simple-navigation__item ">Services</a>
                  </li>
                  <li>
                    <a href="#" className="simple-navigation__item ">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="simple-navigation__item ">Blog</a>
                  </li>
                </ul>
                <a href="#contacts" className="action-button white">Contact</a>
                <button className="action-button white close-icon" onClick={closeHandler} onBlur={forwardBlock}></button>
              </nav>
              <div className="main-header__aside-menu-bg" onClick={closeHandler}></div>
            </div>
          )}
        </Transition>
      </div>
    </header>
  );
}

export default MainHeader;