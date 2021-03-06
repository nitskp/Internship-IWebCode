import React from "react";
import Label from "../Label/Label";
import "./Input.css";

const Input = (props: { inputDataObject: any }) => {
  const label: string = props.inputDataObject.label;
  const type = props.inputDataObject.type;
  const placeHolder = props.inputDataObject.placeHolder;
  const isRequired = props.inputDataObject.isRequired;
  return (
    <>
      <Label htmlFor={label} labelValue={label + ": "} />

      {type === "file" ? (
        <div className="input__file">
          <span className="input__file-button">
            <span>
              <svg width="16px" height="16px" viewBox="0 0 16 16">
                <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5 2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z" />
              </svg>
            </span>
            <span className="btn-text">Attach Resume/CV</span>
          </span>
          <input type="file" placeholder={placeHolder} id={label} />
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeHolder}
          id={label}
          className="custom-input"
        />
      )}
    </>
  );
};

export default Input;
