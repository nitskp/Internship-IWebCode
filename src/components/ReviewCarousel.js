import React, { Component } from "react";
import person1 from "../assets/imgs/person_1.jpg";
import person2 from "../assets/imgs/person_2.jpg";
import person3 from "../assets/imgs/person_3.jpg";
import Review from "./Review";
import "../css/ReviewCarousel.css";

class ReviewCarousel extends Component {
  state = {
    currentImg: 0,
    totalNoOfImgs: 3,
  };

  componentDidMount(){
    console.log("Component Mounted");
    let imgs = document.getElementsByClassName("review");
    imgs[0].style.display= "block";


  }

  imgMinus = () => {
    let imgs = document.getElementsByClassName("review");
    let currentImg = this.state.currentImg;
    imgs[currentImg].style.display = "none";
    if (currentImg === 0) {
      currentImg = this.state.totalNoOfImgs - 1;
    } else {
      currentImg -= 1;
    }

    this.changeActive(currentImg,imgs);
    this.setState({currentImg:currentImg})
  };

  imgPlus = () => {
    let imgs = document.getElementsByClassName("review");
    let currentImg = this.state.currentImg;
    imgs[currentImg].style.display = "none";
    if (currentImg === this.state.totalNoOfImgs - 1) {
      currentImg = 0;
    } else {
      currentImg += 1;
    }
    this.changeActive(currentImg, imgs);
    this.setState({currentImg:currentImg})
  };

  changeActive = (currentImg, imgs) => {
    imgs[currentImg].style.display= "block";
    console.log("Current Img", currentImg);
    // console.log("")
  };
  render() {
    const reviewHeading = "Maria Jones";
    const reviewUserType = "Customer";
    const reviewText =
      "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”";

    return (
      <>
        <div className="row review-carousel">
          <div className="col-lg-1 review-carousel__btn-container">
            <button className="review-carousel__btn" onClick={this.imgMinus}>&lt;</button>
          </div>

          <div className="col-lg-6 review-carousel__content">
            <Review
              reviewImg={person1}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />

            <Review
              reviewImg={person2}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />

            <Review
              reviewImg={person3}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />
          </div>

          <div className="col-lg-1 review-carousel__btn-container">
            <button
              className="review-carousel__btn"
              onClick={this.imgPlus}
            >
              &gt;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ReviewCarousel;
