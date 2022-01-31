import React from "react";
import InfoCardIcon from "./InfoCardIcon";
import "../css/InfoCard.css"



const InfoCard = (props) => {
  const infoHeading = props.infoHeading;
  const infoText = props.infoText;
  const infoIcon = props.infoIcon;
  const isImage = props.isImage;
  return (
    <div className="info-card">
      <div className="info-card__icon-container">
        <InfoCardIcon isImage={isImage} infoIcon={infoIcon}/>
      </div>
      <div className="info-card-info-conatiner">
        <h1 className="info-card__heading">{infoHeading}</h1>
        <p className="info-card__text">{infoText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
