import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./our-blog.scss";

import agency from "../../images/articles/agency.jpg";
import outsource from "../../images/articles/outsource.jpg";
import business from "../../images/articles/business.jpg";

const OurBlog = () =>{

  const block = useRef();
  const animation = useIntersectionObserver(block, `entering`);

  return (
    <section className="our-blog main-bgc pt140">
      <div className="width-wrapper">
        <div className="our-blog__container">
          <div className="text-block main">
            <h5 className="text-block__category category-title">Our Blog</h5>
            <h3 className="text-block__title">Latest Blog
              Articles</h3>
          </div>
          <a href="#" className="action-button white">Discover All</a>
        </div>
        <article className={`article-block ${animation}`} ref={block}>
          <article className="article">
            <a href="#">
              <div className="article__img-wrapper">
                <img src={agency} alt="Article photo"/>
              </div>
              <p className="article__category">Stories</p>
              <h4 className="article__title">Agency is a business you hire to outsource</h4>
              <p className="article__date">5 Nov, 2021</p>
            </a>
          </article>
          <article className="article">
            <a href="#">
              <div className="article__img-wrapper">
                <img src={outsource} alt="Article photo"/>
              </div>
              <p className="article__category">Design</p>
              <h4 className="article__title">Outsource your digital marketing efforts</h4>
              <p className="article__date">29 Oct, 2021</p>
            </a>
          </article>
          <article className="article">
            <a href="#">
              <div className="article__img-wrapper">
                <img src={business} alt="Article photo"/>
              </div>
              <p className="article__category">Marketing</p>
              <h4 className="article__title">Your business with a variety of digital</h4>
              <p className="article__date">21 Oct, 2021</p>
            </a>
          </article>
        </article>
      </div>
    </section>
  );
}

export default OurBlog;