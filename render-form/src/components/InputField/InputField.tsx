import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import './InputField.css'


const InputField = (props: { dataObject: any }) => {
  const dataObject = props.dataObject;
  const fieldName = dataObject.fieldName;
  
  return (
    <div className="input-container">
      {fieldName === "input" ? (
        <Input inputDataObject={dataObject} />
      ) : fieldName === "select" ? (
        <Select selectDataObject={dataObject}/>
      ) : (
        <Textarea />// Will decide on textarea later
      )}
    </div>
  );
};

export default InputField;
