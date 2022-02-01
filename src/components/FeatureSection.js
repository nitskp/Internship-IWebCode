import React from "react";
import Description from "./Description";
import person1 from "../assets/imgs/persons-group-1.png";
import person2 from "../assets/imgs/persons-group-2.png";
import ImageContainer from "./ImageContainer";
import InfoCard from "./InfoCard";
import "../css/FeatureSection.css";
import {MdLayers} from "react-icons/md";
import {MdOutlinePhonelink} from "react-icons/md"
import {MdLocalMall} from "react-icons/md"

const FeatureSection = (props) => {
  //data
  const infoHeading1 = "Design";
  const infoText =
    "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.";
  const infoHeading2 = "Applications";
  const infoHeading3 = "eCommerce";
  const descriptionHeading = "Let's growth your business with us";
  const descriptionText =
    "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.";
  const buttonText = "Get in Touch";
  return (
    <>
      <div className="feature-section">
      <div className="feature-section__person-1">
          <ImageContainer imageUrl={person1} altText="person1" />
        </div>
        <div className="feature-section__description">
          <Description
            descriptionHeading={descriptionHeading}
            descriptionText={descriptionText}
            buttonText={buttonText}
          />
        </div>
        
        <div className="feature-section__person-2">
          <ImageContainer imageUrl={person2} altText="person2" />
        </div>
      </div>
      <div className="feature-section__info-card">
        <InfoCard
          infoHeading={infoHeading1}
          infoText={infoText}
          isImage={false}
          isReactIcon={true}
          ReactIcon={
          [<MdLayers />]
          }
        >
        </InfoCard>
        <InfoCard
          infoHeading={infoHeading2}
          infoText={infoText}
          isImage={false}
          isReactIcon={true}
          ReactIcon={
          [<MdOutlinePhonelink/>]
          }
        >
        </InfoCard>
        <InfoCard
          infoHeading={infoHeading3}
          infoText={infoText}
          isImage={false}
          isReactIcon={true}
          ReactIcon={
            [<MdLocalMall/>]
          }
        >
          
        </InfoCard>
      </div>

      {/* <div className="feature-section">
        <div className="feature-section__left-image">
          <ImageContainer imageUrl={person1} altText="person1" />
        </div>
        <div className="feature-section__description">
          <Description
            descriptionHeading={descriptionHeading}
            descriptionText={descriptionText}
            buttonText={buttonText}
          />
        </div>
        <div className="feature-section__right-image">
          <ImageContainer imageUrl={person2} altText="person2" />
        </div>
      </div>

      <div className="info-card">
        <InfoCard
          infoHeading={infoHeading1}
          infoText={infoText}
          infoIcon={layerIcon}
        />
        <InfoCard
          infoHeading={infoHeading2}
          infoText={infoText}
          infoIcon={phoneIcon}
        />
        <InfoCard
          infoHeading={infoHeading3}
          infoText={infoText}
          infoIcon={bagIcon}
        />
      </div> */}
    </>
  );
};

export default FeatureSection;
