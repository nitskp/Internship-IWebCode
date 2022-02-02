import React, { JSXElementConstructor, ReactElement } from "react";
import { JsxElement } from "typescript";

const Heading = (props: { name: string; type: string }) => {
  let headingElement = <></>;
  // console.log(props.type);
  const type: string = props.type;

  switch (type) {
    case "h1": {
      headingElement = <h1>{props.name}</h1>;

      break;
    }
    case "h2": {
      headingElement = <h2>{props.name}</h2>;
      break;
    }
    case "h3": {
      headingElement = <h3>{props.name}</h3>;
      break;
    }
    case "h4": {
      headingElement = <h4>{props.name}</h4>;
      break;
    }
    case "h5": {
      headingElement = <h5>{props.name}</h5>;
      break;
    }
  }

  // console.log(headingElement)
  return <div>{headingElement}</div>;
};

export default Heading;
