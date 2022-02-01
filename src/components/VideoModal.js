import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import Video from "./Video";
import "../css/VideoModal.css";
import heroMin from "../assets/imgs/hero-min.jpg";
import { useState } from "react/cjs/react.development";
import clsx from "clsx";

const Modal = (props) => {
  const videoUrl = props.videoUrl;
  const [toggleDisplay,setToggleDisplay] = props.playStates;
  return(
    <div
        className={clsx("video-modal__content", {
          "video-modal--show": toggleDisplay,
        })}
      >
        <div className="video-modal__cross-button-container">
          <button onClick={() => setToggleDisplay(false)}>&#10539;</button>
        </div>
        <div className="video-modal__video-container">

        <Video videoUrl={videoUrl} />
        </div>
      </div>
  )
}

const VideoModal = () => {
  const [toggleDisplay, setToggleDisplay] = useState(false);
  const imageUrl = heroMin;
  const videoUrl =
    "https://www.youtube-nocookie.com/embed/KI2lsdXJQ40?autoplay=0&controls=1&enablejsapi=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Funtree.co%2Fdemos%2Fimpact%2Findex.html&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=true&enablejsapi=1&origin=https%3A%2F%2Funtree.co&widgetid=6";

  return (
    <div className="video-modal">
      <span>
        <button onClick={() => setToggleDisplay(true)}>&#x25B6;</button>
      </span>
      <Link
        // learn how to send url through link.(It just add it to original url)
        to="/"
        className="video-modal__btn"
      >
        <ImageContainer
          imageUrl={imageUrl}
          altText="hero-min-image"
        />
      </Link>
      {
        toggleDisplay?<Modal playStates={[toggleDisplay,setToggleDisplay]} videoUrl={videoUrl}/>:<></>
      }
      
      
    </div>
  );
};

export default VideoModal;
