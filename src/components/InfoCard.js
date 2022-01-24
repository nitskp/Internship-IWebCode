import React from "react";

const InfoCard = props => {
    const infoHeading = props.infoHeading; 
    const infoText = props.infoText;
  return (
    <div className="row">
      <div className="icon">
        Icon would be here, but have to import it and pass through props.
      </div>
      <div>
          <h1 class="info__heading">{infoHeading}</h1>
          <p class="info__text">{infoText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
