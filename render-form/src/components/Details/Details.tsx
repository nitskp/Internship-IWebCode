import React from "react";

const Details = (props: { isText: boolean; fields: any[] }) => {
  const isText = props.isText;
  const fields = props.fields;
  console.log(fields);
  return (
    <div>
      {fields.map((ele, indx) => {
        if (isText) {
          return <div>It's text</div>;
        } else {
          return <div key={"Details" + indx.toString}>{ele.label}</div>;
        }
      })}
    </div>
  );
};

export default Details;
