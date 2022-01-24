import React from "react";
import Button from "./Button";
import "../css/Description.css"

const Description = () => {
  return (
    <div className="info">
      <h1 className="info__heading">Let's grow your business with us</h1>
      <p className="info__text">
        Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
        iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam
        minima quo, consequuntur.
      </p>
      <Button buttonText='Get in Touch'/>
    </div>
  );
};

export default Description;
