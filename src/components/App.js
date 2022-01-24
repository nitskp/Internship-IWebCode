import "../css/App.css";
import React from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import person1 from "../assets/imgs/persons-group-1.png";
import person2 from "../assets/imgs/persons-group-2.png";
import ImageContainer from "./ImageContainer";
import InfoCard from "./InfoCard";

function App() {
  // make a folder for data for these elements
  const infoHeading1 = "Design";
  const infoText =
    "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.";
  const infoHeading2 = "Applications";
  const infoHeading3 = "eCommerce";
    return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>

      <div className="row">
        <div className="side-col">
          <ImageContainer imageUrl={person1} altText={"person1"} />
        </div>
        <div>
          <Description />
        </div>
        <div>
          <ImageContainer imageUrl={person2} altText={"person2"} />
        </div>
      </div>
      <div className="row">
        <InfoCard  infoText={infoText} infoHeading={infoHeading1}/>
        <InfoCard  infoText={infoText} infoHeading={infoHeading2}/>
        <InfoCard  infoText={infoText} infoHeading={infoHeading3}/>
      </div>
    </div>
  );
}

export default App;
