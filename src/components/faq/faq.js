import React from "react";
import "./faq.scss";

const Faq = () =>{

  // handler для задания active класса
  const handler = (evt) =>{
    if(evt.key === `Enter` || evt.type == `click`){
      evt.preventDefault();
      evt.target.previousSibling.checked = !evt.target.previousSibling.checked;
      (evt.target.previousSibling.checked) ? evt.target.parentElement.classList.add(`active`) : evt.target.parentElement.classList.remove(`active`);
    }
  }

  return (
    <section className="faq main-bgc pt140">
      <div className="width-wrapper">
        <div className="slide sb">
          <div className="text-block main">
            <h5 className="text-block__category category-title">Faq</h5>
            <h3 className="text-block__title">Frequently Asked
              Questions</h3>
            <p className="text-block__description medium-text">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            <a href="#" className="link">Contact Us</a>
          </div>
          <ul className="dropdown-list" onKeyUp={handler} onClick={handler}>
            <li className="dropdown-list__item">
              <input type="checkbox" id="digitalAgency"/>
              <label htmlFor="digitalAgency" tabIndex={0}>
                A digital agency is a business
              </label>
              <p className="dropdown-list__text">Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
            </li>
            <li className="dropdown-list__item">
              <input type="checkbox" id="outsource"/>
              <label htmlFor="outsource" tabIndex={0}>
                Hire to outsource your digital
              </label>
              <p className="dropdown-list__text">Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
            </li>
            <li className="dropdown-list__item">
              <input type="checkbox" id="Marketing"/>
              <label htmlFor="Marketing" tabIndex={0}>
                Marketing efforts
              </label>
              <p className="dropdown-list__text">Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
            </li>
            <li className="dropdown-list__item">
              <input type="checkbox" id="provide"/>
              <label htmlFor="provide" tabIndex={0}>
                Can provide your business
              </label>
              <p className="dropdown-list__text">Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;