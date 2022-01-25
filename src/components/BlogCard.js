import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";

const BlogCard = (props) => {
  const blogCardImg = props.blogCardImg;
  const blogCardDate = props.blogCardDate;
  const blogCardHeading = props.blogCardHeading;
  const blogCardText = props.blogCardText;
  return (
    <>
      <ImageContainer
        urlImage={blogCardImg}
        altText="Blog Post Image"
        size={{ width: 380, height: 330 }}
      />
      <p>{blogCardDate}</p>
      <Link to="/">
        <h2>{blogCardHeading}</h2>
      </Link>
      <p>{blogCardText}</p>
      <Link to='/'>Read More &raquo;</Link>
    </>
  );
};

export default BlogCard;
