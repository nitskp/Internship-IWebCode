import React from "react";
import Button from "./Button";
import '../css/GettingStartedSection.css'

const GettingStartedSection = () => {
  return (
    <div className="row">
      <div className="col-lg-7">
        <video
          width="732"
          height="470"
          controls
          src="https://www.youtube.com/watch?v=KI2lsdXJQ40"
        ></video>
      </div>
      <div className="col-lg-5 getting-started-description">
        <h1 className="getting-started__heading">Getting started with impact</h1>
        <p className="getting-started__paragraph">
          Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos
          iure recusandae.
        </p>
        <ul className="getting-started__list">
          <li>Deserunt harum incidunt</li>
          <li>Ex nesciunt est temporibus ipsum</li>
          <li>Vel rem eveniet facere et velit sunt</li>
          <li>Aspernatur eaque quis</li>
          <li>Dolorem magnam quisquam? Facere</li>
        </ul>
        <Button buttonText="Learn More" />
      </div>
    </div>
  );
};

export default GettingStartedSection;
