import React from "react";
import ImageContainer from "./ImageContainer";
import aboutUs from "../assets/imgs/about-us-min.png";
import InfoCard from "./InfoCard";
import "../css/ChooseSection.css"

const ChooseSection = () => {
  const chooseSectionHeading = "Why You Should Choose Us?";
  const chooseHeading1 = "Professional";
  const chooseHeading2 = "Good Review";
  const chooseText =
    "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.";
    const phoneIcon = "fas fa-phone fa-2x";
    const userIcon = "fas fa-user-check fa-2x";
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1>{chooseSectionHeading}</h1>
        <div className="row choose-section__info">
          <InfoCard infoHeading={chooseHeading1} infoIcon={phoneIcon} infoText={chooseText} />
          <InfoCard infoHeading={chooseHeading2} infoIcon={userIcon} infoText={chooseText} />
        </div>
      </div>
      <div className="col-lg-6">
        <ImageContainer imageUrl={aboutUs} altText="About us" size={{width: 630,height:460}}/>
      </div>
    </div>
  );
};

export default ChooseSection;
