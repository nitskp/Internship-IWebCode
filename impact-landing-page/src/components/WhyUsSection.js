import React from "react";
import Description from "./Description";
import whyUsImg from "../assets/imgs/illustration-1.jpg";
import ImageContainer from "./ImageContainer";
import InfoCard from "./InfoCard";
import "../css/WhyUsSection.css";
import phoneIcon from "../assets/imgs/24-hours-support.svg";
import userIcon from "../assets/imgs/good-review.svg";
import messgIcon from "../assets/imgs/quotation.svg";
import GettingStartedSection from "./GettingStartedSection";
import VideoModal from "./VideoModal";

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
  return (
    <>
      <div className="why-us-section">
        <div className="why-us-section__row">
          <div className="why-us-section__description">
            <Description
              descriptionHeading={whyUsHeading}
              descriptionText={whyUsText}
              buttonText={buttonText}
            />
          </div>
          <div className="why-us-section__img-container">
            <ImageContainer
              imageUrl={whyUsImg}
              altText="Why us Image"
              size={{ width: 740, height: 460 }}
            />
          </div>
        </div>

        <div className="why-us-section__info-card-container">
          <InfoCard
            infoHeading={whyUsCardHeading1}
            infoText={whyUsCardText}
            infoIcon={phoneIcon}
            isImage={true}
          />

          <InfoCard
            infoHeading={whyUsCardHeading2}
            infoText={whyUsCardText}
            infoIcon={userIcon}
            isImage={true}
          />

          <InfoCard
            infoHeading={whyUsCardHeading3}
            infoText={whyUsCardText}
            infoIcon={messgIcon}
            isImage={true}
          />
        </div>

        <div className="why-us-section__row-2">
          <GettingStartedSection />
          <VideoModal />
        </div>
      </div>
    </>
  );
};

export default WhyUsSection;
