import React from "react";
import BlogCard from "./BlogCard";
import post1 from "../assets/imgs/post_2.jpg";
import post2 from "../assets/imgs/post_3.jpg";
import post3 from "../assets/imgs/post_4.jpg";
import "../css/BlogPostSection.css";

const BlogPostSection = () => {
  const blogCardHeading = "Important of getting a notifications";
  const blogPostSectionTitle = "Blog Posts";
  const blogCardDate = "May 27, 2021 • 12 Comments";
  const blogPostSectionText =
    "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.";
  return (
    <div className="blog-post-section">
      <div className="blog-post-section-row">
        <h1 className="blog-post-section__heading">{blogPostSectionTitle}</h1>
        <p className="blog-post-section__text">{blogPostSectionText}</p>
      </div>

      <div className="blog-card-container">
        <div className="blog-card">
          <BlogCard
            blogCardImg={post1}
            blogCardText={blogPostSectionText}
            blogCardHeading={blogCardHeading}
            blogCardDate={blogCardDate}
          />
        </div>
        <div className="blog-card">
          <BlogCard
            blogCardImg={post2}
            blogCardText={blogPostSectionText}
            blogCardHeading={blogCardHeading}
            blogCardDate={blogCardDate}
          />
        </div>
        <div className="blog-card">
          <BlogCard
            blogCardImg={post3}
            blogCardText={blogPostSectionText}
            blogCardHeading={blogCardHeading}
            blogCardDate={blogCardDate}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostSection;
