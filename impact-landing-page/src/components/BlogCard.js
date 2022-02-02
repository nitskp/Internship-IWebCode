import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import "../css/BlogCard.css";

const BlogCard = (props) => {
  const blogCardImg = props.blogCardImg;
  const blogCardDate = props.blogCardDate;
  const blogCardHeading = props.blogCardHeading;
  const blogCardText = props.blogCardText;
  return (
    <>
      <ImageContainer
        imageUrl={blogCardImg}
        altText="Blog Post Image"
      />
      <div className="blog-card__info">
        <p className="blog-card__date">{blogCardDate}</p>

        <h2 className="blog-card__heading">
          {" "}
          <Link to="/">{blogCardHeading} </Link>
        </h2>

        <p className="blog-card__text">{blogCardText}</p>
        <Link className="blog-card__link" to="/">
          Read More &raquo;
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
