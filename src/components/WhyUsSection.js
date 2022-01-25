import React from "react";
import Description from "./Description";
import whyUsImg from "../assets/imgs/illustration-1.jpg"
import ImageContainer from "./ImageContainer";
import InfoCard from "./InfoCard";
import "../css/WhyUsSection.css"

const WhyUsSection = () => {
  const whyUsHeading = "Why Growing Your Business is Important";
  const whyUsText =
    "Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?";
  const buttonText = "Learn More";
  const whyUsCardHeading1 = "Professional";
  const whyUsCardHeading2 = "Good Review";
  const whyUsCardHeading3 = "24/7 Support";
  const whyUsCardText =
    "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.";
    const phoneIcon = "fas fa-phone fa-2x";
    const userIcon = "fas fa-user-check fa-2x";
    const messgIcon = "fas fa-envelope-open-text fa-2x";
    return (
    <>
      <div className="row why-us-section">
        <div className="col-lg-5 why-us-section__description">
          <Description descriptionHeading={whyUsHeading} descriptionText={whyUsText} buttonText={buttonText}/>
        </div>
        <div className="col-lg-7">
        <ImageContainer imageUrl={whyUsImg} altText="Why us Image" size={{width: 740,height:460}}/>
        </div>
      </div>
      <div className="row why-us-section__card">
          <div className="col-lg-4">
            <InfoCard infoHeading={whyUsCardHeading1} infoText={whyUsCardText} infoIcon={phoneIcon}/> 
            
          </div>
          <div className="col-lg-4">
            <InfoCard infoHeading={whyUsCardHeading2} infoText={whyUsCardText} infoIcon={userIcon}/> 
            
          </div>
          <div className="col-lg-4">
            <InfoCard infoHeading={whyUsCardHeading3} infoText={whyUsCardText} infoIcon={messgIcon}/> 
            
          </div>
      </div>
    </>
  );
};

export default WhyUsSection;
