import React from "react";
import "../css/InfoCard.css"

const InfoCard = (props) => {
  const infoHeading = props.infoHeading;
  const infoText = props.infoText;
  const infoIcon = props.infoIcon + " info__icon";
  return (
    <div className="row">
      <div className="col-1">
        <span className="info__icon">
          <i className={infoIcon}></i>
        </span>
      </div>
      <div className="col-11">
        <h1 class="info__heading">{infoHeading}</h1>
        <p class="info__text">{infoText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
