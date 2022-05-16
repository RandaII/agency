import React, {useRef} from "react";
import {useIntersectionObserver} from "../../hooks";
import "./video-reel.scss";

const VideoReel = () =>{

  const block = useRef();
  const animation = useIntersectionObserver(block, `right-translate`);

  return (
    <section className="video-reel main-bgc">
      <div className="width-wrapper inv-child">
        <div className={`slide ${animation}`} ref={block}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oOkGmK3_Hdg" title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
          <div className="text-block main">
            <h5 className="text-block__category category-title">Video Reel</h5>
            <h3 className="text-block__title">Unlock The Greatest Value Possible</h3>
            <p className="text-block__description medium-text">Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoReel;