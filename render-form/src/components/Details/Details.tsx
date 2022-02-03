import React from "react";
import InfoField from "../InfoField/InfoField";
import InputField from "../InputField/InputField";

const Details = (props: { isText: boolean; fields: any[] }) => {
  const isText = props.isText;
  const fields = props.fields;
  return (
    <div className="details-container">
      {
          isText?(fields.map((ele,indx)=>{

            return <InfoField key={"Details" + ele.data1 + indx.toString()} data={ele} />
          })):(fields.map((ele,indx)=>{
           return <InputField key={"Details" + ele.label + indx.toString()} dataObject={ele}/>
                
          }))
        
      }
    </div>
  );
};

export default Details;
