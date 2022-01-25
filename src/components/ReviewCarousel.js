import React from "react";
import person1 from "../assets/imgs/person_1.jpg";
import person2 from "../assets/imgs/person_2.jpg";
import person3 from "../assets/imgs/person_3.jpg";
import Review from "./Review";
import "../css/ReviewCarousel.css"

const ReviewCarousel = () => {
  const reviewHeading = "Maria Jones";
  const reviewUserType = "Customer";
  const reviewText =
    "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”";
  return (
    <div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <Review
              reviewImg={person1}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <Review
              reviewImg={person2}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />
          </div>
          <div class="carousel-item">
            <Review
              reviewImg={person3}
              reviewText={reviewText}
              reviewUserType={reviewUserType}
              reviewHeading={reviewHeading}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
