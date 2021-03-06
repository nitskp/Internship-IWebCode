import React from "react";
import "../css/Review.css";

const Review = (props) => {
  const reviewImg = props.reviewImg;
  const reviewHeading = props.reviewHeading;
  const reviewUserType = props.reviewUserType;
  const reviewText = props.reviewText;
  
  return (
    
    <div className="review">
      <img className="review__img" src={reviewImg} alt="User" />
      <h3 className="review__heading">{reviewHeading}</h3>
      <h4 className="review__user-type">{reviewUserType}</h4>
      <div className="row">
        <div className="review__text">
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
