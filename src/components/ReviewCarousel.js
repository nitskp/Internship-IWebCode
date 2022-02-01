import React, { useEffect,useState } from "react";
import person1 from "../assets/imgs/person_1.jpg";
import person2 from "../assets/imgs/person_2.jpg";
import person3 from "../assets/imgs/person_3.jpg";
import Review from "./Review";
import "../css/ReviewCarousel.css";
// import {  } from "react/cjs/react.development";
import clsx from "clsx";

const ReviewCarousel = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const totalNoOfImgs = 3; //change upon total no.of images

  useEffect(()=>{
    setTimeout(()=>{
      setCurrentImg((currentImg+1)%totalNoOfImgs)
    },4000)
  })

  const reviewHeading = "Maria Jones";
  const reviewUserType = "Customer";
  const reviewText =
    "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”";

  return (
    <div className="review-carousel__container">
      <div className="review-carousel">
        <div className="review-carousel__btn-container">
          <button
            className="review-carousel__left-btn"
            onClick={() => setCurrentImg((currentImg + totalNoOfImgs-1)%totalNoOfImgs)}
          >
            &#8964;
          </button>
        </div>

        <div className="review-carousel__content">
          <div
            className={clsx(
              { "review-carousel__review-container": currentImg !== 0 ,
               "review-carousel--show": currentImg === 0 }
            )}
          >
            <Review
              reviewImg={person1}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />
          </div>
          <div
            className={clsx(
              { "review-carousel__review-container": currentImg !== 1 ,
               "review-carousel--show": currentImg === 1 }
            )}
          >
            <Review
              reviewImg={person2}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />
          </div>
          <div
            className={clsx(
              { "review-carousel__review-container": currentImg !== 2 ,
               "review-carousel--show": currentImg === 2 }
            )}
          >
            <Review
              reviewImg={person3}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />
          </div>
        </div>

        <div className="review-carousel__btn-container">
          <button
            className="review-carousel__right-btn"
            onClick={() => setCurrentImg((currentImg+1)%totalNoOfImgs)}
          >
            &#8964;
          </button>
        </div>
      </div>
      <div className="review-carousel__round-btn-container">
        <button
          className={clsx("review-carousel__round-btn", {
            "review-carousel__red-background": currentImg === 0,
          })}
          onClick={() => setCurrentImg(0)}
        ></button>
        <button
          className={clsx("review-carousel__round-btn", {
            "review-carousel__red-background": currentImg === 1,
          })}
          onClick={() => setCurrentImg(1)}
        ></button>
        <button
          className={clsx("review-carousel__round-btn",{
            "review-carousel__red-background": currentImg === 2,
          })}
          onClick={() => setCurrentImg(2)}
        ></button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
