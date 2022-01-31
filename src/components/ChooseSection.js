import React from "react";
import ImageContainer from "./ImageContainer";
import aboutUs from "../assets/imgs/about-us-min.png";
import InfoCard from "./InfoCard";
import "../css/ChooseSection.css"
import phoneIcon from '../assets/imgs/24-hours-support.svg';
import userIcon from '../assets/imgs/good-review.svg';

const ChooseSection = () => {
  const chooseSectionHeading = "Why You Should Choose Us?";
  const chooseHeading1 = "Professional";
  const chooseHeading2 = "Good Review";
  const chooseText =
    "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.";
  return (
    <div className="choose-section">
      <div className="choose-section__description">
        <h1 className="choose-section__heading">{chooseSectionHeading}</h1>
        <div className="choose-section__info">
          <InfoCard infoHeading={chooseHeading1} infoIcon={phoneIcon} infoText={chooseText} isImage={true}/>
          <InfoCard infoHeading={chooseHeading2} infoIcon={userIcon} infoText={chooseText}  
          isImage={true}/>
        </div>
      </div>
      <div className="choose-section__img-container">
        <ImageContainer imageUrl={aboutUs} altText="About us"/>
      </div>
    </div>
  );
};

export default ChooseSection;
