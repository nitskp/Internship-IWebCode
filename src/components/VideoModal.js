import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import Video from "./Video";
import "../css/VideoModal.css";
import heroMin from "../assets/imgs/hero-min.jpg";

export default class VideoModal extends Component {
  state = { displayModal: false };
  
  toggleModal = (displayModal) => {
      console.log("Inside displayModal")
    const modal = document.getElementById("modal__content--id")
    if(displayModal){
        modal.style.display = "none";
    }
    else{
        modal.style.display = "block"
    }
}

  toggleDisplay = () => {
      console.log("Button Clicked")
    this.toggleModal(this.state.displayModal);
    this.setState({displayModal:!this.state.displayModal});
    
  }

  

  render() {
    const imageUrl = heroMin;
    const videoUrl =
      "https://www.youtube-nocookie.com/embed/KI2lsdXJQ40?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Funtree.co%2Fdemos%2Fimpact%2Findex.html&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=true&enablejsapi=1&origin=https%3A%2F%2Funtree.co&widgetid=6";

    return (
      <div className="video-modal">
        <span>
          <button onClick={this.toggleDisplay}>&#x25B6;</button>
        </span>
        <Link
          // learn how to send url through link.(It just add it to original url)
          to="/"
          className="video-modal__btn"
        >
          <ImageContainer
            imageUrl={imageUrl}
            altText="hero-min-image"
            // size={{ width: 732, height: 490 }}
          />
        </Link>

        <div className="video-modal__content" id="modal__content--id">
            
            <button onClick={this.toggleDisplay}>&#10539;</button>
            
            
            <Video videoUrl={videoUrl} />
            
         
          
        </div>
      </div>
    );
  }
}
