import React from "react";
import Button from "./Button";
import "../css/GettingStartedSection.css";

const GettingStartedSection = () => {
  return (
    <div className="getting-started">
      <div className="getting-started-description">
        <h1 className="getting-started__heading">
          Getting started with impact
        </h1>
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
