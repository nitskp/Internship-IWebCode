import React from "react";
import Button from "./Button";
import "../css/Description.css";

const Description = (props) => {
  const descriptionHeading = props.descriptionHeading;
  const descriptionText = props.descriptionText;
  const buttonText = props.buttonText;
  return (
    <div className="description">
      <h1 className="description__heading">{descriptionHeading}</h1>
      <p className="description__text">
        {descriptionText}
      </p>
        <Button buttonText={buttonText} />
    </div>
  );
};

export default Description;
